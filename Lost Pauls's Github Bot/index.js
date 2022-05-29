/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
require("dotenv").config();
const Raven = require("raven");
Raven.config(process.env.Raven).install();
const fetch = require('node-fetch');
module.exports = (app) => {
  app.log.info("App was loaded!");
  /*
  Create files
  context.octokit.repos.createOrUpdateFileContents

  */
  app.recentActions = new Map()

  function notDoneYet(string) {
    let fileName = string.slice(string.lastIndexOf("/") + 1)
    let directory = string.slice(0, string.lastIndexOf("/"))
    return `${directory}/not-done-yet#${fileName}`
  }


  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.repos
      .getContent({
        owner: "LostPaul",
        repo: "emoji-guardian-translations",
        path: "languages",
      })
    return context.octokit.issues.createComment(issueComment);

  });
  app.on("push", async (context) => {

    let newFiles = new Map()
    let deleteFiles = new Map()
    let sha
    let languageFolder
    await context.octokit.repos
      .getContent({
        owner: "LostPaul",
        repo: "emoji-guardian-translations",
        path: "languages",
      })
      .then((result) => {
        languageFolder = result
        sha = result.data.sha;
      });
    for (const commit of context.payload.commits) {
      for (const value of commit.added) {
        if (value.startsWith("languages/en/")) {
          let file = await fetch("https://raw.githubusercontent.com/LostPaul/emoji-guardian-translations/main/" + value)
          file = await file.text()
          result = Buffer.from(file)
          result = result.toString("base64");
          newFiles.set(value, { path: value.slice(value.indexOf("/en/") + 4), content: result })
        }
      }
      for (const value of commit.removed) {
        if (value.startsWith("languages/en/")) {
          deleteFiles.set(value, { path: value.slice(value.indexOf("/en/") + 4) })
        }
      }
    }
    if (newFiles.size > 0) {
      languageFolder.data.forEach(async (folder) => {
        if (folder.path !== "languages/en" && folder.path !== "languages/variables.json") {
          newFiles.forEach(async (value, key) => {
            let path = folder.path + "/" + value.path.slice(0, value.path.lastIndexOf("/"))
            path = path.split("/")
            path = path.slice(0, -1)
            path = path.join("/")

            await context.octokit.repos
              .getContent({
                owner: "LostPaul",
                repo: "emoji-guardian-translations",
                path: path,
              })
              .then((result) => {
                path = value.path.split("/")
                path = path[path.length - 2]
                sha = result.data.filter((file) => file.name === path)[0].sha;
              });
            await context.octokit.repos.createOrUpdateFileContents({
              owner: "LostPaul",
              repo: "emoji-guardian-translations",
              path: folder.path + "/" + notDoneYet(value.path),
              message: "Sync translation folders",
              content: value.content,
              sha: sha,
            })
          })
        }
      })
    }
    if (deleteFiles.size > 0) {
      languageFolder.data.forEach(async (folder) => {
        if (folder.path !== "languages/en" && folder.path !== "languages/variables.json") {
          deleteFiles.forEach(async (value) => {
            let path = folder.path + "/" + value.path.slice(0, value.path.lastIndexOf("/"))
            path = path.split("/")
            path = path.slice(0, -1)
            path = path.join("/")
            await context.octokit.repos
              .getContent({
                owner: "LostPaul",
                repo: "emoji-guardian-translations",
                path: folder.path + "/" + notDoneYet(value.path),
              })
              .then((result) => {
                sha = result.data.sha;
              });
            await context.octokit.repos.deleteFile({
              owner: "LostPaul",
              repo: "emoji-guardian-translations",
              path: folder.path + "/" + notDoneYet(value.path),
              message: "Sync translation folders",
              sha: sha,
            })
          })
        }
      })
    }
  })


  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

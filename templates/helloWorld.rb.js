// additional info for templates like copy extra libraries.
// in this case library needs JSON
const config = {
  files: [],
  commands: [process.platform !== "win32" ? "apt install -y ruby-json" : ""],
  repos: [],
  descriptions: [],
};

module.exports = config;

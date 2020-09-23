// additional info for templates like copy extra libraries.
// in this case library needs JSON
const os = require("@nexssp/os");
const getInstaller = () => {
  switch (os.name()) {
    case os.distros.AMAZON:
      return ""; //No install needed
    default:
      return "apt install -y ruby-json";
  }
};

const config = {
  files: [],
  commands: [getInstaller()],
  repos: [],
  descriptions: [],
};

module.exports = config;

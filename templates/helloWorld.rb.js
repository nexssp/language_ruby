// additional info for templates like copy extra libraries.
// in this case library needs JSON
const getInstaller = () => {
  switch (process.distro) {
    case process.distros.AMAZON:
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

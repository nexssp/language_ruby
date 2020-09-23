let languageConfig = Object.assign({}, require("./ruby.win32.nexss.config"));

languageConfig.compilers = {
  ruby: {
    install: "brew install ruby",
    command: "ruby",
    args: "-EUTF-8 <file> -- ",
    help: ``,
  },
};

module.exports = languageConfig;

let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Ruby";
// pl.addHelp("executeCommandLine", "ruby -e");
// pl.addHelp("InteractiveShell", "irb");
// pl.addHelp(
//   "Issues with compiling packages on Windows",
//   `Install Ruby from https://rubyinstaller.org/downloads/`
// );
languageConfig.description =
  "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.";
languageConfig.url = "https://www.ruby-lang.org";
languageConfig.extensions = [".rb"];
languageConfig.builders = {
  // ocra: {
  //   install: "gem install ocra",
  //   command: "ocra",
  //   build: function() {
  //     return "ocra";
  //   },
  //   args: "<file> --output <destinationFile>",
  //   help: ``
  //}
};
languageConfig.compilers = {
  ruby: {
    install: "scoop install ruby",
    command: "ruby",
    args: "-EUTF-8 <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.ruby.errors");
languageConfig.languagePackageManagers = {
  gem: {
    installation: "installed.",
    messageAfterInstallation: "",
    installed: "gem installed",
    search: "gem search",
    install: "gem install",
    uninstall: "gem remove",
    help: "gem",
    version: "gem version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "gem"
  }
};

module.exports = languageConfig;

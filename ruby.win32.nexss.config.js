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
  tofill: {
    install: "scoop install llvm",
    //build: "pkg --output <destinationFile> --out-path <destinationPath> <file>",
    command: "clang++",
    build: function() {
      const path = require("path");
      //take command from current folder
      return path.join(__dirname, "customCompiler.win32.ruby.cmd");
    },
    args: "<file> <destinationFile>",
    // C++ needs to be build to exe, so no compile option
    help: ``
  }
};
languageConfig.compilers = {
  ruby: {
    install: "scoop install ruby",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "ruby",
    args: "-EUTF-8 <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.ruby.errors");
languageConfig.languagePackageManagers = {
  gem: {
    installation: "installed.",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "gem installed <args>",
    search: "gem search <args>",
    install: "gem install <args>",
    uninstall: "gem remove <args>",
    help: "gem <args>",
    version: "gem version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "gem <default> <args>"
  }
};

module.exports = languageConfig;

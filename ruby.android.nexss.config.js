let languageConfig = Object.assign({}, require("./ruby.win32.nexss.config"));

languageConfig.compilers = {
  ruby: {
    install: "pkg install -y ruby",
    command: "ruby",
    args: "-EUTF-8 <file> -- ",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

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
    init: () => { },
    // if command not found in specification
    // run directly on package manager
    else: "gem",
  },
};

module.exports = languageConfig;

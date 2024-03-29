let languageConfig = Object.assign({}, require("./ruby.win32.nexss.config"));

languageConfig.compilers = {
  ruby: {
    install: "apt install -y ruby",
    command: "ruby",
    args: "-EUTF-8 <file> -- ",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  default:
    languageConfig.compilers.ruby.install = process.replacePMByDistro(
      languageConfig.compilers.ruby.install
    );
    break;
}

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
    else: "gem",
  },
};

module.exports = languageConfig;

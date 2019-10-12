module.exports = {
  description: "Ruby",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "ruby",
  extension: ".rb",
  executeCommandLine: "",
  InteractiveShell: "",
  packageManager: {
    win32: "gem install",
    darwin: "gem install",
    linux: "gem install"
  },
  packageManagerInstallation: {
    win32: "scoop install gem",
    darwin: "brew install gem",
    linux: "apt install gem -y"
  },
  errors: {
    "1: (.*?): not found": {
      win32: "scoop install <package>",
      darwin: "nexss install <package>",
      linux:
        "sudo nexss install <fileextension> OR sudo apt-get install -y <package>"
    },
    "`require': cannot load such file -- (.*?) (LoadError)": {
      win32: "gem install <package>",
      darwin: "gem install <package>",
      linux: "sudo nexss install rb <package>"
    }
  },
  url: ""
};

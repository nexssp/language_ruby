const { ProgrammingLanguage } = require("../../lib/programmingLanguage");
const pl = new ProgrammingLanguage(".rb");

pl.add("title", "Ruby");
pl.add("description", `Ruby`);
pl.add("packageManager", { all: "gem install" });
pl.add("compiler", "ruby");
// pl.add("packageManagerInstallation", {
//   win32: "PowerShell.exe -File installComposer.ps1",
//   linux: "bash install/installComposer.sh",
//   darwin: "bash install/installComposer.sh"
// });

// pl.add("packageManagerUpdate", {
//   win32: "PowerShell.exe -File updateComposer.ps1",
//   linux: "bash install/updateComposer.sh",
//   darwin: "bash install/updateComposer.sh"
// });

pl.add("compilerInstallation", {
  win32: "scoop install <package>",
  linux: "sudo apt-get -y install <package>",
  darwin: `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
});
pl.add("packageManager", {
  all: "gem install <package>"
});
// pl.add("afterPackageInstallMessage", {
//   all:
//     "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';"
// });
pl.add("url", "https://www.ruby-lang.org");
pl.addError("1: (.*?): not found", {
  win32: "scoop install <package>",
  darwin: "nexss install <package>",
  linux:
    "sudo nexss install <fileextension> OR sudo apt-get install -y <package>"
});
// global error
pl.addError("`require': cannot load such file -- (.*?) ", {
  win32: "gem install <package>",
  darwin: "gem install <package>",
  linux: "sudo nexss install rb <package>"
});
// specified package error
pl.addError("`require': cannot load such file -- ruby2d ", {
  win32: `After running gem install, it will ask you to install msys2 environment. It can take a while
If you are having issues with installing try to install ruby+ruby devkit from https://rubyinstaller.org/downloads/
    `,
  darwin: ".",
  linux: "."
});

pl.addHelp("executeCommandLine", "ruby -e");
pl.addHelp("InteractiveShell", "irb");
pl.addHelp(
  "Issues with compiling packages on Windows",
  `Install Ruby from https://rubyinstaller.org/downloads/`
);
module.exports = pl.data;

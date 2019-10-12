module.exports = {
  win32: {
    "`require': cannot load such file -- (.*?) ": "gem install <package>",
    "`require': cannot load such file -- ruby2d ": `After running gem install, it will ask you to install msys2 environment. It can take a while
If you are having issues with installing try to install ruby+ruby devkit from https://rubyinstaller.org/downloads/
    `
  }
};

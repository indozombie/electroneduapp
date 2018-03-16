const remote = require("electron").remote;
const {
  electron,
  app,
  BrowserWindow,
  Menu,
  globalShortcut
} = require("electron");
const ipcRenderer = require("electron").ipcRenderer;
const main = require("../src/main.js").remote;
const template = [
  {
    label: "File",
    submenu: [
      {
        label: "Create File"
      },
      {
        label: "Import File"
      },
      {
        label: "Open Recent"
      },
      {
        type: "separator"
      },
      {
        label: "Save",
        accelerator: "CmdorCtrl+ALT+S"
      },
      {
        label: "Save As",
        accelerator: "CmdorCtrl+S"
      },
      {
        type: "separator"
      },
      {
        label: "Exit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "a"
      },
      {
        label: "a"
      },
      {
        label: "a"
      },
      {
        label: "separator"
      },
      {
        label: "a"
      },
      {
        label: "a"
      },
      {
        label: "a"
      },
      {
        type: "separator"
      },
      {
        label: "a"
      }
    ]
  },
  {
    label: "Comments",
    submenu: [
      {
        label: "Create File",
        accelerator: "CmdorCtrl+F"
      },
      {
        label: "Import File",
        accelerator: "CmdorCtrl+ALT+F"
      },
      {
        label: "Save File",
        accelerator: "CmdorCtrl+Shift+F"
      },
      {
        type: "separator"
      },
      {
        label: "Create Comment Database",
        accelerator: "CmdorCtrl+D"
      },
      {
        label: "Find Comment Database",
        accelerator: "CmdorCtrl+D"
      },
      {
        label: "Save Comment Database",
        accelerator: "CmdorCtrl+Shift+D"
      },
      {
        type: "separator"
      },
      {
        label: "Clear All"
      }
    ]
  },
  {
    label: "Attendance",
    submenu: [
      {
        label: "Create List"
      },
      {
        label: "Import List"
      },
      {
        label: "Save List"
      },
      {
        type: "separator"
      },
      {
        label: "Date Today...",
        id: "dateToday",
        click() {
          opendateWindow();
        }
      },
      {
        type: "separator"
      },
      {
        label: "Clear All"
      }
    ]
  },
  {
    label: "Options",
    submenu: [
      {
        label: "Word Count"
      },
      {
        label: "Character Count"
      },
      {
        label: "Spell Check"
      },
      {
        label: "Grammar Check"
      }
    ]
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Check for Updates"
      },
      {
        label: "Share with other Teachers"
      },
      {
        label: "Ask the Community",
        click() {}
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// Adding function for a click on MenuItem
const dateFormat = require("dateformat");

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
var dateToday = null;
//Function for click event
function opendateWindow() {
  if (dateToday) {
    dateToday.focus();
    return;
  }
  // Defining window size
  dateToday = new BrowserWindow({
    height: 600,
    resizable: false,
    width: 800,
    title: "The Date Today is...",
    minimizable: true,
    fullscreenable: false,
    frame: true,
    backgroundColor: "#823981"
  });
  dateToday.once("ready-to-show", () => {
    dateToday.show();
  });
  // Setting Menu in Window to not show
  dateToday.setMenu(null);
  // Window URL
  dateToday.loadURL("file://${__dirname}/navbar/date.html");
  // On close of window
  dateToday.on("closed", function() {
    dateToday = null;
  });
}
// End of Click Window function

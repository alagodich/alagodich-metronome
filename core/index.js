const electron = require('electron'),
    // Module to control application life.
    app = electron.app,
    // Module to create native browser window.
    BrowserWindow = electron.BrowserWindow,
    path = require('path'),
    url = require('url'),
    ipc = electron.ipcMain,
    Menu = electron.Menu,
    lookAhead = 50.0; // better be 25.0

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow,
    timer;

ipc.on('start', event => {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => event.sender.send('tick'), lookAhead);
});

ipc.on('stop', () => clearInterval(timer));

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        frame: false
    });

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../renderer/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();
        mainWindow.focus();

        // Open the DevTools.

        // mainWindow.webContents.openDevTools();

        // Enable inspect in context menu

        // mainWindow.webContents.on('context-menu', (event, props) => {
        //     const {x, y} = props;
        //
        //     Menu.buildFromTemplate([{
        //         label: 'Inspect element',
        //         click() {
        //             mainWindow.inspectElement(x, y);
        //         }
        //     }]).popup(mainWindow);
        // });
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

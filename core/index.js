const electron = require('electron'),
    // Module to control application life.
    app = electron.app,
    // Module to create native browser window.
    BrowserWindow = electron.BrowserWindow,
    path = require('path'),
    url = require('url'),
    ipc = electron.ipcMain,
    store = require('./store.js')();

store.dispatch({
    type: 'SET_ENTRIES',
    entries: [
        'Shallow Grave',
        'Trainspotting',
        'A Life Less Ordinary',
        'The Beach',
        '28 Days Later',
        'Millions',
        'Sunshine',
        'Slumdog Millionaire',
        '127 Hours',
        'Trance',
        'Steve Jobs'
    ]
});
store.dispatch({type: 'NEXT'});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

ipc.on('asynchronous-message', event => {
    event.sender.send('asynchronous-reply', 'pong');
});

// When window loaded, subscribe it to the store
ipc.on('window-connected', event => {
    event.sender.send('store-update', store.getState().toJS());
    store.subscribe(() => {
        event.sender.send('store-update', store.getState().toJS());
    });
    event.sender.on('action', store.dispatch.bind(store));
});

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 800,
        show: false
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
        mainWindow.webContents.openDevTools();
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
require('./main.js');
require('./reducer.js');

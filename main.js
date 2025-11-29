// This is the main process, where you access the app
// Very important that you remember to go to package.json, and under scripts, add "start": "electron ."

// console.log("Hello from Electron!");

const { app, BrowserWindow } = require("electron");

/**
 * Creates a new Electron window.
 * @returns {void} - nothing
 * @description This function creates a new Electron window with a width of 800 and a height of 600. It then loads the "index.html" file into that window.
 */
const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    });

    window.loadFile("index.html");
};

/**
 * This function is called when the app is ready to run. It creates a new window and starts the app.
 * @returns {void} - nothing
 */
app.whenReady().then(() => {
    createWindow();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    };
});


/**
 * This function is called when all windows are closed. It quits the app.
 * @returns {void} - nothing
 */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});
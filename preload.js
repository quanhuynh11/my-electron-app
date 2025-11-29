// This is the preload script for the app, it will allow you to access and expose functions from the main process to the renderer process

const { contextBridge, ipcRenderer } = require("electron");

/**
 * Expose functions from the main process to the renderer process
 */
contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke("ping"),
    // we can also expose variables, not just functions
});

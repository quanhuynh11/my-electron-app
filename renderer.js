// renderer.js is a script that allows you to run JavaScript to index.html

// look for an element with the id of info
const information = document.getElementById('info')

// change the text of the element to the version of Chrome, Node.js, and Electron
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

/**
 * Calls the ping function exposed by the preload script and logs the response.
 * @returns {Promise<void>} - a promise that resolves when the ping function has been called and logged.
 */
const pingFunction = async () => {
    const response = await window.versions.ping();
    console.log(response); 
    information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})\n\nThe response from the ping function is: ${response}`
};

pingFunction();
const os = require("os")
const path = require("path")
const { contextBridge } = require("electron")

contextBridge.exposeInMainWorld("os", {
    homedir: () => os.homedir()

    // we can also expose variable, not just functions
})

contextBridge.exposeInMainWorld("path", {
    join: (...args) => path.join(...args)

    // we can also expose variable, not just functions
})
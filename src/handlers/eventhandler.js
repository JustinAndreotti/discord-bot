const path = require('path');
const getAllFiles = require('../utils/getAllFiles');

module.exports = (client) => {
    //get all folders inside of events folder
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

    for (const eventFolder of eventFolders){
        const eventFiles = getAllFiles(eventFolder);
        eventFiles.sort((a, b) => a > b);
        
        //get folder names
        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();
        
        client.on(eventName, async(arg) => {
            for (const eventFile of eventFiles){
                //extract the function out of the files
                const eventFunction = require(eventFile);
                await eventFunction(client, arg)
            }
        });
    }
};
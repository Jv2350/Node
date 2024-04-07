const { exec } = require('child_process');
const fs = require('fs');

// Command based on the operating system
const command = process.platform === 'win32' ? 'dir' : 'ls';

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error}`);
        return;
    }

    if (stderr) {
        console.error(`Command error: ${stderr}`);
        return;
    }

    // Write the output to a text file
    fs.writeFile('output.txt', stdout, (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }
        console.log('Command output saved to output.txt');
    });
});

const fs = require('fs');

// Step 1: Create a file and write initial content to it
fs.writeFile('data.txt', 'This is the initial content of the file.\n', (err) => {
    if (err) throw err;
    console.log('File created and initial content written.');

    // Step 2: Read the content of the file and log it to the console
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Content of the file:');
        console.log(data);

        // Step 3: Append new content to the file
        const newContent = 'This is the appended content.\n';
        fs.appendFile('data.txt', newContent, (err) => {
            if (err) throw err;
            console.log('New content appended to the file.');

            // Step 4: Delete the file after a timeout of 10 seconds
            setTimeout(() => {
                fs.unlink('data.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted after 10 seconds.');
                });
            }, 10000); // 10000 milliseconds = 10 seconds
        });
    });
});

const fs = require('fs');
const url = require('url').URL
const readline = require('readline');
const axios = require('axios')


const file = readline.createInterface({
    input: fs.createReadStream('urls.txt'),
    output: process.stdout,
    terminal: false

});

file.on('line', (line) => {
    let newURL = new URL(line)
    axios.get(`${newURL}`).then(response => {
        fs.writeFile(`${newURL.hostname}`,response.data,function(err) {
            if (err) {
                console.error(`Couldn't download ${newURL.hostname}`)
            };
            console.log(`Wrote to ${newURL.hostname}`)
        })
    })
    .catch(err => {
        console.error(`Couldn't download ${newURL.hostname}`)
    })
})


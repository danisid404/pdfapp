

async function createbarcode() {
    console.log('1');
    console.log( await generateBarcode('test'));
    console.log('2');
}


function generateBarcode(txt) {
    return new Promise(resolve => {


        const bwipjs = require('bwip-js');
        const fs = require('fs');
        bwipjs.toBuffer({
            bcid: 'code128',       // Barcode type
            text: txt,    // Text to encode
            scale: 2,               // 3x scaling factor
            height: 8,              // Bar height, in millimeters
            includetext: false,            // Show human-readable text
            textxalign: 'center',        // Always good to set this
            backgroundcolor: 'FFFFFF'
        }, function (err, png) {
            if (err) {
                // Decide how to handle the error
                // `err` may be a string or Error object
            } else {
                //console.log(png.toString('base64'));
                resolve('data:image/png;base64,' + png.toString('base64'));
            }
        });
    });
}

createbarcode();

// var ShortUniqueId = require('short-unique-id');

// console.log((new ShortUniqueId()).randomUUID(8).toUpperCase());

// const exec = util.promisify(require('child_process').exec);

// ret = await exec('pdftk pdfs\absolute.pdf dump_data');
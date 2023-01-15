const express = require('express');
const router = express.Router();
const PDFExtract = require('pdf.js-extract').PDFExtract;
const fs = require('fs');


//Get data from pdf
router.get('/reader', async (req, res) => {
    try {
        const pdfExtract = new PDFExtract();
        const buffer = fs.readFileSync("./testing/HackathonJDs/JD1.pdf");
        const options = {};
        pdfExtract.extractBuffer(buffer, options, (err, data) => {
            if (err) {
                return console.log(err);
            }
            else {
                console.log(data);
                res.status(200).json({
                    status: 200,
                    pdfData: data
                })
            }
        });
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

module.exports = router
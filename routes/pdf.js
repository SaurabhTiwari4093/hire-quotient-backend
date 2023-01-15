const express = require('express');
const router = express.Router();
const pdfParse = require('pdf-parse')
const fs = require('fs');


//Get data from pdf
router.get('/reader', async (req, res) => {
    try {
        const buffer = fs.readFileSync("./testing/HackathonJDs/JD1.pdf");
        pdfParse(buffer).then((data) => {
            console.log(data);
            res.status(200).json({
                status: 200,
                pdfText: data.text
            })
        });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
})

module.exports = router
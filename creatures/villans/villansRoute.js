const { json } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const villans = ["villan1", "villan2", "villan3"];
    res.status(200).json(villans);
});

module.exports = router;

var express = require('express');
const router = express.Router;
const {
    termcontrol
} = require('../controller/terms_control');
router.get("/getTerm", function (req, res) {
    res.send('termcontrol');
});
module.exports = router;
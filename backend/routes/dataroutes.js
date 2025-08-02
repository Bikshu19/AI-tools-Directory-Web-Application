const express = require('express');
const router = express.Router();
const { getDataByCollection,getInfo,getapis, getbot,getToolsByCollection,compareTools} = require('../controllers/datacontroller');

router.get('/get-data/:category', getDataByCollection);
router.get('/get-info',getInfo)
router.get('/apis',getapis)
router.post('/chatbot',getbot);
router.get('/tools/:collectionName', getToolsByCollection);
router.get('/compare', compareTools);


module.exports = router;

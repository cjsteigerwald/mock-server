const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

console.log('This is root: ', rootDir);

const mockApi = require(`${rootDir}/data/mock`);

router.get('/getUserId', (req, res, next) => {
	res.status(200).send(mockApi.getUserId);
});

router.get('/getOrgProfile', (req, res, next) => {
	res.status(200).send(mockApi.getOrgProfile);
});

module.exports = router;

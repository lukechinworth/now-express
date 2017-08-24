const express = require('express');

const app = express();

app.get('/', async (req, res, next) => {
	const response = await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Hello, Now');
		}, 500);
	});

	res.send(response);
});

app.listen(80);

const request = require('request');
const http = require('http');
const { get } = require('request');

const options = {
    hostname: 'schedule.kpi.kharkov.ua',
    path: '/JSON/AudListByBuilding/{bid}/',
    method: 'GET',
    headers: {
    }
}

function getData() {
  http.get(options, res => {
      const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        module.exports = parsedData;
        //console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
};

module.exports.getData = getData();

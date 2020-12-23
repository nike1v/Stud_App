const fetch = require('node-fetch');

let getData = async function (userInput) {
  try {
    const res = await (await fetch('http://schedule.kpi.kharkov.ua/json/FacultyList/')).json();
    return res.find(el => el.id === userInput).title;
  } catch (error) {
    console.log('Error: ', error);
  }
};

module.exports = getData;
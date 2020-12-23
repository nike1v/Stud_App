const { get } = require('http');
const fetch = require('node-fetch');

let getData = async function (userInput) {
  try {
    const res = await (await fetch('http://schedule.kpi.kharkov.ua/json/FacultyList/')).json();
    //console.log(res);
    res.forEach(element => {
      if (element.id === userInput) {
        let result = element.title;
        //console.log(result);
        return result;
      }
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};

module.exports = getData;
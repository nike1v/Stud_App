const AudListByBuilding = require("./AudListByBuilding/index.js");
const AudListByKafedra = require("./AudListByKafedra/index.js");
const BuildingList = require("./BuildingList/index.js");
const DeptsByFacultyP = require("./DeptsByFacultyP/index.js");
const Faculty = require("./Faculty/index.js");
const FacultyList = require("./FacultyList/index.js");
const GroupByFacultyList = require("./GroupByFacultyList/index.js");
const PrepodListByDeptP = require("./PrepodListByDeptP/index.js");
/*const SearchGroups = require("./SearchGroups/index.js");
const SearchPrepod = require("./SearchPrepod/index.js");*/
const Shedule = require("./Shedule/index.js");
const Shedule2 = require("./Shedule2/index.js");
const Shedule2A = require("./Shedule2A/index.js");
const Shedule2P = require("./Shedule2P/index.js");
const SheduleA = require("./SheduleA/index.js");
const SheduleP = require("./SheduleP/index.js");
const express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.send("work")
    response.send(request.query.id);
    
})

app.listen(3000);
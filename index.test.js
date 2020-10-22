//const Api = require ("api");
const AudListByBuilding = require("./AudListByBuilding/index.js");
const AudListByKafedra = require("./AudListByKafedra/index.js");
const BuildingList = require("./BuildingList/index.js");
const DeptsByFacultyP = require("./DeptsByFacultyP/index.js");
const Faculty = require("./Faculty/index.js");
const FacultyList = require("./FacultyList/index.js");
const GroupByFacultyList = require("./GroupByFacultyList/index.js");
const PrepodListByDeptP = require("./PrepodListByDeptP/index.js");
const SearchGroups = require("./SearchGroups/index.js");
const SearchPrepod = require("./SearchPrepod/index.js");
const Shedule = require("./Shedule/index.js");
const Shedule2 = require("./Shedule2/index.js");
const Shedule2A = require("./Shedule2A/index.js");
const Shedule2P = require("./Shedule2P/index.js");
const SheduleA = require("./SheduleA/index.js");
const SheduleP = require("./SheduleP/index.js");

test('fetch AudListByBuilding', async () => {
    const AuditorysByBuild = await AudListByBuilding;

    expect(AuditorysByBuild).toBeTruthy();
});
test('fetch AudListByKafedra', async () => {
    const AuditorsByKafedra = await AudListByKafedra;

    expect(AuditorsByKafedra).toBeTruthy();
});
test('fetch BuildingList', async () => {
    const Buildings = await BuildingList;

    expect(Buildings).toBeTruthy();
});
test('fetch DeptsByFacultyP', async () => {
    const DepByFacultP = await DeptsByFacultyP;

    expect(DepByFacultP).toBeTruthy();
});
test('fetch Facultys', async () => {
    const Facultys = await Faculty;

    expect(Facultys).toBeTruthy();
});
test('fetch FacultyList', async () => {
    const FacList = await FacultyList;

    expect(FacList).toBeTruthy();
});
test('fetch GroupByFacultyList', async () => {
    const GrFacList = await GroupByFacultyList;

    expect(GrFacList).toBeTruthy();
});
test('fetch PrepodListByDeptP', async () => {
    const PreListDepartments = await PrepodListByDeptP;

    expect(PreListDepartments).toBeTruthy();
});
test('fetch SearchGroups', async () => {
    const SrchGroups = await SearchGroups;

    expect(SrchGroups).toBeTruthy();
});
test('fetch SearchPrepod', async () => {
    const SrchPrepod = await SearchPrepod;

    expect(SrchPrepod).toBeTruthy();
});
test('fetch Shedule', async () => {
    const Sh1 = await Shedule;

    expect(Sh1).toBeTruthy();
});
test('fetch Shedule2', async () => {
    const Sh2 = await Shedule2;

    expect(Sh2).toBeTruthy();
});
test('fetch Shedule2A', async () => {
    const Sh2A = await Shedule2A;

    expect(Sh2A).toBeTruthy();
});
test('fetch Shedule2P', async () => {
    const Sh2P = await Shedule2P;

    expect(Sh2P).toBeTruthy();
});
test('fetch SheduleA', async () => {
    const ShA = await SheduleA;

    expect(ShA).toBeTruthy();
});
test('fetch SheduleP', async () => {
    const ShP = await SheduleP;

    expect(ShP).toBeTruthy();
});


/*Faculty
.fetchOne({id})
.then(()=> {// handle success
})
.catch(()=> {// handle failise
})
*/
const student=[{stuId:1,stuName:'Divya',address:'600023',city:'chennai',mark:87},
{stuId:2,stuName:'Viji',address:'900076',city:'Banglore',mark:70},
{stuId:3,stuName:'Krithi',address:'408811',city:'Mumbai',mark:57},
{stuId:4,stuName:'Sumi',address:'200343',city:'Delhi',mark:43}]
student.sort((a, b) => {
    console.log(a);
    console.log(b);
    let fa = a.stuName.toLowerCase(),
        fb = b.stuName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log(" Sort the student details by Name: ");
const newstudents=student.map((e)=>{
    console.log(`StudentName:${e.stuName}, StudentId:${e.stuId}, Adrress:${e.address}, City:${e.city}, Marks:${e.mark}`)
    return e});

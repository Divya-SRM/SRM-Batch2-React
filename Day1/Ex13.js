const student=[{stuId:1,stuName:'Divya',address:'600023',city:'chennai',mark:87},
{stuId:2,stuName:'Viji',address:'900076',city:'Banglore',mark:70},
{stuId:3,stuName:'Krithi',address:'408811',city:'Mumbai',mark:57},
{stuId:4,stuName:'Sumi',address:'200343',city:'Delhi',mark:43}]
const newstudents=student.filter(student => {
    let city=student.city;
    if(city =="Banglore" || city=="chennai")  
    return true;
    else
    return false;
    }).map((e)=>{
        console.log(`StudentName:${e.stuName}, StudentId:${e.stuId}, Adrress:${e.address}, City:${e.city}, Marks:${e.mark}`)
        return e});


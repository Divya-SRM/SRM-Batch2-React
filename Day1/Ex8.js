let emp=["divya","krithika","viji","sumi","mani"];

    const str=emp.map((x,idx)=>{
        if (idx%2==0)   
    return `Er.${x}`;
    else
    return `Dr.${x}`;    
})
console.log(str);

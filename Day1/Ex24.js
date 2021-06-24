let num=new Map();
let k1=1;
let k2=2;
let k3=3;
console.log("MAP USAGE");
num.set(k1,"One");
num.set(k2,"Two");
num.set(k3,"Three");
num.forEach((v,k)=>{
    console.log(k+","+v);
})
k1=null;
console.log("\nBenefit of Map (null):");
num.forEach((v,k)=>{
    console.log(k+","+v);
})
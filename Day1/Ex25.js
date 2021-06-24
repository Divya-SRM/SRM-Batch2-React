var wkmap = new WeakMap();
let k1={1:"one"};
let k2={2:"two"};
let k3={3:"three"};
wkmap.set(k1,"Divya");
wkmap.set(k2,"Mani");
wkmap.set(k3,"Hari");
console.log(wkmap.get(k1));
k1=null;
console.log(wkmap.get(k1));



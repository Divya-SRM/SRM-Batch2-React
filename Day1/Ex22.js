class Animal{

    constructor(color,noOflegs)
    {
        this.color=color;
        this.noOflegs=noOflegs;
    }
    
    leg(noOflegs)
    {
        console.log("it has "+noOflegs+" legs");
    }
    getcolor(color)
    {
        console.log("it color is "+color);
    }

    
}
class Cat extends Animal{
    constructor(name,color,noOflegs)
    { 
        super(color,noOflegs);
        this.name=name;
    }
    isVegetarian(name)
    {
        console.log(name+" is not vegetarian");
    }
   
}
let cat1=new Cat("cat","white",4);
cat1.isVegetarian("cat");
cat1.leg(4);
cat1.getcolor("white");
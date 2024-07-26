// function Pen(name,color,price){
//     this.name = name;
//     this.color = color;
//     this.price = price;
// }

// Pen.prototype.showPrice = function(){
//     console.log("Price of " ,this.name, " having color ", this.color, " is ", this.price
//     )
// }

// const pen1 = new Pen("Marker","Blue","$10");
// pen1.showPrice()
class Pen{
    constructor(name,price,color){
        this.color = color;
        this.name = name;
        this.price = price;
    }
    showPrice(){
        console.log("Price of " ,this.name, " having color ", this.color, " is ", this.price
                )
    }
}
const pen1  = new Pen("Marker","Red","$5")
const pen2  = new Pen("Permanent Marker","Blue","$15")
pen1.showPrice()
pen2.showPrice()
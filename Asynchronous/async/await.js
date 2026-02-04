let stocks = {
  Fruits : ["strawberry","grapes","banana","apple"],
  Liquid :["water","ice"],
  Holder :["cone","cup","stick"],
  Toppings :["choclate","peanuts"],
};

let is_shop_open = true;


let toppings_choice = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("which topping do you love?"))
        },3000);

    })
}
async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");
    await toppings_choice();
    console.log("D");
    console.log("E");
    console.log("F");
}    

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables")
console.log("taking others orders")

   
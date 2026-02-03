let stocks = {
  Fruits : ["strawberry","grapes","banana","apple"],
  Liquid :["water","ice"],
  Holder :["cone","cup","stick"],
  Toppings :["choclate","peanuts"],
};


let is_shop_open = true;


let order = (time,work)=>{

    return new Promise ((resolve,reject)=>{
        if (is_shop_open){
            setTimeout(()=>{
                 resolve(work());

            },time);
           
        }
         else{
            reject(console.log("our shop is closed"))
         }
    })
}

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected `))
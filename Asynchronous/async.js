
// function one(call_two){
//   call_two();
//   console.log("step 1:");
  
// }

// function two(){
  
//   console.log("step 2:");
  
// }
 

// one(two);





let stocks = {
  Fruits : ["strawberry","grapes","banana","apple"],
  Liquid :["water","ice"],
  Holder :["cone","cup","stick"],
  Toppings :["choclate","peanuts"],
};


let order = (Fruit_name,call_production) =>{
  setTimeout(()=>{
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
      call_production();
  },2000);
 
 
};

let production = () => {
  setTimeout(()=>{
    console.log("production has started");
    setTimeout(()=>{
      console.log("the fruit has been chopped");
      setTimeout(()=>{
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
        setTimeout(()=>{
            console.log("the machine was started");
            setTimeout(()=>{
                console.log(`${stocks.Holder[0]} has been selected`);
                setTimeout(()=>{
                    console.log(`${stocks.Toppings[0]} had been added`);
                    setTimeout(()=>{
                        console.log("serve ice cream....")
                    },2000)
                },3000)
            },2000)
        },1000)
      },1000)
    },2000 )
  }, 0);
  
};

order(0,production); 

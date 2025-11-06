const countValue = document.getElementById("count")
const decreaseBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset")
const increaseBtn = document.getElementById("increase")

let count = 0

increaseBtn.addEventListener("click",function(){
    count++
    countValue.textContent =count

})
decreaseBtn.addEventListener("click",function(){
    count--;
    countValue.textContent=count
})
resetBtn.addEventListener("click",function(){
    count = 0
    countValue.textContent = count
})
import donutGame from "/donut.js"
  const donutButton = document.querySelector(".clickdonut")
  const donutOutput =  document.querySelector(".donutoutput")
  const autoClickerButton = document.querySelector(".autoClickerButton");
  const multiplierButton = document.querySelector(".multplierButton");
  const autoClickerCount = document.querySelector(".autoClickerCount");
  const multiplierCount = document.querySelector(".multplierCount");
  const resetButton = document.querySelector(".resetButton")
  const donutMaker = new donutGame()
donutButton.addEventListener("click",()=>{
  donutMaker.click()
  donutOutput.innerText = "you have " + donutMaker.getdonutGameCount()+ " donuts"
})
autoClickerButton.addEventListener("click",()=>{
  donutMaker.buyAutoClicker()
  autoClickerCount.innerText = "you have" + donutMaker.getautoClicker()+ "Auto clicks"
  donutOutput.innerText = "you have " + donutMaker.getdonutGameCount()+ " donuts"
})
multiplierButton.addEventListener("click",()=>{
  donutMaker.buyDonutMultiplier()
  multiplierCount.innerText = "you have" + donutMaker.getdonutMultiplier()+ "multipliers"
  donutOutput.innerText = "you have " + donutMaker.getdonutGameCount()+ " donuts"
})
resetButton.addEventListener("click",()=> {
  donutMaker.resetGame()
    donutOutput.innerText = "you have " + donutMaker.getdonutGameCount()+ " donuts"
    multiplierCount.innerText = "you have" + donutMaker.getdonutMultiplier()+ "multipliers"
    autoClickerCount.innerText = "you have" + donutMaker.getautoClicker()+ "Auto clicks"
})
setInterval(()=>{
  for(let i = 0;i<donutMaker.getautoClicker(); i ++ ){
    donutMaker.click()
    donutOutput.innerText = "you have " + donutMaker.getdonutGameCount()+ " donuts"
  }
}, 1000)
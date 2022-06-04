const displayBox = document.querySelector(".display")
const values = document.querySelectorAll(".show-display")
const calcute = document.querySelector(".calculate")
const delet = document.querySelector('.cleare-all')
const cleare = document.querySelector('.cleare')

function showHandler(event){
    const x = event.target.innerText;
    if(displayBox.innerHTML == 0){
    return displayBox.innerHTML = x
    }
    return displayBox.innerHTML += x;
}

values.forEach( item => {
    item.addEventListener("click" , showHandler)
})

calcute.addEventListener('click' , () => {

  const result = displayBox.innerHTML
  displayBox.innerHTML = eval(result)
  
})

delet.addEventListener("click", ()=>{
    displayBox.innerText=0
})

cleare.addEventListener("click" , ()=> {
    const text = displayBox.innerHTML
    if(text.length === 1){
        displayBox.innerText = 0
    }else{
        displayBox.innerText = text.substring(0 , text.length -1)
    }
})
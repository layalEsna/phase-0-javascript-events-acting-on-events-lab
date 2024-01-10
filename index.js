
  // Your code here
  const dodger = document.getElementById("dodger")
  function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if(left > 0){
        dodger.style.left = `${left - 1}px`}
    }
document.addEventListener("keydown", function(event){
    if(event.key === "ArrowLeft"){
        moveDodgerLeft()

    }
})
function moveDodgerRight(){
    const righttNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(righttNumbers, 10);
    if(right < 400){
        dodger.style.left = `${right + 1}px`}
    }
document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
        moveDodgerRight()

    }
})


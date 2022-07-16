window.addEventListener('scroll',()=>{
    let row=document.querySelector('.row1');
let rowPosition=row.getBoundingClientRect().top;
let windowPosition=window.innerHeight;
console.log("Hello")
    if (rowPosition<windowPosition) {
    row.classList.add('active')
}
else{
    row.classList.remove('active')
}
})
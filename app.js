let btn1 = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let input = document.querySelector('.input')

btn2.addEventListener('click' ,()=>{
   // alert('ok')
   input.type = "text";
   btn2.style.display = "none";
   btn1.style.display = "block";
});
btn1.addEventListener('click' ,()=>{
   // alert('ok')
   input.type = "password";
   btn1.style.display = "none";
   btn2.style.display = "block";
});
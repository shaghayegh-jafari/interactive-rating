function myFunction() {
  document.getElementById("card-page").style.display = "none";
  document.querySelector(".page").style.display = "block";
}

function chBackcolor() {
  let d = document.body;
  d.classList.toggle("light-mode");
}
const rates = document.querySelectorAll(".number");
const rating = document.querySelector(".rating");


rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

// let s = document.querySelectorAll(".numbers a");
// s((btn, i),()=> {
//   btn.addEventListener("click", () => {
//     document.getElementsByClassName(i + 1);
//   });
// });
// function addClassA(e){
//   elem = document.querySelectorAll(".active");
//   elem.classList.remove('active');
//   e.addClass("active");
//   console.log(e);
// }

// window.onload = function () {
//   default_values();
// };

// function default_values() {
//   document.getElementById("title-name").innerHTML = "Hi, I'm Ali Ladha";
//   document.getElementById("demo").innerHTML = "hi";
//   // var btn = document.getElementById('submit');
//   // btn.addEventListener('click', func);
//   document.getElementById("submit").addEventListener("click", function () {
//     event.preventDefault();
//     document.getElementById("title-name").innerHTML =
//       "Hi, I'm " + document.getElementById("input-name").value;
//   });
// }

document.getElementById("title-name").innerHTML = "Hi, I'm Ali Ladha";
document.getElementById("demo").innerHTML = "hi";
// var btn = document.getElementById('submit');
// btn.addEventListener('click', func);
document.getElementById("submit").addEventListener("click", function () {
  event.preventDefault();
  document.getElementById("title-name").innerHTML =
    "Hi, I'm " + document.getElementById("input-name").value;
});

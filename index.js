window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  cursor2.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";

  cursor3.style.left = e.pageX + "px";
  cursor3.style.top = e.pageY + "px";
});

//-------------------------//
//       Code Optimisé   mettre une class identique sur chaque cercle et un id different pour les differencier en css, ce code est beaucoup mieux si beaucoup plus d'éléments  //
// const mouses = document.querySelectorAll(".mouse");

// window.addEventListener("mousemove", (e) => {
//   mouses.forEach((mouse) => {
//     mouse.style.top = e.pageY + "px";
//     mouse.style.left = e.pageX + "px";
//   });
// });

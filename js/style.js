
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "\u23F7 More \u23F7";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "\u23F6 Less \u23F6";
    moreText.style.display = "inline";
  }
}
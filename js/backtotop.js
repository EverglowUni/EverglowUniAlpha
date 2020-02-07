let scrollHeight = Math.max(
  document.body.clientHeight, document.documentElement.clientHeight,
);

window.addEventListener('scroll', function myScrollFunction() {
  var y = window.pageYOffset;
  if (y >= scrollHeight) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
})
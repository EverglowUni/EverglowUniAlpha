function googleSearchOpen() {
  document.getElementById("google-search-open").style.display = "none";
  document.getElementById("google-search-close").style.display = "block";
  document.getElementById("google-search-bar").style.display = "block";
}

function googleSearchClose() {
  document.getElementById("google-search-open").style.display = "block";
  document.getElementById("google-search-close").style.display = "none";
  document.getElementById("google-search-bar").style.display = "none";
}
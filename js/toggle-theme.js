var currentTheme = document.getElementById("theme");

function toggleTheme() {
  if (currentTheme.getAttribute("href") === "css/theme1.css") {
    currentTheme.setAttribute("href", "css/theme2.css");
    localStorage.setItem("selectedTheme", "css/theme2.css"); 
  }
  else {
    currentTheme.setAttribute("href", "css/theme1.css");
    localStorage.setItem("selectedTheme", "css/theme1.css");
  }
}

window.onload = function() {
  if (!localStorage.getItem("selectedTheme")) {
    localStorage.setItem("selectedTheme", "css/theme1.css");
  }

  currentTheme.setAttribute("href", localStorage.getItem("selectedTheme"));
}

// var theme = document.getElementById("theme");

// function loadTheme() {
//   var page_style = localStorage.getItem("page_stylesheet_name");

//   if (page_style === null) {
//     page_style = "css/theme1.css";
//   }

//   theme.setAttribute("href", page_style);
// }

// function toggleTheme() {
//   if (theme.getAttribute("href") === "css/theme1.css") {
//     localStorage.setItem("page_stylesheet_name", "css/theme2.css");
//   }
//   else {
//     localStorage.setItem("page_stylesheet_name", "css/theme1.css");
//   }

//   loadTheme();
// }

// loadTheme()

// function toggleTheme() {
//   var theme = document.getElementsByTagName('link')[0];

//   if (theme.getAttribute('href') == 'css/theme1.css') {
//     theme.setAttribute('href', 'css/theme2.css');
//   }
//   else {
//     theme.setAttribute('href', 'css/theme1.css');
//   }
// }
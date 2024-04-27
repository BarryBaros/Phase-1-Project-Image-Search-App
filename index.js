const key = "8JJAn6LU9ugN7o2QT0K2CPaJfhWGxLi7zkjwY1irJiI";

// Add elements from HTML
const formEl = document.querySelector("form")
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search_results");
const moreButtonEl = document.getElementById("more");

let inputData = "";
let page = 1;

// Create functions
async function searchImages() {
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultsEl.innerHTML = "";
    }
    
    // Create a result variable
    const results = data.results;
    console.log(results);
    
    if (page > 1) {
        moreButtonEl.style.display = block;
    }
}

// Add event listener
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
   searchImages()
})




function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none'
}

function toggle() {
    const homeButton = document.getElementById("homeContent");
    if (homeButton.style.display === "none") {
        homeButton.style.display = "block";
    } else {
        homeButton.style.display = "none";
    }
}

function toggle_4() {
  const aboutButton = document.getElementById("about");
  if (aboutButton.style.display === "none") {
    aboutButton.style.display = "block";
  } else {
    aboutButton.style.display = "none";
  }
}
function toggle_5() {
  const faqButton = document.getElementById("faq");
  if (faqButton.style.display === "none") {
    faqButton.style.display = "block";
  } else {
    faqButton.style.display = "none";
  }
}

function toggle_1() {
    const homeButton_1 = document.getElementById("homeContent_1");
    if (homeButton_1.style.display === "none") {
        homeButton_1.style.display = "block";
    } else {
        homeButton_1.style.display = "none";
    }
}

function toggle_2() {
    const aboutButton_1 = document.getElementById("about_1");
    if (aboutButton_1.style.display === "none") {
        aboutButton_1.style.display = "block";
    } else {
        aboutButton_1.style.display = "none";
    }
}


function toggle_3() {
    const faqButton_1 = document.getElementById("faq_1");
    if (faqButton_1.style.display === "none") {
      faqButton_1.style.display = "block";
    } else {
      faqButton_1.style.display = "none";
    }
}




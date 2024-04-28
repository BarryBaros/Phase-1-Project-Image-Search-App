document.addEventListener("DOMContentLoaded", (e) => {
  const key = "xJ-n7yenAk63AMjZOSo4wxY_O8uEYLmnHsLUz30_UCM";

  // Add elements from HTML
  const formEl = document.querySelector("form");
  const searchInputEl = document.getElementById("search-input");
  const searchResultsEl = document.querySelector(".search_results"); // Fixed the selector to include a dot for class
  const moreButtonEl = document.getElementById("more");

  let inputData = "";
  let page = 1;

  // Create functions
  async function searchImages() {
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length === 0) {
      alert("No images found. Please try a different keyword.");
    }
      
      
    if (page === 1) {
      searchResultsEl.innerHTML = ""; 
    }

    // Create a result variable
    const results = data.results;

    results.map((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("images"); 
      const images = document.createElement("img");
      images.src = result.urls.small;
      images.alt = result.alt_description;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html; 
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      // Append Image and links
      imageWrapper.appendChild(images);
      imageWrapper.appendChild(imageLink);
      searchResultsEl.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
      moreButtonEl.style.display = "block";
    }
  }


  // Add event listeners
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
  });

  moreButtonEl.addEventListener("click", () => {
    searchImages();
  });
});



  const homeLink = document.querySelector('a[href="#home"]');
  const aboutLink = document.querySelector('a[href="#about"]');
  const faqLink = document.querySelector('a[href="#faq"]');
  const homeSection = document.querySelector('home');
  const aboutSection = document.querySelector('about');
  const faqSection = document.querySelector('faq');

  // Hide all sections
  homeSection.style.display = 'none';
  aboutSection.style.display = "none";
  faqSectio.style.display = "none";

  // Function to toggle section Visibility
  function toggleSection(section) {
    if (section.style.display === 'none') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }


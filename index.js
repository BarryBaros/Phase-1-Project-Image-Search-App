document.addEventListener("DOMContentLoaded", () => {
  const key = "xJ-n7yenAk63AMjZOSo4wxY_O8uEYLmnHsLUz30_UCM";
  const formEl = document.querySelector("form");
  const searchInputEl = document.getElementById("search-input");
  const searchResultsEl = document.querySelector(".search_results");
  const moreButtonEl = document.getElementById("more");

  let page = 1;

  function searchImages() {
    const inputData = searchInputEl.value.trim();

    if (!inputData) {
      alert("Please enter a keyword to search for images.");
      return;
    }

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch images.");
        }
        return response.json();
      })
      .then((data) => {
console.log("JSON response:", data); 

        if (data.results.length === 0) {
          alert("No images found. Please try a different keyword.");
          return;
        }

        if (page === 1) {
          searchResultsEl.innerHTML = "";
        }

        data.results.forEach((result) => {
          const imageWrapper = document.createElement("div");
          imageWrapper.classList.add("images");
          const image = document.createElement("img");
          image.src = result.urls.small;
          image.alt = result.alt_description;
          const imageLink = document.createElement("a");
          imageLink.href = result.links.html;
          imageLink.target = "_blank";
          imageLink.textContent = result.alt_description;

          imageWrapper.appendChild(image);
          imageWrapper.appendChild(imageLink);
          searchResultsEl.appendChild(imageWrapper);
        });

        page++;

        if (page > 1) {
          moreButtonEl.style.display = "block";
        } else {
          moreButtonEl.style.display = "none";
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        alert(
          "An error occurred while fetching images. Please try again later."
        );
      });
  }

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
const homeSection = document.querySelector("#home");
const aboutSection = document.querySelector("#about");
const faqSection = document.querySelector("#faq");

// Hide all sections
homeSection.style.display = "none";
aboutSection.style.display = "none";
faqSection.style.display = "none";

// Function to toggle section Visibility
function toggleSection(section) {
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

// Add Event listeners for navigation links
homeLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Home link clicked");
  toggleSection(homeSection);
});

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("About link clicked");
  toggleSection(aboutSection);
});

faqLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("FAQ link clicked");
  toggleSection(faqSection);
});

// Add Event listeners for hide buttons
document.getElementById("hide-home").addEventListener("click", function () {
  homeSection.style.display = "none";
});

document.getElementById("hide-about").addEventListener("click", function () {
  aboutSection.style.display = "none";
});

document.getElementById("hide-faq").addEventListener("click", function () {
  faqSection.style.display = "none";
});


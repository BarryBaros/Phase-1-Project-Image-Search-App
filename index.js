key = "8JJAn6LU9ugN7o2QT0K2CPaJfhWGxLi7zkjwY1irJiI";

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle('active');
}
let currentdate = document.lastModified;
      document.querySelector(".modified").textContent =
        `Last Updated: ${currentdate}`;
document.querySelector(".year").innerHTML = new Date().getFullYear();


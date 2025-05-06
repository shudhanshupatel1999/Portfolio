//Hamburger effect on mobile and small devices to showing all the list of the items
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

// Dev image
const grid = document.querySelector('.hero-image-grid');
const rows = 10;
const cols = 10;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const tile = document.createElement('div');
    tile.classList.add('hero-image-tile');
    tile.style.backgroundPosition = `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`;
    tile.style.animationDelay = `${(row + col) * 50}ms`; // Staggered delay
    grid.appendChild(tile);
  }
}

// Navigate between the education experience and skills
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-menu a");



//Poting red line below the active section of the page
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
};


// Modal configuration
function openModal(imageSrc, title, description) {
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalDescription").innerHTML = description; // Allow HTML to display on the modal popup
  document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}



//from handling 
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Regx 

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (letters and spaces only, 2–50 characters).");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    alert("Form submitted successfully!");
  });
});

const themeToggle = document.getElementById('theme-toggle');

// Toggle Theme on checkbox change

// themeToggle.addEventListener('change', () => {
//   document.body.classList.toggle('dark-mode', themeToggle.checked);
// });


const toggle = document.getElementById('theme-toggle');

  // Set theme on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    toggle.checked = true;
  }

  // Toggle theme and save to localStorage
  toggle.onchange = () => {
    if (toggle.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };
















  // Profile image


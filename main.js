const navResponsive = document.getElementById('nav-mobile');

function menuOnMobile(){
    navResponsive.classList.toggle('hidden');
}


const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 

    const targetId = link.getAttribute('href').substring(1);

    document.getElementById(targetId).scrollIntoView({ 
      behavior: 'smooth' 
    });

    if (!navResponsive.classList.contains('hidden')) {
      menuOnMobile(); 
    }
  });
});

const toggle = document.getElementById('dark-toggle');
const body = document.body;

// Check the saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    toggle.checked = savedTheme === 'dark';
}

// Toggle the theme on input change
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

 
// Modal Skills
function showModalSkills(title, content, imageSrc) {
    document.getElementById('modalTitleS').textContent = title;
    document.getElementById('modalContentS').textContent = content;

    const modalImage = document.getElementById('modalImageS');
    modalImage.src = imageSrc; 
    modalImage.alt = title;

    document.getElementById('modal-skills').classList.remove('hidden');
}

function closeModalSkills() {
    document.getElementById('modal-skills').classList.add('hidden');
}

// Modal Projects
function showModalProjects(title, content, imageSrc, demoUrl) {
    document.getElementById('modalTitleP').textContent = title;
    document.getElementById('modalContentP').textContent = content;

    const modalImage = document.getElementById('modalImageP');
    modalImage.src = imageSrc; 
    modalImage.alt = title;

    const liveDemoButton = document.getElementById('modalLiveDemo');
    liveDemoButton.href = demoUrl;

    document.getElementById('modal-projects').classList.remove('hidden');
}

function closeModalProjects() {
    document.getElementById('modal-projects').classList.add('hidden');
}

function showCarousel(category) {
  document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.classList.add('hidden');
  });
  const carousel = document.getElementById(category);
  carousel.classList.remove('hidden');
  enableDragScroll(carousel);
}

document.addEventListener("DOMContentLoaded", () => {
  enableDragScroll(document.getElementById('design'));
});

function showCarousel(category) {
  document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.classList.add('hidden');
  });

  const selectedCarousel = document.getElementById(category);
  selectedCarousel.classList.remove('hidden');

  enableDragScroll(selectedCarousel);
}

function enableDragScroll(element) {
  let isDragging = false;
  let startX, scrollLeft;

  element.addEventListener('mousedown', (e) => {
    console.log("Drag started");
    isDragging = true;
    startX = e.pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
    element.style.cursor = 'grabbing';
  });

  element.addEventListener('mouseleave', () => {
    console.log("Drag ended (mouseleave)");
    isDragging = false;
    element.style.cursor = 'grab';
  });

  element.addEventListener('mouseup', () => {
    console.log("Drag ended (mouseup)");
    isDragging = false;
    element.style.cursor = 'grab';
  });

  element.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    console.log("Dragging...");
    e.preventDefault();
    const x = e.pageX - element.offsetLeft;
    const walk = (x - startX) * 2;
    element.scrollLeft = scrollLeft - walk;
  });
}



// const nameChanger = document.getElementById('name-changer');
// const names = ['Nupers', 'Serzv', 'Sarah'];
// let index = 0;
// let charIndex = 0;
// function typeEffect() {
//     nameChanger.textContent = '';

//     function typeChar() {
//         if (charIndex < names[index].length) {
//             nameChanger.textContent += names[index][charIndex];
//             charIndex++;
//             setTimeout(typeChar, 100); 
//         } else {
//             setTimeout(() => {
//                 charIndex = 0;
//                 index = (index + 1) % names.length;
//                 typeEffect();
//             }, 2000); 
//         }
//     }

//     typeChar();
// }

// typeEffect();
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('menu');

mobileMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Subject Tabs
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all tabs
    tabBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab
    btn.classList.add('active');
    const tabId = btn.dataset.tab;
    document.getElementById(`${tabId}-content`).classList.add('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      menu.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      
      // Calculate position to scroll to
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll-reveal by toggling "reveal" class
const revealElements = document.querySelectorAll(
  '.service-card, .team-member, .about-content, .subject-detail'
);

function checkReveal() {
  const triggerBottom = window.innerHeight * 0.8;
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < triggerBottom) {
      el.classList.add('reveal');
    }
  });
}

// run on load & scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);

// Handle window resize for responsive menu
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menu.classList.contains('active')) {
    menu.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
// Mobile navigation toggle
const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.nav');
if (navToggler && nav) {
    navToggler.addEventListener('click', () => {
        nav.classList.toggle('active');
        navToggler.classList.toggle('active');
    });
    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navToggler.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 90;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav a[href="#' + sectionId + '"]');
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// Typing animation for .typing class
const typingElement = document.querySelector('.typing');
if (typingElement) {
    const texts = [
        "Web designer, Graphic designer, Photographer and Video editor",
        "Web designer",
        "Graphic designer",
        "Photographer",
        "Video editor"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 80;
    let erasingDelay = 40;
    let newTextDelay = 1200;

    function type() {
        const currentText = texts[textIndex];
        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex < currentText.length) {
                setTimeout(type, typingDelay);
            } else {
                isDeleting = true;
                setTimeout(type, newTextDelay);
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex > 0) {
                setTimeout(type, erasingDelay);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, typingDelay);
            }
        }
    }
    setTimeout(type, 1000);
}

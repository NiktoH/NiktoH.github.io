window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const privacy = document.querySelector('input[name="privacy"]').checked;
    
    if (!name || !email || !privacy) {
        alert('Please fill in all fields and accept the privacy policy');
        return;
    }
    
    console.log('Form submitted:', { name, email });
    
    alert('Thank you for your submission! We will contact you soon.');
    
    this.reset();
});

const formInputs = document.querySelectorAll('.form-group input');
formInputs.forEach(input => {
    if (input.value) {
        input.nextElementSibling.style.transform = 'translateY(-25px)';
        input.nextElementSibling.style.fontSize = '0.8rem';
        input.nextElementSibling.style.color = '#3498db';
    }
    
    input.addEventListener('focus', function() {
        this.nextElementSibling.style.transform = 'translateY(-25px)';
        this.nextElementSibling.style.fontSize = '0.8rem';
        this.nextElementSibling.style.color = '#3498db';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.nextElementSibling.style.transform = '';
            this.nextElementSibling.style.fontSize = '';
            this.nextElementSibling.style.color = '';
        }
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
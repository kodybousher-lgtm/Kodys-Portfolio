document.addEventListener('DOMContentLoaded', () => {
    
    // --- CUSTOM CURSOR BEHAVIOR ---
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Expand cursor on hoverable elements
    const interactiveElements = document.querySelectorAll('a, .project-card');
    interactiveElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.borderColor = 'var(--raw-red)';
        });
        elem.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.borderColor = 'var(--acid-yellow)';
        });
    });

    // --- PARALLAX PERSPECTIVE ON INTERACTIVE CARDS ---
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position inside element
            const y = e.clientY - rect.top;  // y position inside element
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            // Calculate inclination degrees
            const angleX = (yc - y) / 15;
            const angleY = (x - xc) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
});
// Expand interactive mechanics to inputs
const formInputs = document.querySelectorAll('input, textarea, .brutal-submit-btn');
formInputs.forEach(input => {
    input.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.borderColor = 'var(--acid-yellow)';
    });
    input.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.borderColor = 'var(--acid-yellow)';
    });
});
const navList = document.querySelector('#navList');
const navIcon = document.querySelector('#navIcon');


navIcon.addEventListener('click', (event) => {
    event.stopPropagation(); 
    navList.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !navIcon.contains(event.target)) {
        navList.classList.remove('active');
    }
});


window.addEventListener('scroll', () => {
    navList.classList.remove('active');
});

const navLinks = document.querySelectorAll('#navList a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      
        navLinks.forEach(link => link.classList.remove('active'));

       
        event.currentTarget.classList.add('active');

            
        navList.classList.remove('active');
    });
});

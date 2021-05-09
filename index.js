const toggleBtn = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', () => {
    navCenter.classList.toggle('open')
    toggleBtn.classList.toggle('toggle')
    
})

closeBtn.addEventListener('click', () => {
    navCenter.classList.remove('open');
    closeBtn.classList.toggle('close-toggle');
    toggleBtn.classList.remove('toggle');

    
})


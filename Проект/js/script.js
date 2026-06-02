// Бургер-меню
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('navMenu');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Модалка
const modal = document.getElementById('callbackModal');
const openBtns = document.querySelectorAll('.callback-btn');
const closeBtn = document.querySelector('.modal__close');

function openModal() { 
    if (modal) modal.classList.add('active'); 
}

function closeModal() { 
    if (modal) modal.classList.remove('active'); 
}

if (openBtns.length > 0) {
    openBtns.forEach(btn => btn.addEventListener('click', openModal));
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => { 
        if (e.target === modal) closeModal(); 
    });
}

// Все формы
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        if (modal && modal.classList.contains('active')) closeModal();
        form.reset();
    });
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Доп. обработка для кнопки "Получить консультацию" в hero
const heroBtn = document.querySelector('.hero__btn');
if (heroBtn) {
    heroBtn.addEventListener('click', openModal);
}
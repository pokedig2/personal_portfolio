
// Keep navigation usable on mobile, including when JavaScript is unavailable.
const header = document.querySelector('header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-links');

function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
    }
});
document.addEventListener('click', event => {
    if (!event.target.closest('header')) closeMenu();
});
window.matchMedia('(min-width: 769px)').addEventListener('change', closeMenu);
menuButton.hidden = false;
document.documentElement.classList.add('has-js');

function updateHeader() {
    header.classList.toggle('shadow', window.scrollY > 0);
}
window.addEventListener('scroll', updateHeader, {passive: true});
updateHeader();
document.querySelector('#copyright-year').textContent = new Date().getFullYear();

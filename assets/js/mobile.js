/* BanaoCV: small-screen accessibility helpers */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-mobile a').forEach(link => link.addEventListener('click', () => {
    document.querySelector('.nav-hamburger')?.classList.remove('open');
    document.querySelector('.nav-mobile')?.classList.remove('open');
    document.body.style.overflow = '';
  }));
});

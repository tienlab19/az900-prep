const language = localStorage.getItem('az900-site-language') === 'en' ? 'en' : 'vi';
document.body.dataset.language = language;
document.documentElement.lang = language;
document.querySelector('.lang')?.addEventListener('click', () => {
  const next = document.body.dataset.language === 'vi' ? 'en' : 'vi';
  document.body.dataset.language = next;
  document.documentElement.lang = next;
  localStorage.setItem('az900-site-language', next);
});

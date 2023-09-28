const htmlEl = document.getElementsByTagName('html')[0];
const lightIconEl = document.getElementById('icon-light');
const darkIconEl = document.getElementById('icon-dark');

const defaultTheme = window.matchMedia('(prefers-color-scheme:dark)').matches
  ? 'dark'
  : 'light';
const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : defaultTheme;

if (currentTheme) {
  htmlEl.dataset.theme = currentTheme;
}

const toggleTheme = (theme) => {
  console.log(theme);
  htmlEl.dataset.theme = theme;
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    lightIconEl.style.opacity = 0;
    darkIconEl.style.opacity = 1;
  } else {
    lightIconEl.style.opacity = 1;
    darkIconEl.style.opacity = 0;
  }
};

lightIconEl.addEventListener('click', () => {
  toggleTheme('dark');
});
darkIconEl.addEventListener('click', () => {
  toggleTheme('light');
});

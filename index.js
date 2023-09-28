const htmlEl = document.getElementsByTagName('html')[0];
const lightIconEl = document.getElementById('icon-light');
const darkIconEl = document.getElementById('icon-dark');

const defaultTheme = window.matchMedia('(prefers-color-scheme:dark)').matches
  ? 'dark'
  : 'light';
const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : defaultTheme;

const showIcon = (selector) => {
  const iconEl = document.getElementById(selector);
  iconEl.style.opacity = 1;
  iconEl.style.transform = 'translate(-50%, -50%) scale(1)';
};

const hideIcon = (selector) => {
  const iconEl = document.getElementById(selector);
  iconEl.style.opacity = 0;
  iconEl.style.transform = 'translate(-50%, -50%) scale(0)';
};

if (currentTheme) {
  htmlEl.dataset.theme = currentTheme;
  if (currentTheme === 'light') {
    showIcon('icon-light');
    hideIcon('icon-dark');
  } else {
    showIcon('icon-dark');
    hideIcon('icon-light');
  }
}

const toggleTheme = (theme) => {
  htmlEl.dataset.theme = theme;
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    showIcon('icon-dark');
    hideIcon('icon-light');
  } else {
    showIcon('icon-light');
    hideIcon('icon-dark');
  }
};

lightIconEl.addEventListener('click', () => {
  toggleTheme('dark');
});
darkIconEl.addEventListener('click', () => {
  toggleTheme('light');
});

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const heading = document.querySelector(".platforms h2");
  const cards = document.querySelectorAll(".card");

  // Определяем предпочтения системы
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Устанавливаем тему на основе системных настроек
  if (prefersDark) {
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀️ Светлая тема";
  } else {
    body.classList.add("light-theme");
    themeToggle.textContent = "🌙 Тёмная тема";
  }

  // Сохраняем выбор пользователя (если меняет вручную)
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      themeToggle.textContent = "☀️ Светлая тема";
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      themeToggle.textContent = "🌙 Тёмная тема";
      localStorage.setItem("theme", "light");
    }
  });

  // Проверяем, есть ли сохранённая тема
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀️ Светлая тема";
  } else if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeToggle.textContent = "🌙 Тёмная тема";
  }

  // Анимация появления
  setTimeout(() => {
    heading.classList.add("animate");
  }, 300);

  cards.forEach((card, index) => {
    card.style.setProperty("--delay", index);
    setTimeout(() => {
      card.classList.add("animate");
    }, 500 + index * 100);
  });
});

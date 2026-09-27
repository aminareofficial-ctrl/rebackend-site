const THEME_KEY = "rb-theme";

const moonIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.8A9 9 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z"></path>
  </svg>
`;

const sunIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.55 1.55M17.52 17.52l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.55-1.55M17.52 6.48l1.55-1.55"></path>
  </svg>
`;

function applyTheme(theme) {
  const root = document.documentElement;
  const safeTheme = theme === "dark" ? "dark" : "light";
  root.setAttribute("data-theme", safeTheme);

  const buttons = document.querySelectorAll("[data-theme-toggle]");
  buttons.forEach((button) => {
    button.innerHTML = safeTheme === "dark" ? sunIcon : moonIcon;
    button.setAttribute("aria-label", safeTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("title", safeTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
    return;
  }

  applyTheme(prefersDark ? "dark" : "light");
}

function setActiveNav() {
  const pathname = window.location.pathname;
  const normalized = pathname.endsWith("/") ? pathname : pathname.replace(/\/$/, "");
  const pageMap = {
    "/": "home",
    "/index.html": "home",
    "/services": "services",
    "/services.html": "services",
    "/platforms": "platforms",
    "/platforms.html": "platforms",
    "/proof": "proof",
    "/proof.html": "proof",
    "/pricing": "pricing",
    "/pricing.html": "pricing",
    "/terms": "terms",
    "/terms.html": "terms"
  };
  const currentKey = pageMap[normalized] || "home";

  document.querySelectorAll("[data-nav]").forEach((link) => {
    const target = link.getAttribute("data-nav");
    const active = target === currentKey;
    link.classList.toggle("is-active", active);

    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initThemeToggle() {
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    initTheme();
    initThemeToggle();
    setActiveNav();
  } catch (error) {
    console.error("ReBackend initialization failed:", error);
  }
});
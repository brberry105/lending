const toggle = document.getElementById("themeToggle");
const html = document.documentElement;
const themeMediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

const THEME_KEY = "theme";

function applyTheme(isDark) {
    html.classList.toggle("dark", isDark);
    toggle.checked = isDark;
}

function getSystemTheme() {
    return themeMediaQuery.matches;
}

function getSavedTheme() {
    return localStorage.getItem(THEME_KEY);
}

function applyInitialTheme() {
    const savedTheme = getSavedTheme();

    if (savedTheme === "dark") {
        applyTheme(true);
        return;
    }

    if (savedTheme === "light") {
        applyTheme(false);
        return;
    }

    applyTheme(getSystemTheme());
}

applyInitialTheme();

toggle.addEventListener("change", () => {
    const isDark = toggle.checked;

    applyTheme(isDark);

    localStorage.setItem(
        THEME_KEY,
        isDark ? "dark" : "light"
    );
});

// themeMediaQuery.addEventListener("change", (event) => {
//     const savedTheme = getSavedTheme();

//     if (savedTheme) {
//         return;
//     }

//     applyTheme(event.matches);

// });

themeMediaQuery.onchange = (event) => {
    const savedTheme = getSavedTheme();

    if (savedTheme) {
        return;
    }

    applyTheme(event.matches);

};
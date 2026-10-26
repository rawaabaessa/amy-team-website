// An external async script is managed as a resource by React during navigation.
// ThemeToggle also restores the preference before paint when the locale changes.
try {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.getItem("amy-theme") !== "light",
  );
} catch {
  // Keep the server-rendered theme when browser storage is unavailable.
}

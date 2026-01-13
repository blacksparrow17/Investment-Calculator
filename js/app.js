document.addEventListener("DOMContentLoaded", () => {
  registerServiceWorker();
  setupNavigation();
});

function setupNavigation() {
  document.querySelectorAll(".menu button").forEach(button => {
    button.addEventListener("click", () => {
      loadCalculator(button.dataset.calculator);
    });
  });
}

function loadCalculator(type) {
  const container = document.getElementById("app-content");

  container.innerHTML = `
    <h2>${formatTitle(type)} Calculator</h2>
    <p>This calculator module will be loaded here.</p>
  `;
}

function formatTitle(text) {
  return text.toUpperCase();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
}

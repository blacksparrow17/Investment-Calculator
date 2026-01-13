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

  if (type === "average") {
    renderAverageCalculator(container);
    return;
  }

  container.innerHTML = `
    <h2>${type.toUpperCase()} Calculator</h2>
    <p>This calculator will be implemented next.</p>
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

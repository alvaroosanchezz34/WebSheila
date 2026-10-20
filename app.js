(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
        menuButton.focus();
      }
    });
  }

  const dateInput = document.querySelector("#date");
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localToday;
  }

  document.querySelectorAll("[data-service]").forEach((item) => {
    item.addEventListener("click", () => {
      const selectedService = item.getAttribute("data-service");
      const serviceSelect = document.querySelector("#service");
      if (!serviceSelect || !selectedService) return;
      const matchingOption = Array.from(serviceSelect.options).find((option) => option.value === selectedService || option.text === selectedService);
      if (matchingOption) serviceSelect.value = matchingOption.value;
    });
  });

  const form = document.querySelector("#booking-form");
  const feedback = document.querySelector("#form-feedback");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const service = String(data.get("service") || "").trim();
      const date = String(data.get("date") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const message = String(data.get("message") || "").trim();

      const dateParts = date.split("-");
      const dateFormatted = dateParts.length === 3 ? dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0] : date;
      const lines = [
        "Hola, Almare. Me gustaría solicitar una cita.",
        "",
        "Nombre: " + name,
        "Servicio: " + service,
        "Fecha preferida: " + dateFormatted,
        phone ? "Teléfono: " + phone : "",
        message ? "Qué me gustaría cuidar: " + message : "",
        "",
        "Entiendo que la fecha queda pendiente de confirmación."
      ].filter(Boolean);
      const url = "https://wa.me/?text=" + encodeURIComponent(lines.join("\n"));

      if (feedback) {
        feedback.textContent = "Abriendo WhatsApp con tu solicitud. Revisa el mensaje y elige el contacto de Almare para enviarlo.";
      }
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (!newWindow) {
        window.location.href = url;
      }
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          self.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
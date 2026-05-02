document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const currentPage = window.location.pathname.split("/").pop();
    if (link.getAttribute("href") === currentPage) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });

  const nightModeBtn = document.getElementById("nightModeBtn");
  const savedMode = localStorage.getItem("nightMode");

  if (savedMode === "enabled") {
    document.body.classList.add("night-mode");
    if (nightModeBtn) {
      nightModeBtn.textContent = "☀️ الوضع النهاري";
    }
  }

  if (nightModeBtn) {
    nightModeBtn.addEventListener("click", function () {
      document.body.classList.toggle("night-mode");

      if (document.body.classList.contains("night-mode")) {
        localStorage.setItem("nightMode", "enabled");
        nightModeBtn.textContent = "☀️ الوضع النهاري";
      } else {
        localStorage.setItem("nightMode", "disabled");
        nightModeBtn.textContent = "🌙 الوضع الليلي";
      }
    });
  }

  const deleteButtons = document.querySelectorAll(".btn-delete");
  const successMessage = document.getElementById("successMessage");

  deleteButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const confirmed = confirm("هل تريد حذف هذا السجل؟");

      if (!confirmed) return;

      const row = btn.closest("tr");
      if (row) row.remove();

      if (successMessage) {
        successMessage.textContent = "تم حذف السجل بنجاح ✓";
        successMessage.style.display = "block";

        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);
      }
    });
  });
});
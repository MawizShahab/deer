const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* Form Submission */
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("contact.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.text();

    if (result.includes("success")) {
      status.textContent = "✅ Your message has been sent!";
      form.reset();
    } else {
      status.textContent = "❌ Error sending message.";
    }
  } catch (err) {
    status.textContent = "⚠️ Network error.";
  }

  // ⏳ Clear message after 5 seconds
  setTimeout(() => {
    status.textContent = "";
  }, 5000);
});

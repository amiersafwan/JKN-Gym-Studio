document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const program = document.getElementById("program").value;

  if (!name || !email || !phone || !program) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Show success modal
  const successModal = new bootstrap.Modal(document.getElementById("successModal"));
  successModal.show();

  // Clear form after submission
  document.getElementById("registerForm").reset();
});

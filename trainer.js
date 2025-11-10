// Trainer details for modal
const trainerDetails = {
  "Haikal Fahmi": "Haikal has over 10 years of experience in strength and conditioning. He’s dedicated to helping clients reach their peak performance.",
  "Syed Danish": "Syed is a certified yoga instructor who focuses on balance, mindfulness, and flexibility to improve both body and mind.",
  "Amier Safwan": "Amier combines dance and fitness in his Zumba sessions, making every workout fun, energetic, and highly effective."
};

// Handle View Profile button click
document.querySelectorAll(".view-profile").forEach(btn => {
  btn.addEventListener("click", function() {
    const name = this.getAttribute("data-name");
    document.getElementById("trainerName").textContent = name;
    document.getElementById("trainerDetails").textContent = trainerDetails[name];
    const modal = new bootstrap.Modal(document.getElementById("trainerModal"));
    modal.show();
  });
});

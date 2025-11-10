document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("gymTable");
  const today = new Date().getDay(); // Sunday = 0, Monday = 1, etc.

  // Table headers (Time + 6 days)
  const headers = table.querySelectorAll("th");
  if (today >= 1 && today <= 6) {
    // Skip "Time" column (index 0)
    headers[today].classList.add("table-warning");

    // Highlight the same column in all rows
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(row => {
      const cells = row.querySelectorAll("td");
      cells[today - 1].classList.add("today-highlight");
    });
  }
});
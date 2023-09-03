console.log("Connected to the main.js file");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const alerts = document.querySelectorAll(".alert");
    alerts.forEach(function (alert) {
      alert.classList.add("fade-out");
    });
    setTimeout(function () {
      alerts.forEach(function (alert) {
        alert.style.display = "none";
      });
    }, 500);
  }, 3000);

  const ctx = document.getElementById("myChart").getContext("2d");

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Debt", "Savings"],
      datasets: [
        {
          label: "Finance Overview in USD",
          data: [2000, 1500],
          backgroundColor: ["#8ca9d3", "#8ca9d3"],
          borderColor: ["#000", "#000"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "white",
          },
        },
        x: {
          ticks: {
            color: "white",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
});

console.log("Connected to the main.js file");

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Debt", "Savings"],
      datasets: [
        {
          label: "Finance Overview in USD",
          data: [2000, 1500],
          backgroundColor: ["rgba(200, 0, 0, 0.5)", "rgba(0, 200, 0, 0.5)"],
          borderColor: ["rgba(200, 0, 0, 0.5)", "rgba(0, 200, 0, 0.5)"],
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

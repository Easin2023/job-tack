const ctx = document.getElementById("wpPoolChart").getContext("2d");
const wpPoolChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WPPOOL",
        data: [0, 10, 5, 2, 20, 30, 45],
        borderColor: "red",
        fill: false,
      },
      {
        label: "Google",
        data: [0, 5, 10, 15, 10, 20, 25],
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Microsoft",
        data: [0, 15, 5, 25, 15, 10, 20],
        borderColor: "green",
        fill: false,
      },
      {
        label: "Twitter",
        data: [0, 20, 10, 15, 25, 20, 30],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
  },
});

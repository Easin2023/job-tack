const ctx = document.getElementById("wpPoolChart").getContext("2d");

const wpPoolData = [
  50, 80, 45, 85, 55, 95, 60, 100, 40, 110, 70, 50, 90, 55, 65, 75, 85, 60, 95,
  80, 50,
];
const googleData = [
  60, 40, 70, 50, 90, 60, 100, 55, 110, 45, 85, 65, 75, 55, 95, 70, 60, 85, 50,
  70, 90,
];
const microsoftData = [
  70, 55, 60, 90, 50, 80, 65, 105, 55, 100, 60, 110, 50, 85, 60, 95, 55, 70, 80,
  60, 100,
];
const twitterData = [
  80, 65, 50, 95, 45, 85, 55, 110, 60, 100, 70, 90, 50, 80, 60, 100, 55, 85, 65,
  75, 90,
];

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];

let currentDataLength = 21;

function updateChart(timeRange, event) {
  switch (timeRange) {
    case "1Y":
      currentDataLength = 21;
      break;
    case "6M":
      currentDataLength = 10;
      break;
    case "1M":
      currentDataLength = 2;
      break;
    case "1W":
      currentDataLength = 1;
      break;
    default:
      currentDataLength = 21;
  }

  wpPoolChart.data.labels = labels.slice(0, currentDataLength);
  wpPoolChart.data.datasets[0].data = wpPoolData.slice(0, currentDataLength);
  wpPoolChart.data.datasets[1].data = googleData.slice(0, currentDataLength);
  wpPoolChart.data.datasets[2].data = microsoftData.slice(0, currentDataLength);
  wpPoolChart.data.datasets[3].data = twitterData.slice(0, currentDataLength);
  wpPoolChart.update();

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.classList.remove("bg-blue-700", "text-white")
  );
  event.target.classList.add(
    "bg-blue-700",
    "rounded-full",
    "text-white",
    "drop-shadow-2xl"
  );
}

const wpPoolChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "WPPOOL",
        data: wpPoolData,
        borderColor: "#fc714d",
        backgroundColor: "#fc714d",
        fill: false,
      },
      {
        label: "Google",
        data: googleData,
        borderColor: "#615de3",
        backgroundColor: "#615de3",
        fill: false,
      },
      {
        label: "Microsoft",
        data: microsoftData,
        borderColor: "#afcd80",
        backgroundColor: "#afcd80",
        fill: false,
      },
      {
        label: "Twitter",
        data: twitterData,
        borderColor: "#6f34a1",
        backgroundColor: "#6f34a1",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Values",
        },
        min: 30,
        max: 120,
      },
    },
  },
});

updateChart("1Y");

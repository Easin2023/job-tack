const ctx = document.getElementById("wpPoolChart").getContext("2d");

// Sample daily data
const labels = [];
const wpPoolData = [2, 2, 2, 2, 22, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8];
const googleData = [];
const microsoftData = [];
const twitterData = [1, 4, 6, 10, 64, 100, -10, 20, 1, 4, 6, 10, 64, 100, -10, 20, 1, 4, 6, 10, 64, 100, -10, 20, 1, 4, 6, 10, 64, 100, -20, 20];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Generate labels and data
for (let month = 0; month < months.length; month++) {
  for (let day = 1; day <= 30; day++) {
    labels.push(`${months[month]} ${day}`);
  }
}

const wpPoolChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "WPPOOL",
        data: wpPoolData,
        borderColor: "red",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Google",
        data: googleData,
        borderColor: "orange",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Microsoft",
        data: microsoftData,
        borderColor: "green",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Twitter",
        data: twitterData,
        borderColor: "blue",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        ticks: {
          callback: function (value, index, values) {
            // Display month name only at the start of each month
            const label = this.getLabelForValue(value);
            const day = parseInt(label.split(' ')[1], 10);
            return day === 1 ? label.split(' ')[0] : '';
          },
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: months.length,
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: -10,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: function (value) {
            return `${value}%`;
          }
        }
      },
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
          }
        }
      },
      legend: {
        display: false,
      },
    },
  },
  plugins: [
    {
      id: 'customHoverLine',
      beforeDraw: function (chart) {
        if (chart.tooltip._active && chart.tooltip._active.length) {
          const activePoint = chart.tooltip._active[0];
          const ctx = chart.ctx;
          const x = activePoint.element.x;
          const yTop = chart.scales.y.top;
          const yBottom = chart.scales.y.bottom;

          // Draw vertical line
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, yTop);
          ctx.lineTo(x, yBottom);
          ctx.lineWidth = 2; // Thicker line
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
          ctx.stroke();
          ctx.restore();

          // Draw circles at each dataset point
          chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);
            const point = meta.data[activePoint.index];

            if (point) {
              ctx.save();
              ctx.beginPath();
              ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI); // Circle with radius 5
              ctx.fillStyle = dataset.borderColor;
              ctx.fill();
              ctx.restore();
            }
          });
        }
      }
    },
    {
      id: 'customMonthMarkers',
      afterDraw: function (chart) {
        const ctx = chart.ctx;
        const xScale = chart.scales.x;
        const yScale = chart.scales.y;

        months.forEach((month, index) => {
          const monthIndex = labels.findIndex(label => label.startsWith(month));
          const xPos = xScale.getPixelForValue(labels[monthIndex + 15]); // Middle of the month

          ctx.save();
          ctx.fillStyle = '#000';
          ctx.fillRect(xPos - -120, yScale.bottom, 1, 10); // Small rectangle at the bottom
          ctx.restore();
        });
      }
    }
  ]
});
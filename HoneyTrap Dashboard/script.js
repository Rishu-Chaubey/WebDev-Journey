// Initialize charts when the window loads
window.onload = () => {
  // Donut Chart (Pie Chart with hole) Setup
  const donutCtx = document.getElementById('donutChart').getContext('2d');
  new Chart(donutCtx, {
    type: 'doughnut', // Donut chart type
    data: {
      labels: ['Broken Machine', 'Human Error', 'Personal Breaks'], // Categories
      datasets: [{
        data: [0, 0, 0], // Data values for each category (update with real data)
        backgroundColor: ['#2d3436', '#a4b0be', '#dfe6e9'] // Colors for each slice
      }]
    },
    options: {
      cutout: '70%', // Size of inner hole (70% of chart radius)
      plugins: {
        legend: { display: false } // Hide legend for cleaner look
      }
    }
  });

  // Line Chart Setup
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineCtx, {
    type: 'line', // Line chart type
    data: {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'], // X-axis labels
      datasets: [
        {
          label: 'Attack Type A', // Label for the first dataset
          data: [0, 1, 5, 32], // Y-axis data points for Attack Type A
          borderColor: '#4f7dfd', // Line color (blue)
          backgroundColor: 'transparent', // No fill below line
          tension: 0.4 // Smooth curved line
        },
        {
          label: 'Attack Type B', // Label for the second dataset
          data: [0, 1, 4, 6], // Y-axis data points for Attack Type B
          borderColor: '#2ed8b6', // Line color (greenish)
          backgroundColor: 'transparent', // No fill below line
          tension: 0.4 // Smooth curved line
        }
      ]
    },
    options: {
      plugins: {
        legend: { display: false } // Hide legend for a cleaner look
      },
      scales: {
        y: {
          beginAtZero: true // Start Y axis from zero
        }
      }
    }
  });
};

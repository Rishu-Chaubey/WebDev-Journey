# HoneyTrap Dashboard

A modern, responsive front-end dashboard for visualizing cybersecurity metrics. Built with Tailwind CSS and vanilla JavaScript (with Canvas 2D and optional Chart.js), HoneyTrap offers a clean UI for monitoring honeypot data.

## 🚀 Features

- **Fixed Sidebar Navigation**  
  Quick access to sections: Home, Dashboard, Vault, Community, and Settings.

- **Header**  
  User profile avatar, title, and a search bar for instant queries.

- **Top Statistics Cards**  
  Summary cards displaying Total Attacks Detected, Live Attack count, and Server Health status.

- **Threat Type Distribution**  
  Donut chart illustrating percentages of Broken Machine, Human Error, and Personal Breaks.

- **Attack Frequency Graph**  
  Line chart showing attack trends over four quarters.

- **Endpoints & Geolocation**  
  Text sections highlighting top targeted endpoints and attack geolocation data.

- **Live Attack Logs & AI Analysis**  
  Panels reserved for real-time log feeds and AI-based threat assessments.

- **Custom Styling**  
  Tailwind CSS utility classes, custom scrollbars, fade-in animations, and the Inter font.

- **Chart Rendering**  
  Canvas-based chart drawing functions for high-DPI support, plus optional integration with Chart.js for easier configuration.

## 📁 Project Structure

```
honeytrap-dashboard/
├── index.html         # Main dashboard page
├── css/
│   └── styles.css     # Custom styles (scrollbars, animations)
├── js/
│   ├── charts.js      # Canvas chart drawing functions
│   └── main.js        # Sidebar toggle, search bar, and initialization
└── assets/
    └── logo.png       # Placeholder logo image
```

## 🔧 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/honeytrap-dashboard.git
   ```
2. Open `index.html` in your browser.
3. No build steps or dependencies—pure HTML, CSS, and JavaScript.

## 🛠️ Customization

- **Data Integration**: Replace hard-coded chart data in `charts.js` with real API responses.
- **Chart Library**: Swap Canvas logic for Chart.js by uncommenting the Chart.js setup in `main.js`.
- **Styling**: Adjust Tailwind configuration or update colors in `styles.css`.
- **Sections**: Populate the Live Attack Logs and AI Analysis panels with dynamic content.

## 🤝 Contributing

Pull requests welcome! For major changes, open an issue first to discuss proposals.

## 📄 License

This project is licensed under the MIT License.
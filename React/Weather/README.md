# Weather App

A modern and responsive weather application built with React that provides detailed weather information for any city. The app features a beautiful UI with a dynamic background and displays comprehensive weather metrics.

![image](https://github.com/user-attachments/assets/f1b7b6ce-4fc4-4ef3-b83b-1208a89b9393)

## Features

- Real-time weather data fetching
- Detailed weather information including:
  - Temperature (°C/°F)
  - Feels like temperature
  - Wind speed and direction
  - Pressure
  - Precipitation
  - Humidity
  - Cloud cover
  - Wind chill
  - Heat index
  - Dew point
  - Visibility
  - UV index
  - Wind gusts
- Responsive design with a beautiful background
- Error handling for failed API requests
- Clean and intuitive user interface

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- A running backend server (Express) on port 3000

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the client directory:
```bash
cd client
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Application

1. Start the development server:
```bash
npm start
# or
yarn start
```

2. Open your browser and navigate to `http://localhost:5173` (or whatever port Vite assigns)

## Dependencies

- React
- Axios - For API requests
- Tailwind CSS - For styling


## API Endpoints

The application uses the following endpoint:
- `GET /weather/:city` - Fetches weather data for the specified city

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

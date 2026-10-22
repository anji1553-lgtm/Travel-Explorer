# Travel Explorer 🌏

A React Native mobile app, built with Expo, that helps users discover travel destinations across India. Browse places like Goa, Manali and Hyderabad, save your favorites, plan trips, and open locations in Google Maps.

## Features

- **Destination cards with search**: find places by name as you type
- **Category filters**: Beach, Mountain, City, or All
- **Destination details screen**: view a full description of each place
- **Favorites**: mark places you love; they are saved on the phone and stay after the app closes
- **Share**: send a destination through WhatsApp, email or any app using the native share menu
- **Open in Google Maps**: jump straight to a destination's location
- **Trip Planner**: save a trip with a destination, date and duration
- **Saved Trips**: view and delete your planned trips

## Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| React Native | Building the mobile UI |
| Expo / Expo Go | Development and live testing on a phone |
| React Hooks (`useState`, `useEffect`) | Managing app state and side effects |
| AsyncStorage | Saving favorites and trips locally on the device |
| Share API | Native sharing |
| Linking API | Opening Google Maps |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version) (preferably version 57)
- The **Expo Go** app on your Android or iOS phone

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/anji1553-lgtm/Travel-Explorer
cd TravelExplorer

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start
```

Scan the QR code shown in the terminal with Expo Go (phone and computer must be on the same Wi-Fi network).

## Project Structure

```
TravelExplorer/
├── assets/          # Images and icons
├── src/
│   ├── App.js       # Main app: state, functions and screens
│   ├── data.js      # Destinations and categories data
│   └── styles.js    # Styling
├── index.js         # App entry point
├── app.json         # Expo configuration
└── package.json     # Dependencies and scripts
```

## How It Works

- **State**: `useState` stores the search text, selected category, favorites, selected place and trips. When state changes, the screen re-renders automatically.
- **Screens**: the app shows one screen at a time, depending on state (home, destination details, trip planner, saved trips).
- **Persistence**: `AsyncStorage` saves favorites and trips as JSON text (`JSON.stringify`) and reads them back on startup (`JSON.parse`).
- **Filtering**: the list of places is recalculated from the current search text and selected category on every render.

## Screenshots

<table>
  <tr>
    <td align="center"><img src="assets/screenshots/Home_screen.png" width="220" alt="Home screen"/><br/><b>Home Screen</b></td>
    <td align="center"><img src="assets/screenshots/destination_card.png" width="220" alt="Destination details"/><br/><b>Destination Details</b></td>
    <td align="center"><img src="assets/screenshots/Trip_planner.png" width="220" alt="Trip planner"/><br/><b>Trip Planner</b></td>
  </tr>
</table>

## Future Improvements

- Split `App.js` into separate screens and reusable components
- Add more destinations and photos
- Add React Navigation for smoother screen transitions

- Add a dark mode

## Author

**Anji

## License

This project is licensed under the terms in the [LICENSE](LICENSE) file.

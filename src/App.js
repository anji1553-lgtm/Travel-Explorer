
import React, { useState, useEffect } from 'react';
import { places, categories } from './data';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Share,
  Linking,
} from 'react-native';



export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showTripPlanner, setShowTripPlanner] = useState(false);
  const [showSavedTrips, setShowSavedTrips] = useState(false);
  const [savedTrips, setSavedTrips] = useState([]);
  const [tripDestination, setTripDestination] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [tripDuration, setTripDuration] = useState('3');
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Load saved favourites when the app opens
  useEffect(() => {
    async function loadFavorites() {
      try {
        const savedFavorites = await AsyncStorage.getItem(
          'travelExplorerFavorites'
        );

        if (savedFavorites !== null) {
          setFavorites(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.log('Error loading favourites:', error);
      } finally {
        setFavoritesLoaded(true);
      }
    }

    loadFavorites();
  }, []);

  // Save favourites whenever they change
  useEffect(() => {
    if (!favoritesLoaded) return;

    async function saveFavorites() {
      try {
        await AsyncStorage.setItem(
          'travelExplorerFavorites',
          JSON.stringify(favorites)
        );
      } catch (error) {
        console.log('Error saving favourites:', error);
      }
    }

    saveFavorites();
  }, [favorites, favoritesLoaded]);

  const shareDestination = async (place) => {
    try {
      await Share.share({
        message: `Check out ${place.name}!\n\n${place.description}\n\nExplore this destination with Travel Explorer!`,
      });
    } catch (error) {
      console.log('Error sharing destination:', error);
    }
  };

  const openMap = (place) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      place.name + ', ' + place.location
    )}`;

    Linking.openURL(url).catch((error) => {
      console.log('Error opening map:', error);
    });
  };

  const saveTrip = async () => {
    if (!tripDestination) {
      alert('Please select a destination!');
      return;
    }

    if (!tripDate.trim()) {
      alert('Please enter your travel date!');
      return;
    }

    if (
      !Number.isInteger(Number(tripDuration)) ||
      Number(tripDuration) < 1
    ) {
      alert('Please enter a valid number of days!');
      return;
    }

    try {
      const savedTrips = await AsyncStorage.getItem('travelExplorerTrips');
      const trips = savedTrips ? JSON.parse(savedTrips) : [];

      const newTrip = {
        id: Date.now().toString(),
        destination: tripDestination,
        date: tripDate.trim(),
        duration: Number(tripDuration),
      };

      trips.push(newTrip);

      await AsyncStorage.setItem(
        'travelExplorerTrips',
        JSON.stringify(trips)
      );

      alert('Trip saved successfully! 🎉');

      setTripDestination('');
      setTripDate('');
      setTripDuration('3');
      setShowTripPlanner(false);
    } catch (error) {
      console.log('Error saving trip:', error);
      alert('Could not save your trip. Please try again.');
    }
  };

  function toggleFavorite(name) {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((item) => item !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  }

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      place.category === selectedCategory;

    const matchesFavorites =
      !showFavorites || favorites.includes(place.name);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  const loadSavedTrips = async () => {
    try {
      const saved = await AsyncStorage.getItem('travelExplorerTrips');
      setSavedTrips(saved ? JSON.parse(saved) : []);
    } catch (error) {
      console.log('Error loading trips:', error);
      alert('Could not load saved trips.');
    }
  };


  const deleteTrip = async (tripId) => {
    try {
      const updatedTrips = savedTrips.filter(
        (trip) => trip.id !== tripId
      );

      await AsyncStorage.setItem(
        'travelExplorerTrips',
        JSON.stringify(updatedTrips)
      );

      setSavedTrips(updatedTrips);
      alert('Trip deleted successfully!');
    } catch (error) {
      console.log('Error deleting trip:', error);
      alert('Could not delete trip.');
    }
  };
  const clearAllFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setShowFavorites(false);
  };


  // Destination details screen
  if (selectedPlace) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0F766E" />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedPlace(null)}
        >
          <Text style={styles.backText}>← Back to destinations</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{ uri: selectedPlace.image }}
            style={styles.detailImage}
            resizeMode="cover"
          />

          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>{selectedPlace.name}</Text>

            <Text style={styles.location}>
              📍 {selectedPlace.location}
            </Text>

            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => toggleFavorite(selectedPlace.name)}
            >
              <Text style={styles.favoriteText}>
                {favorites.includes(selectedPlace.name)
                  ? '❤️ Remove from Favourites'
                  : '🤍 Add to Favourites'}
              </Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>About this place</Text>
            <Text style={styles.detailDescription}>
              {selectedPlace.about}
            </Text>

            <Text style={styles.sectionTitle}>
              Popular Attractions
            </Text>

            {selectedPlace.attractions.map((attraction) => (
              <Text key={attraction} style={styles.attraction}>
                📌 {attraction}
              </Text>
            ))}

            <Text style={styles.sectionTitle}>Best Time to Visit</Text>

            <Text style={styles.detailDescription}>
              {selectedPlace.bestTime}
            </Text>

            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => shareDestination(selectedPlace)}
            >
              <Text style={styles.shareButtonText}>
                📤 Share Destination
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mapButton}
              onPress={() => openMap(selectedPlace)}
            >
              <Text style={styles.mapButtonText}>
                🗺️ View on Map
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Trip Planner Screen
  if (showTripPlanner) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0F766E" />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setShowTripPlanner(false)}
        >
          <Text style={styles.backText}>← Back to destinations</Text>
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>📅 Trip Planner</Text>

            <Text style={styles.detailDescription}>
              Plan your next adventure!
            </Text>
            <Text style={styles.sectionTitle}>Choose Destination</Text>


            {places.map((place) => (
              <TouchableOpacity
                key={place.name}
                style={styles.destinationOption}
                onPress={() => setTripDestination(place.name)}
              >
                <Text style={styles.attraction}>
                  {tripDestination === place.name ? '🔘' : '⚪'} {place.name}
                </Text>
              </TouchableOpacity>
            ))}


            <Text style={styles.sectionTitle}>Travel Date</Text>

            <TextInput
              style={styles.tripInput}
              placeholder="Enter date (DD/MM/YYYY)"
              value={tripDate}
              onChangeText={setTripDate}
            />

            <Text style={styles.sectionTitle}>Trip Duration</Text>

            <TextInput
              style={styles.tripInput}
              placeholder="Enter number of days"
              keyboardType="numeric"
              value={tripDuration}
              onChangeText={setTripDuration}
            />
            <TouchableOpacity
              style={styles.saveTripButton}
              onPress={saveTrip}
            >
              <Text style={styles.saveTripButtonText}>
                💾 Save Trip
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }

  // My Saved Trips Screen
  if (showSavedTrips) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0F766E" />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setShowSavedTrips(false)}
        >
          <Text style={styles.backText}>← Back to destinations</Text>
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>🧳 My Saved Trips</Text>

            {savedTrips.length === 0 ? (
              <Text style={styles.detailDescription}>
                No saved trips yet. Create your first trip!
              </Text>
            ) : (
              savedTrips.map((trip) => (
                <View key={trip.id} style={styles.tripCard}>
                  <Text style={styles.sectionTitle}>
                    📍 {trip.destination}
                  </Text>

                  <Text style={styles.detailDescription}>
                    📅 Travel Date: {trip.date}
                  </Text>

                  <Text style={styles.detailDescription}>
                    🗓️ Duration: {trip.duration} days
                  </Text>

                  <TouchableOpacity
                    style={styles.deleteTripButton}
                    onPress={() => deleteTrip(trip.id)}
                  >
                    <Text style={styles.deleteTripButtonText}>
                      🗑️ Delete Trip
                    </Text>
                  </TouchableOpacity>

                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
  // Home screen
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F766E" />

      <Text style={styles.title}>Travel Explorer 🌍</Text>
      <Text style={styles.subtitle}>
        Discover your next adventure!
      </Text>

      <TextInput
        style={styles.search}
        placeholder="🔍 Search destinations..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.filtersContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.filterButton,
                selectedCategory === category && styles.activeFilter,
              ]}
              onPress={() => setSelectedCategory(category)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCategory === category && styles.activeFilterText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
   <View style={styles.filterActions}>
  <TouchableOpacity
    style={[
      styles.wishlistButton,
      showFavorites && styles.wishlistActive,
    ]}
    onPress={() => setShowFavorites(!showFavorites)}
  >
    <Text style={styles.wishlistText}>
      {showFavorites ? '❤️ Showing Favourites' : '♡ View Favourites'}
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.clearButton}
    onPress={clearAllFilters}
  >
    <Text style={styles.clearButtonText}>
      ✕ Clear
    </Text>
  </TouchableOpacity>
</View>

      {/* Trip Planner Button */}
      <View style={styles.tripButtonsContainer}>
  <TouchableOpacity
    style={styles.tripPlannerButton}
    onPress={() => setShowTripPlanner(true)}
  >
    <Text style={styles.tripPlannerButtonText}>
      📅  Trip Planner
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.tripPlannerButton}
    onPress={async () => {
      await loadSavedTrips();
      setShowSavedTrips(true);
    }}
  >
    <Text style={styles.tripPlannerButtonText}>
      🧳  My Saved Trips
    </Text>
  </TouchableOpacity>
</View>


      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <TouchableOpacity
              key={place.name}
              activeOpacity={0.85}
              style={styles.card}
              onPress={() => setSelectedPlace(place)}
            >
              <Image
                source={{ uri: place.image }}
                style={styles.image}
                resizeMode="cover"
              />

              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => toggleFavorite(place.name)}
              >
                <Text style={styles.heart}>
                  {favorites.includes(place.name) ? '❤️' : '🤍'}
                </Text>
              </TouchableOpacity>

              <View style={styles.details}>
                <Text style={styles.name}>{place.name}</Text>
                <Text style={styles.location}>
                  📍 {place.location}
                </Text>
                <Text style={styles.category}>{place.category}</Text>
                <Text style={styles.description}>
                  {place.description}
                </Text>
                <Text style={styles.tapText}>
                  Tap to explore →
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.empty}>
            {showFavorites
              ? 'No favourites yet! Tap a heart to save a place.'
              : 'No destinations found. Try another search!'}
          </Text>
        )}
      </ScrollView>
    </View>
  );
}


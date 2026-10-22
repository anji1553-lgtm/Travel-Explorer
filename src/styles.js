import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#F0FDFA',
  paddingHorizontal: 18,
  paddingTop: 30,
},
  title: {
  fontSize: 28,
  fontWeight: '800',
  color: '#134E4A',
  marginBottom: 4,
},
  subtitle: {
  fontSize: 14,
  color: '#64748B',
  marginBottom: 18,
},
  search: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#CCFBF1',
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 12,
  fontSize: 15,
  color: '#134E4A',
  marginBottom: 4,
},
  filtersContainer: {
  marginTop: 16,
  marginBottom: 12,
},

filters: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: 8,
  gap: 10,
},

filterButton: {
  paddingVertical: 10,
  paddingHorizontal: 17,
  borderRadius: 25,
  borderWidth: 1,
  borderColor: '#99F6E4',
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
},

activeFilter: {
  backgroundColor: '#0F766E',
  borderColor: '#0F766E',
},

filterText: {
  fontSize: 13,
  fontWeight: '600',
  color: '#0F766E',
},

activeFilterText: {
  color: '#FFFFFF',
},
  wishlistButton: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#0F766E',
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
},
  wishlistActive: {
    backgroundColor: '#FCE7F3',
  },
  wishlistText: {
  color: '#0F766E',
  fontSize: 13,
  fontWeight: '600',
  textAlign: 'center',
},
  card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 18,
  marginBottom: 20,
  overflow: 'hidden',
  elevation: 4,
  shadowColor: '#134E4A',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.12,
  shadowRadius: 6,
},
  image: {
  width: '100%',
  height: 190,
},
  heartButton: {
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: '#FFFFFF',
  width: 42,
  height: 42,
  borderRadius: 21,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 3,
},
  heart: {
    fontSize: 22,
  },
  details: {
  padding: 16,
},
  name: {
  fontSize: 21,
  fontWeight: '700',
  color: '#134E4A',
  marginBottom: 5,
},
  location: {
  fontSize: 13,
  color: '#64748B',
  marginBottom: 10,
},
  category: {
  fontSize: 12,
  fontWeight: '600',
  color: '#0F766E',
  backgroundColor: '#CCFBF1',
  alignSelf: 'flex-start',
  overflow: 'hidden',
  borderRadius: 8,
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginBottom: 10,
},
  description: {
  fontSize: 14,
  color: '#475569',
  lineHeight: 21,
  marginBottom: 12,
},
  tapText: {
  fontSize: 13,
  fontWeight: '700',
  color: '#0F766E',
},
  backButton: {
    backgroundColor: '#0F766E',
    padding: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailImage: {
    width: '100%',
    height: 240,
    borderRadius: 16,
  },
  detailContent: {
    paddingVertical: 20,
    paddingBottom: 35,
  },
  detailTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#134E4A',
  },
  favoriteButton: {
    backgroundColor: '#FCE7F3',
    padding: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  favoriteText: {
    color: '#9D174D',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F766E',
    marginTop: 24,
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
  },
  attraction: {
    fontSize: 16,
    color: '#334155',
    marginVertical: 6,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  shareButton: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapButton: {
    backgroundColor: '#0F766E',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
    color: '#111827',
  },

  destinationOption: {
    paddingVertical: 4,
  },
  saveTripButton: {
    backgroundColor: '#0F766E',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  saveTripButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },

  deleteTripButton: {
    backgroundColor: '#DC2626',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  deleteTripButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
clearButton: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#CBD5E1',
  paddingVertical: 12,
  paddingHorizontal: 14,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
},

clearButtonText: {
  color: '#475569',
  fontSize: 13,
  fontWeight: '600',
},
tripPlannerButton: {
  flex: 1,
  backgroundColor: '#0F766E',
  paddingVertical: 13,
  paddingHorizontal: 8,
  borderRadius: 14,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 2,
},

tripPlannerButtonText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: '700',
  textAlign: 'center',
},
filterActions: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,
  marginBottom: 14,
},
tripButtonsContainer: {
  flexDirection: 'row',
  gap: 10,
  marginBottom: 16,
},

});

export default styles;
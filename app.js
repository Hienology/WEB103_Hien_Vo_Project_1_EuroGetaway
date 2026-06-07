const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const destinations = [
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    flag: '🇫🇷',
    shortDescription: 'Romantic boulevards, iconic landmarks, and timeless café culture.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'April to June',
    vibe: 'Romantic and elegant',
    costLevel: '$$$',
    recommendedStay: '4 days',
    whyVisit: 'Paris blends art, architecture, and cuisine into a city that feels both classic and constantly alive. Wander from the Seine to neighborhood markets, then close the day with views of illuminated monuments.',
    travelTips: 'Book major museum tickets early, use the Metro for quick travel, and keep a reusable water bottle for long walking days.',
    topAttractions: ['Eiffel Tower', 'Louvre Museum', 'Montmartre']
  },
  {
    slug: 'rome',
    name: 'Rome',
    country: 'Italy',
    flag: '🇮🇹',
    shortDescription: 'Ancient ruins, lively piazzas, and world-class Italian food.',
    imageUrl: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'March to May',
    vibe: 'Historic and vibrant',
    costLevel: '$$',
    recommendedStay: '3 days',
    whyVisit: 'Rome is an open-air museum where every corner reveals layers of history. You can explore ancient amphitheaters, sip espresso in sunlit squares, and enjoy unforgettable pasta all in one afternoon.',
    travelTips: 'Wear comfortable shoes, carry cash for smaller cafés, and reserve timed entry for the Colosseum and Vatican sites.',
    topAttractions: ['Colosseum', 'Trevi Fountain', 'Vatican Museums']
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    flag: '🇪🇸',
    shortDescription: 'Gaudí architecture, beach energy, and late-night tapas scenes.',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'May to June',
    vibe: 'Creative and coastal',
    costLevel: '$$',
    recommendedStay: '4 days',
    whyVisit: 'Barcelona offers a rare mix of culture and coastline. Colorful modernist landmarks, walkable neighborhoods, and Mediterranean sunsets make it easy to balance sightseeing and relaxation.',
    travelTips: 'Pickpocketing can happen in crowded spots, so keep valuables secure and buy attraction tickets online to skip long lines.',
    topAttractions: ['Sagrada Família', 'Park Güell', 'La Rambla']
  },
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    flag: '🇳🇱',
    shortDescription: 'Canal views, bike-friendly streets, and cozy neighborhood cafés.',
    imageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'April to September',
    vibe: 'Laid-back and artistic',
    costLevel: '$$$',
    recommendedStay: '3 days',
    whyVisit: 'Amsterdam feels intimate and easy to explore, with postcard-perfect canals and rich museum collections. It is ideal for travelers who enjoy slow mornings, scenic cycling, and modern design.',
    travelTips: 'Rent bikes only if you are comfortable with busy lanes, book Anne Frank House in advance, and validate transit cards before boarding.',
    topAttractions: ['Rijksmuseum', 'Anne Frank House', 'Jordaan District']
  },
  {
    slug: 'prague',
    name: 'Prague',
    country: 'Czech Republic',
    flag: '🇨🇿',
    shortDescription: 'Storybook streets, gothic towers, and budget-friendly charm.',
    imageUrl: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'May to September',
    vibe: 'Historic and cozy',
    costLevel: '$',
    recommendedStay: '3 days',
    whyVisit: 'Prague combines dramatic architecture with a welcoming atmosphere. From castle viewpoints to old town lanes, the city offers a magical setting without the price tag of larger capitals.',
    travelTips: 'Exchange money at reputable offices, start sightseeing early for quieter bridges, and carry layers for cool evenings.',
    topAttractions: ['Charles Bridge', 'Prague Castle', 'Old Town Square']
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    flag: '🇬🇷',
    shortDescription: 'Clifftop villages, whitewashed homes, and dramatic sea sunsets.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'May to October',
    vibe: 'Scenic and relaxing',
    costLevel: '$$$',
    recommendedStay: '3 days',
    whyVisit: 'Santorini is made for unforgettable views and slow, sun-filled days. The island pairs volcanic landscapes with charming villages where every terrace looks over the Aegean.',
    travelTips: 'Reserve sunset dinner spots in Oia, rent an ATV only if experienced, and avoid peak midday heat during uphill walks.',
    topAttractions: ['Oia Village', 'Red Beach', 'Fira to Oia Trail']
  },
  {
    slug: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    flag: '🇦🇹',
    shortDescription: 'Imperial palaces, classical music, and elegant coffee houses.',
    imageUrl: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'April to October',
    vibe: 'Refined and cultural',
    costLevel: '$$$',
    recommendedStay: '3 days',
    whyVisit: 'Vienna delivers grand architecture and a calm pace that rewards thoughtful exploration. Museums, concerts, and café traditions make it perfect for culture-focused travelers.',
    travelTips: 'Use a city pass for museums, dress up slightly for evening performances, and check opening days because many museums close on Mondays.',
    topAttractions: ['Schönbrunn Palace', 'Belvedere Museum', 'St. Stephen’s Cathedral']
  },
  {
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    flag: '🇵🇹',
    shortDescription: 'Colorful hills, vintage trams, and ocean-influenced cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'March to June',
    vibe: 'Sunny and soulful',
    costLevel: '$$',
    recommendedStay: '4 days',
    whyVisit: 'Lisbon combines old-world charm with a youthful creative scene. Expect scenic miradouros, tiled facades, and neighborhoods where music and local food define the evening.',
    travelTips: 'Wear shoes with grip for steep cobblestone streets, buy transit cards at metro stations, and consider day trips to Sintra.',
    topAttractions: ['Alfama District', 'Belém Tower', 'Tram 28']
  },
  {
    slug: 'interlaken',
    name: 'Interlaken',
    country: 'Switzerland',
    flag: '🇨🇭',
    shortDescription: 'Alpine peaks, crystal lakes, and adventure sports year-round.',
    imageUrl: 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'June to September',
    vibe: 'Nature-rich and adventurous',
    costLevel: '$$$$',
    recommendedStay: '3 days',
    whyVisit: 'Interlaken is a gateway to dramatic mountain scenery and outdoor activities. Whether you choose scenic rail journeys or paragliding, every day feels cinematic.',
    travelTips: 'Check weather before high-altitude excursions, carry a light rain layer, and reserve panoramic train routes early in peak season.',
    topAttractions: ['Jungfraujoch', 'Lake Brienz', 'Harder Kulm']
  }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'European Getaways',
    destinations
  });
});

app.get('/destinations/:slug', (req, res) => {
  const destination = destinations.find((item) => item.slug === req.params.slug);

  if (!destination) {
    return res.status(404).render('404', { title: 'Destination Not Found' });
  }

  return res.render('destination', {
    title: `${destination.name}, ${destination.country}`,
    destination
  });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});

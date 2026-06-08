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
    whyVisit: `Paris blends art, architecture, and cuisine into a city that feels both classic and constantly alive. Beyond the famous landmarks, the real appeal is how naturally the city mixes elegance and everyday life. A quiet pastry shop, a bookshop along the river, a small market street, and a grand boulevard can all sit within the same walk, which makes the city feel layered rather than staged.

  The city rewards slow travel, and that is what makes it memorable. A morning croissant in one arrondissement, an afternoon in a museum, and an evening walk along the Seine create a rhythm that feels both refined and welcoming. At the same time, Paris never feels like a museum piece. It is energetic, stylish, and full of local routines that travelers can observe without needing to rush from one highlight to the next.

  It is also one of Europe’s easiest cities for first-time travelers who want iconic sights without sacrificing neighborhood character, good food, or memorable small moments. You can spend one day on headline attractions and the next simply drifting through cafés, gardens, and side streets, which is why Paris remains a destination that feels rewarding whether it is your first visit or your fifth.`,
    travelTips: [
      'Book major museum tickets early, especially for the Louvre and popular towers.',
      'Use the Metro for quick cross-town trips and save walking for the neighborhoods you want to explore.',
      'Carry a reusable water bottle and plan for long walking days between major sights.',
      'Reserve one evening for a slower river walk so the city feels less rushed.'
    ],
    travelTipsIntro: 'Paris is easy to enjoy, but it rewards a little planning before you arrive. Think about museum reservations, pacing your days around neighborhoods instead of trying to cross the whole city at once, and leaving some room in the schedule for long walks and café stops. The city feels richer when you treat it as a sequence of experiences rather than a checklist, so the most important part is not to overbook every hour.',
    topAttractions: ['Eiffel Tower', 'Louvre Museum', 'Montmartre', 'Seine River Walk', 'Sainte-Chapelle']
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
    whyVisit: `Rome is an open-air museum where every corner reveals layers of history, but it is more than a checklist of ruins. The city’s streets are full of lived-in detail: apartment balconies, tiny bakeries, church facades, delivery scooters, and everyday neighborhood rituals that sit beside some of the most important monuments in Europe. That contrast gives Rome an energy that feels immediate and timeless at once.

  The city’s appeal comes from contrast: monumental ruins beside lively trattorias, quiet church interiors behind busy streets, and grand piazzas that still function as everyday gathering places. One moment you are standing in front of a structure shaped by emperors, and the next you are in a small square where locals are having lunch and children are playing. That is what makes Rome so compelling for longer stays, because the experience keeps shifting without losing its character.

  It is a destination where the best days come from combining major landmarks with simple pleasures, like a long lunch, a shaded walk, or a quiet fountain you stumbled upon by accident. The city rewards travelers who slow down enough to notice the details, because those details are often what make the biggest impression.`,
    travelTips: [
      'Wear comfortable shoes because Rome’s streets and ruins are best explored on foot.',
      'Carry some cash for smaller cafés, bakeries, and markets that may not always prefer cards.',
      'Reserve timed entry for the Colosseum and Vatican sites before your trip.',
      'Build in a long lunch break so you can travel more like a local and less like a checklist.'
    ],
    travelTipsIntro: 'Rome asks for a slower, more practical approach than a quick city break. Before getting into the details, it helps to remember that the city is busy, historic, and often best experienced on foot, which means comfort, timing, and energy management matter as much as the landmarks themselves. A little preparation goes a long way because the city’s most famous sites can be crowded, but the trip becomes much easier once you accept Rome’s rhythm and plan around it.',
    topAttractions: ['Colosseum', 'Trevi Fountain', 'Vatican Museums', 'Pantheon', 'Campo de’ Fiori']
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
    whyVisit: `Barcelona offers a rare mix of culture and coastline, and that combination gives the city a very easy rhythm to enjoy. The architecture is expressive, the food scene is lively, and the sea is never far away, so a day can move naturally from landmark sightseeing to a beach walk or an outdoor dinner without feeling fragmented. It is a city that keeps giving you reasons to stay outside.

  The city feels especially dynamic because every district has its own pace. You can spend the morning in Gaudí’s imaginative architecture, then shift to a beach promenade or a neighborhood market in the afternoon without losing momentum. Even the simple act of moving through the city is interesting, because the streets often frame the coastline, the tiled facades, or the dramatic geometry of modernist buildings.

  That balance of design, food, and sea air makes Barcelona feel energetic but not overwhelming, which is why it works so well for both short breaks and longer stays. Travelers can build days around food, culture, nightlife, or the beach and still feel like they are experiencing the same city rather than separate versions of it.`,
    travelTips: [
      'Keep valuables secure in crowded areas, especially on busy streets and transit.',
      'Buy attraction tickets online whenever possible to save time at major sights.',
      'Plan one meal near the water so you can enjoy the city’s coastal side.',
      'Use neighborhoods as your guide and group nearby sights into the same day.'
    ],
    travelTipsIntro: 'Barcelona works best when you stay alert to the city’s mix of busy streets, beach traffic, and late-night energy. Before the specific tips, the biggest thing to keep in mind is that Barcelona feels very spread out in experience even though it is easy to navigate, so it helps to think in terms of districts and daily themes. If you do that, the city feels more relaxed and the good parts of each neighborhood come through much more clearly.',
    topAttractions: ['Sagrada Família', 'Park Güell', 'La Rambla', 'Barceloneta Beach', 'Gothic Quarter']
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
    whyVisit: `Amsterdam feels intimate and easy to explore, with postcard-perfect canals and rich museum collections, but the city’s appeal goes beyond the obvious views. It has a very human scale, which means you can spend the day moving between neighborhoods, water edges, and small shops without ever feeling swallowed by the city. That sense of closeness makes it one of the most comfortable European capitals for relaxed travel.

  The city’s scale is one of its biggest advantages. You can move between museum districts, canal neighborhoods, and café-lined streets without spending much time in transit, which keeps each day relaxed and flexible. Because the city is compact and well connected, even unplanned wandering tends to feel productive rather than chaotic, and that makes Amsterdam particularly appealing for travelers who like to explore at their own pace.

  There is also a strong sense of lived-in charm here: elegant facades, quiet bridges, and small local businesses make Amsterdam feel polished without losing warmth. The city’s personality is calm rather than flashy, and that gives it a lasting appeal for travelers who want culture, design, and atmosphere without an overly intense pace.`,
    travelTips: [
      'Rent bikes only if you are comfortable with busy lanes and local cycling rules.',
      'Book Anne Frank House well in advance because slots can sell out quickly.',
      'Validate transit cards before boarding to avoid issues on trains and trams.',
      'Leave time for canal-side wandering instead of packing the schedule too tightly.'
    ],
    travelTipsIntro: 'Amsterdam is straightforward to navigate, but the details matter because the city is compact, active, and very rhythm-based. The main things to think about before diving into the specifics are transport, reservations, and how much time you want to leave for wandering between canals and neighborhoods. If you get those basics right, the city becomes much easier to enjoy without feeling hurried or overplanned.',
    topAttractions: ['Rijksmuseum', 'Anne Frank House', 'Jordaan District', 'Canal Belt', 'Vondelpark']
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
    whyVisit: `Prague combines dramatic architecture with a welcoming atmosphere, and it does so in a way that feels surprisingly approachable. The city has a rich visual identity, but it never feels too formal or too polished. Streets still feel walkable, neighborhoods still feel lived in, and the city’s mood changes beautifully as the light shifts across the river and rooftops.

  Its appeal is partly visual and partly atmospheric. Gothic spires, pastel facades, and river views give the city a storybook quality, while cafés and pubs keep it grounded and easy to enjoy at a human pace. You can spend one hour inside a major landmark and the next simply wandering across a bridge or sitting in a square watching the city move around you.

  For travelers who like cities with strong character, Prague delivers a lot of charm per square kilometer and remains one of the most rewarding places to wander without a rigid plan. It is the kind of destination where a slow afternoon can feel more memorable than a tightly packed itinerary, because the city’s texture is what really stays with you.`,
    travelTips: [
      'Exchange money at reputable offices and avoid rushed currency kiosks.',
      'Start sightseeing early to enjoy quieter bridges and fewer crowds in the old town.',
      'Carry layers because evenings can feel cooler than the daytime sun suggests.',
      'Leave some room in your day for cafés, plazas, and spontaneous detours.'
    ],
    travelTipsIntro: 'Prague is easy to fall into a comfortable rhythm with, but a few basic choices make the trip smoother. It helps to think about currency, weather, and timing before you get lost in the city’s scenic lanes, because those practical details can shape how relaxed your days feel. Once that is handled, Prague opens up as a city best enjoyed through long walks, breaks for food and coffee, and plenty of room for wandering.',
    topAttractions: ['Charles Bridge', 'Prague Castle', 'Old Town Square', 'Astronomical Clock', 'Lesser Town']
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
    whyVisit: `Santorini is made for unforgettable views and slow, sun-filled days, but its appeal comes from more than the postcard image. The island pairs volcanic landscapes with charming villages where every terrace looks over the Aegean, and that setting creates a very distinct sense of place. Even a simple walk can feel special because the architecture, the horizon, and the light all work together.

  The island is more than its famous sunsets. Black-sand beaches, cliffside footpaths, and smaller villages away from the busiest viewpoints give Santorini a quieter, more textured side that is easy to miss if you only rush between photo stops. That slower version of the island is often the most rewarding one, because it lets the scenery breathe and gives the trip more balance.

  It works best when treated as a place to linger: a long breakfast, a scenic walk, and a calm evening are often more memorable here than a packed itinerary. Santorini is ideal for travelers who want dramatic scenery, but it is equally strong for travelers who want a destination that encourages rest, reflection, and unhurried days.`,
    travelTips: [
      'Reserve sunset dinner spots in Oia ahead of time because the best views fill up quickly.',
      'Rent an ATV only if you have experience and feel confident on island roads.',
      'Avoid peak midday heat during uphill walks and save energy for the evening.',
      'Bring patience, water, and a flexible schedule so the island’s pace works for you.'
    ],
    travelTipsIntro: 'Santorini is one of those places where timing and expectations matter a lot. Before you dive into specific activities, it helps to keep in mind that the island is beautiful but can be very hot, very busy, and very dependent on getting from one viewpoint to another at the right moment. A calm pace, advance reservations, and a bit of flexibility will make the island feel much more enjoyable and far less rushed.',
    topAttractions: ['Oia Village', 'Red Beach', 'Fira to Oia Trail', 'Akrotiri', 'Imerovigli']
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
    whyVisit: `Vienna delivers grand architecture and a calm pace that rewards thoughtful exploration, and it does this with unusual consistency. The city is beautiful in a very composed way: broad avenues, elegant buildings, classical music, and well-kept public spaces all contribute to a sense of order that is pleasant rather than stiff. That atmosphere makes Vienna especially appealing for travelers who enjoy cities with strong cultural identity.

  What sets Vienna apart is how seamlessly formal elegance and daily life coexist. You can spend one hour inside a palace or museum, then the next at a classic café, watching the city move at an unhurried pace. The rhythm is gentle, but it is not boring. There is enough richness in the architecture, museums, and culinary traditions to keep each day varied.

  The result is a destination that feels polished and restorative at the same time, especially for travelers who appreciate music, design, and carefully preserved public spaces. Vienna is a good choice when you want a city break that feels substantial, cultured, and quietly luxurious without becoming overwhelming.`,
    travelTips: [
      'Use a city pass for museums if you plan to visit several major institutions.',
      'Dress up slightly for evening performances so you feel comfortable in formal settings.',
      'Check opening days because many museums close on Mondays.',
      'Make time for a classic café stop so the trip feels complete, not rushed.'
    ],
    travelTipsIntro: 'Vienna is a polished city, and a little preparation helps you enjoy that polish without feeling boxed in by it. The main things to think about are museum schedules, evening dress expectations, and how much of the trip you want to shape around cafés and cultural outings. Once those basics are in place, Vienna becomes a very smooth destination to explore at a calm, considered pace.',
    topAttractions: ['Schönbrunn Palace', 'Belvedere Museum', 'St. Stephen’s Cathedral', 'Hofburg Palace', 'Viennese Coffee Houses']
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
    whyVisit: `Lisbon combines old-world charm with a youthful creative scene, and that mix gives the city an easy warmth. Expect scenic miradouros, tiled facades, and neighborhoods where music and local food define the evening, but also expect a city that feels modern and energetic underneath the heritage. That balance makes it inviting for travelers who like places with personality.

  The city is rewarding because it feels both layered and approachable. Historic quarters sit beside modern cafés and creative spaces, so a day in Lisbon can move from viewpoints to tram rides to relaxed dinners without feeling rushed. The hills and winding streets add a little drama to the experience, but they also create excellent views, varied neighborhoods, and a sense that each area has its own tempo.

  It is a city that invites detours, and that flexibility is part of its appeal: the best moments often come from following a side street, a tram route, or a view you did not plan to find. Lisbon works especially well for travelers who enjoy a city that feels spontaneous, scenic, and easy to enjoy in pieces across the day.`,
    travelTips: [
      'Wear shoes with grip for steep cobblestone streets and hilltop viewpoints.',
      'Buy transit cards at metro stations to make tram and metro travel easier.',
      'Consider a day trip to Sintra if you want a scenic change of pace.',
      'Plan at least one sunset view from a miradouro to get the city’s full atmosphere.'
    ],
    travelTipsIntro: 'Lisbon is friendly and rewarding, but the hills and tram network shape how you should think about the city from the start. Before getting into the detailed tips, it helps to understand that comfort, footwear, and a flexible schedule matter here more than in flatter cities, because Lisbon’s charm often comes from moving slowly between viewpoints and neighborhoods. If you plan for that from the beginning, the city feels scenic and easy rather than tiring.',
    topAttractions: ['Alfama District', 'Belém Tower', 'Tram 28', 'Baixa', 'Miradouro da Senhora do Monte']
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
    whyVisit: `Interlaken is a gateway to dramatic mountain scenery and outdoor activities, but it works best as a destination in its own right rather than just a transfer point. The surrounding landscape is the main attraction, of course, yet the town’s calm setting and easy access to the outdoors give the whole area a very balanced feel. It is the kind of place where fresh air and wide views become part of the daily routine.

  It stands out as a base rather than just a stop. From here you can reach lakes, valleys, and alpine peaks with surprising ease, which makes it useful for travelers who want one comfortable hub for several kinds of mountain experiences. That flexibility is especially valuable if you want to mix scenic travel with activities, because it keeps the trip varied without making it complicated.

  The scenery does much of the work, but the real appeal is how accessible the adventure feels. You do not have to be an expert hiker or skier to have a memorable trip here, and that accessibility makes Interlaken ideal for travelers who want mountain drama without the pressure of an extreme itinerary.`,
    travelTips: [
      'Check weather before high-altitude excursions because mountain conditions change quickly.',
      'Carry a light rain layer so you stay prepared for sudden weather shifts.',
      'Reserve panoramic train routes early in peak season.',
      'Use Interlaken as a base and cluster your outdoor activities by direction and weather.'
    ],
    travelTipsIntro: 'Interlaken is all about the outdoors, so the main questions before you start planning details are weather, transport, and how ambitious you want the mountain activities to be. Because this is a place where conditions can shift quickly and the best experiences often depend on clear views, it pays to think ahead rather than improvise everything on arrival. Once those basics are in place, Interlaken becomes an excellent base for a balanced mountain trip.',
    topAttractions: ['Jungfraujoch', 'Lake Brienz', 'Harder Kulm', 'Lake Thun', 'Schynige Platte']
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

export const tourismData = {
    "rift-valley": {
      name: "Rift Valley",
      categories: {
        parks: {
          name: "National Parks",
          destinations: [
            {
              id: 1,
              name: "Maasai Mara",
              county: "Narok",
              mapUrl:
                "https://maps.google.com/maps?q=maasai%20mara&t=&z=10&ie=UTF8&iwloc=&output=embed",
              weather: "20–28°C, mostly sunny",
              rating: 4.8,
              fees: { adult: 3000, child: 1500 },
              vehicleFees: { car: 400, bus: 1500 },
              campingFees: 1000,
              bestTime: "July – October",
              activities: ["Game Drives", "Hot Air Balloon", "Cultural Visits"],
            },
            {
              id: 2,
              name: "Lake Nakuru",
              county: "Nakuru",
              mapUrl:
                "https://maps.google.com/maps?q=lake%20nakuru&t=&z=10&ie=UTF8&iwloc=&output=embed",
              weather: "18–26°C, partly cloudy",
              rating: 4.6,
              fees: { adult: 2000, child: 1000 },
              vehicleFees: { car: 300, bus: 1200 },
              campingFees: 800,
              bestTime: "June – September",
              activities: ["Flamingo Watching", "Hiking", "Bird Watching"],
            },
          ],
        },
      },
    },
  
    coast: {
      name: "Coast",
      categories: {
        beaches: {
          name: "Beaches",
          destinations: [
            {
              id: 3,
              name: "Diani Beach",
              county: "Kwale",
              mapUrl:
                "https://maps.google.com/maps?q=diani%20beach&t=&z=10&ie=UTF8&iwloc=&output=embed",
              weather: "25–32°C, sunny",
              rating: 4.7,
              fees: {},
              vehicleFees: {},
              campingFees: 0,
              bestTime: "December – March",
              activities: ["Swimming", "Snorkeling", "Sunbathing"],
            },
          ],
        },
      },
    },
  };
  
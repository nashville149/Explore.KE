export const tourismData = {
  "rift-valley": {
    name: "Rift Valley",
    categories: {
      lakes: {
        name: "Lakes",
        destinations: [
          { id: 1, name: "Lake Naivasha", county: "Nakuru", rating: 4.6, activities: ["Boat Rides", "Bird Watching", "Hippo Viewing"] },
          { id: 2, name: "Lake Nakuru", county: "Nakuru", rating: 4.8, activities: ["Flamingo Watching", "Game Drives", "Photography"] },
          { id: 3, name: "Lake Bogoria", county: "Baringo", rating: 4.5, activities: ["Hot Springs", "Flamingo Viewing", "Geysers"] },
          { id: 4, name: "Lake Magadi", county: "Kajiado", rating: 4.2, activities: ["Salt Mining Tours", "Bird Watching", "Photography"] },
          { id: 5, name: "Lake Elementaita", county: "Nakuru", rating: 4.4, activities: ["Bird Watching", "Photography", "Nature Walks"] }
        ]
      },
      mountains: {
        name: "Mountains & Hills",
        destinations: [
          { id: 6, name: "Ngong Hills", county: "Kajiado", rating: 4.7, activities: ["Hiking", "Paragliding", "Photography"] },
          { id: 7, name: "Mount Longonot", county: "Nakuru", rating: 4.8, activities: ["Crater Hiking", "Rock Climbing", "Wildlife Viewing"] },
          { id: 8, name: "Mount Suswa", county: "Narok", rating: 4.3, activities: ["Cave Exploration", "Hiking", "Cultural Tours"] },
          { id: 9, name: "Menengai Crater", county: "Nakuru", rating: 4.5, activities: ["Hiking", "Photography", "Geological Tours"] }
        ]
      },
      parks: {
        name: "National Parks",
        destinations: [
          { id: 10, name: "Lake Nakuru National Park", county: "Nakuru", rating: 4.8, activities: ["Game Drives", "Bird Watching", "Photography"] },
          { id: 11, name: "Hell's Gate National Park", county: "Nakuru", rating: 4.6, activities: ["Rock Climbing", "Cycling", "Geothermal Tours"] },
          { id: 12, name: "Mount Longonot National Park", county: "Nakuru", rating: 4.7, activities: ["Hiking", "Crater Walks", "Wildlife Viewing"] }
        ]
      }
    }
  },

  "northern": {
    name: "Northern Kenya",
    categories: {
      lakes: {
        name: "Lakes",
        destinations: [
          { id: 13, name: "Lake Turkana", county: "Turkana", rating: 4.9, activities: ["Cultural Tours", "Fishing", "Desert Safari"] },
          { id: 14, name: "Lake Baringo", county: "Baringo", rating: 4.5, activities: ["Boat Rides", "Bird Watching", "Hot Springs"] }
        ]
      },
      parks: {
        name: "National Parks & Reserves",
        destinations: [
          { id: 15, name: "Samburu National Reserve", county: "Samburu", rating: 4.8, activities: ["Game Drives", "Cultural Visits", "River Safari"] },
          { id: 16, name: "Buffalo Springs", county: "Isiolo", rating: 4.6, activities: ["Game Drives", "Photography", "Nature Walks"] },
          { id: 17, name: "Marsabit National Park", county: "Marsabit", rating: 4.4, activities: ["Elephant Viewing", "Forest Walks", "Cultural Tours"] }
        ]
      },
      cultural: {
        name: "Cultural Sites",
        destinations: [
          { id: 18, name: "Loiyangalani", county: "Marsabit", rating: 4.3, activities: ["Cultural Tours", "Desert Museum", "Traditional Crafts"] },
          { id: 19, name: "Marsabit Town", county: "Marsabit", rating: 4.1, activities: ["Cultural Tours", "Market Visits", "Local Cuisine"] }
        ]
      }
    }
  },

  "eastern": {
    name: "Eastern Kenya",
    categories: {
      mountains: {
        name: "Mountains & Highlands",
        destinations: [
          { id: 20, name: "Mount Kenya (Eastern Slopes)", county: "Meru", rating: 4.9, activities: ["Mountain Climbing", "Forest Walks", "Wildlife Viewing"] },
          { id: 21, name: "Machakos Hills", county: "Machakos", rating: 4.4, activities: ["Hiking", "Rock Climbing", "Photography"] }
        ]
      },
      parks: {
        name: "National Parks",
        destinations: [
          { id: 22, name: "Meru National Park", county: "Meru", rating: 4.7, activities: ["Game Drives", "Rhino Sanctuary", "River Activities"] },
          { id: 23, name: "Laikipia Conservancies", county: "Laikipia", rating: 4.8, activities: ["Game Drives", "Horse Riding", "Conservation Tours"] }
        ]
      },
      rivers: {
        name: "Rivers & Waterfalls",
        destinations: [
          { id: 24, name: "Chania Falls", county: "Kiambu", rating: 4.5, activities: ["Hiking", "Photography", "Picnicking"] },
          { id: 25, name: "Tana River", county: "Tana River", rating: 4.3, activities: ["River Safari", "Fishing", "Bird Watching"] }
        ]
      }
    }
  },

  "central": {
    name: "Central Kenya",
    categories: {
      mountains: {
        name: "Mountains & Highlands",
        destinations: [
          { id: 26, name: "Mount Kenya", county: "Kirinyaga", rating: 4.9, activities: ["Mountain Climbing", "Hiking", "Alpine Lakes"] },
          { id: 27, name: "Aberdare Ranges", county: "Nyeri", rating: 4.7, activities: ["Forest Walks", "Wildlife Viewing", "Waterfalls"] }
        ]
      },
      conservancies: {
        name: "Conservancies",
        destinations: [
          { id: 28, name: "Ol Pejeta Conservancy", county: "Laikipia", rating: 4.8, activities: ["Rhino Sanctuary", "Game Drives", "Chimpanzee Sanctuary"] },
          { id: 29, name: "Aberdare National Park", county: "Nyeri", rating: 4.6, activities: ["Forest Walks", "Waterfall Viewing", "Wildlife Spotting"] }
        ]
      },
      waterfalls: {
        name: "Waterfalls & Rivers",
        destinations: [
          { id: 30, name: "Thompson Falls", county: "Nyahururu", rating: 4.7, activities: ["Hiking", "Photography", "Picnicking"] },
          { id: 31, name: "Karuru Falls", county: "Nyeri", rating: 4.5, activities: ["Hiking", "Nature Walks", "Photography"] }
        ]
      }
    }
  },

  "coast": {
    name: "Coastal Kenya",
    categories: {
      beaches: {
        name: "Beaches & Islands",
        destinations: [
          { id: 32, name: "Diani Beach", county: "Kwale", rating: 4.8, activities: ["Swimming", "Snorkeling", "Water Sports"] },
          { id: 33, name: "Tiwi Beach", county: "Kwale", rating: 4.6, activities: ["Swimming", "Sunbathing", "Beach Walks"] },
          { id: 34, name: "Lamu Island", county: "Lamu", rating: 4.9, activities: ["Cultural Tours", "Dhow Sailing", "Historical Sites"] },
          { id: 35, name: "Malindi Beach", county: "Kilifi", rating: 4.5, activities: ["Swimming", "Deep Sea Fishing", "Snorkeling"] }
        ]
      },
      marine: {
        name: "Marine Parks",
        destinations: [
          { id: 36, name: "Watamu Marine Park", county: "Kilifi", rating: 4.7, activities: ["Snorkeling", "Diving", "Turtle Watching"] },
          { id: 37, name: "Malindi Marine Park", county: "Kilifi", rating: 4.6, activities: ["Glass Bottom Boat", "Snorkeling", "Coral Viewing"] }
        ]
      },
      cultural: {
        name: "Historical & Cultural",
        destinations: [
          { id: 38, name: "Mombasa Old Town", county: "Mombasa", rating: 4.7, activities: ["Historical Tours", "Architecture", "Spice Markets"] },
          { id: 39, name: "Lamu Old Town", county: "Lamu", rating: 4.9, activities: ["UNESCO Heritage Tours", "Swahili Culture", "Traditional Crafts"] }
        ]
      }
    }
  },

  "nairobi": {
    name: "Nairobi",
    categories: {
      wildlife: {
        name: "Wildlife & Nature",
        destinations: [
          { id: 40, name: "Nairobi National Park", county: "Nairobi", rating: 4.6, activities: ["Game Drives", "Picnicking", "Walking Trails"] },
          { id: 41, name: "Giraffe Centre", county: "Nairobi", rating: 4.8, activities: ["Giraffe Feeding", "Educational Tours", "Photography"] },
          { id: 42, name: "David Sheldrick Trust", county: "Nairobi", rating: 4.9, activities: ["Elephant Orphanage", "Adoption Programs", "Conservation Tours"] },
          { id: 43, name: "Karura Forest", county: "Nairobi", rating: 4.5, activities: ["Hiking", "Cycling", "Waterfall Viewing"] }
        ]
      },
      parks: {
        name: "Urban Parks",
        destinations: [
          { id: 44, name: "Uhuru Park", county: "Nairobi", rating: 4.2, activities: ["Picnicking", "Boating", "Relaxation"] },
          { id: 45, name: "Central Park", county: "Nairobi", rating: 4.1, activities: ["Walking", "Jogging", "Bird Watching"] }
        ]
      },
      hills: {
        name: "Hills & Escarpments",
        destinations: [
          { id: 46, name: "Ngong Hills", county: "Kajiado", rating: 4.7, activities: ["Hiking", "Wind Farm Tours", "Photography"] }
        ]
      }
    }
  }
};
const entries = [
{
    category: "National Parks",
    location: "Atlanta, GA",
    place: "Piedmont Park",
    image: "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
},
{
    category: "Lakes",
    location: "Austin,TX",
    place: "Lady Bird Lake",
    image: "https://images.unsplash.com/photo-1638803763604-f158be7f2dda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
},
{
    category: "Restaurants",
    location: "Houston, TX",
    place: "Green Seed Vegan",
    image: "https://images.unsplash.com/photo-1604349899568-1480825fdcd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1857&q=80",
},
];


await entries.insertMany(Entries);
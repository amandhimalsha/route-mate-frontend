export const mockDriverTrips = {
  upcoming: [
    {
      id: "du1",
      route: "Downtown Central → Tech Park",
      passengers: 3,
      distanceKm: 7.8,
      fare: 14.5,
      status: "Upcoming",
      time: "Tomorrow, 8:20 AM",
    },
  ],
  completed: [
    {
      id: "dc1",
      route: "Riverside → Financial District",
      passengers: 2,
      distanceKm: 5.2,
      fare: 10.3,
      status: "Completed",
      time: "Today, 8:05 AM",
    },
    {
      id: "dc2",
      route: "Campus → Old Town",
      passengers: 1,
      distanceKm: 6.7,
      fare: 9.8,
      status: "Completed",
      time: "Yesterday, 6:15 PM",
    },
  ],
  cancelled: [
    {
      id: "dx1",
      route: "Airport → City Center",
      passengers: 2,
      distanceKm: 9.3,
      fare: 0,
      status: "Cancelled",
      time: "Mar 10, 5:40 PM",
    },
  ],
};


export type VisitedPlace = {
  id: string;
  name: string;
  state: string;
  country: "India";
  category: "city" | "region" | "temple" | "heritage" | "adventure" | "beach";
  status: "visited";
  visitDate?: string;
  parentPlace?: string;
  note?: string;
};

export const visitedPlaces: VisitedPlace[] = [
  {
    id: "badami",
    name: "Badami",
    state: "Karnataka",
    country: "India",
    category: "city",
    status: "visited",
    visitDate: "2026-11-01",
    note: "One-day trip with Mani and the group."
  },
  {
    id: "badami-cave-temples",
    name: "Badami Cave Temples",
    state: "Karnataka",
    country: "India",
    category: "heritage",
    status: "visited",
    parentPlace: "Badami",
    note: "Rock-cut cave temple complex."
  },
  {
    id: "agastya-temple",
    name: "Agastya Temple",
    state: "Karnataka",
    country: "India",
    category: "heritage",
    status: "visited",
    parentPlace: "Badami",
    note: "Visited during the Badami day trip."
  },
  {
    id: "badami-rock-climbing",
    name: "Badami Rock Climbing Adventure",
    state: "Karnataka",
    country: "India",
    category: "adventure",
    status: "visited",
    parentPlace: "Badami",
    note: "Rock-climbing/adventure experience near the Badami cliffs."
  },
  {
    id: "shakambari-shakti-peeth",
    name: "Shakambari Shakti Peeth",
    state: "Karnataka",
    country: "India",
    category: "temple",
    status: "visited",
    parentPlace: "Badami",
    note: "Temple visit near Badami."
  },
  {
    id: "gokarna",
    name: "Gokarna",
    state: "Karnataka",
    country: "India",
    category: "beach",
    status: "visited"
  },
  {
    id: "murudeshwar",
    name: "Murudeshwar",
    state: "Karnataka",
    country: "India",
    category: "beach",
    status: "visited"
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    country: "India",
    category: "heritage",
    status: "visited"
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "region",
    status: "visited",
    visitDate: "2025-10",
    note: "Trip memory from October 2025."
  },
  {
    id: "goa-madgaon",
    name: "Madgaon",
    state: "Goa",
    country: "India",
    category: "city",
    status: "visited"
  },
  {
    id: "goa-calangute",
    name: "Calangute",
    state: "Goa",
    country: "India",
    category: "beach",
    status: "visited"
  },
  {
    id: "goa-baga",
    name: "Baga",
    state: "Goa",
    country: "India",
    category: "beach",
    status: "visited"
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
    category: "city",
    status: "visited"
  }
];

// Centralized wedding data — edit this file to reuse the site for any couple.
const weddingData = {
  groom: {
    name: "Groom Name",
    shortName: "Groom Name",
    parents: "Son of Mr. & Mrs. Ramesh & Lakshmi",
    image: "/images/groom.svg",
    phone: "+919876543210",
  },

  bride: {
    name: "Bride Name",
    shortName: "Bride Name",
    parents: "Daughter of Mr. & Mrs. Suresh & Padma",
    image: "/images/bride.svg",
    phone: "+919876543211",
  },

  weddingDate: "2026-12-25T09:30:00",

  quote:
    "Two hearts, two lives, one beautiful journey.",

  story: [
    {
      year: "2019",
      title: "First Meeting",
      description:
        "A chance introduction at a common friend's gathering — neither of us expected a single conversation to change everything.",
    },
    {
      year: "2021",
      title: "We Fell in Love",
      description:
        "What began as friendship quietly grew into something neither of us could ignore any longer.",
    },
    {
      year: "2024",
      title: "The Proposal",
      description:
        "Under a sky full of stars, a question was asked — and answered with a joyful yes.",
    },
    {
      year: "2026",
      title: "The Wedding",
      description:
        "Two families, one celebration — the beginning of forever, surrounded by the people we love most.",
    },
  ],

  venue: {
    name: "Grand Convention Hall",
    address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
    image: "/images/venue.svg",
    mapsUrl: "https://maps.google.com/?q=Grand+Convention+Hall+Hyderabad",
  },

  events: [
    {
      id: "haldi",
      name: "Haldi",
      date: "December 20, 2026",
      time: "10:00 AM onwards",
      venue: "Residence Courtyard, Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Haldi+Venue+Hyderabad",
    },
    {
      id: "mehendi",
      name: "Mehendi",
      date: "December 22, 2026",
      time: "5:00 PM onwards",
      venue: "The Rose Garden, Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Mehendi+Venue+Hyderabad",
    },
    {
      id: "wedding",
      name: "Wedding",
      date: "December 25, 2026",
      time: "9:30 AM – 11:30 AM",
      venue: "Grand Convention Hall, Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Grand+Convention+Hall+Hyderabad",
    },
    {
      id: "reception",
      name: "Reception",
      date: "December 26, 2026",
      time: "7:00 PM onwards",
      venue: "Grand Convention Hall, Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Grand+Convention+Hall+Hyderabad",
    },
  ],

  family: {
    bride: {
      title: "Bride's Family",
      parents: "Mr. Suresh & Mrs. Padma",
      members: [
        "Ravi Kumar (Brother)",
        "Divya (Sister-in-law)",
        "Meera (Sister)",
      ],
    },
    groom: {
      title: "Groom's Family",
      parents: "Mr. Ramesh & Mrs. Lakshmi",
      members: [
        "Arjun (Brother)",
        "Kavya (Sister-in-law)",
        "Rohit (Brother)",
      ],
    },
  },

  gallery: [
    "/images/gallery/photo1.svg",
    "/images/gallery/photo2.svg",
    "/images/gallery/photo3.svg",
    "/images/gallery/photo4.svg",
    "/images/gallery/photo5.svg",
    "/images/gallery/photo6.svg",
  ],

  music: "/audio/wedding-song.mp3",

  upi: {
    id: "giribabu@upi",
    qrCode: "/images/upi-qr.svg",
  },

  contact: [
    {
      title: "Bride's Family",
      phone: "+919876543211",
    },
    {
      title: "Groom's Family",
      phone: "+919876543210",
    },
  ],
};

export default weddingData;

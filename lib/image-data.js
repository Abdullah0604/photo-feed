const photos = [
  {
    id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
    title: "Calm River in the Valley",
    url: "https://unsplash.com/photos/farmhouse-sink-with-stainless-steel-countertops-and-blue-cabinets-IIy2d0-0Ueg",
    tags: ["nature", "river", "valley"],
    views: "12M",
    share: "5.1M",
    uploaded: "2024-02-01",
    author: {
      avatar: "https://i.pravatar.cc/150?img=53",
      name: "Alex B",
      bio: "Landscape and travel photographer sharing stories through pictures.",
      followers: 340,
    },
    likes: 220,
  },
  {
    id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
    title: "City Skyline at Night",
    url: "https://unsplash.com/photos/a-white-horse-grazes-in-a-dry-field-at-sunset-e8Kl_iPHRBw",
    tags: ["city", "night", "lights"],
    views: "8.4M",
    share: "2.9M",
    uploaded: "2024-01-29",
    author: {
      avatar: "https://i.pravatar.cc/150?img=54",
      name: "Brian Xelo",
      bio: "Urban explorer capturing cities around the globe.",
      followers: 510,
    },
    likes: 430,
  },
  {
    id: "8265198d-e2e1-4221-addc-8244f39fdd62",
    title: "Snowy Mountain Peaks",
    url: "https://unsplash.com/photos/white-wooden-framed-glass-window-yqn4he8-ugM",
    tags: ["mountain", "snow", "hiking"],
    views: "5.6M",
    share: "1.8M",
    uploaded: "2024-01-25",
    author: {
      avatar: "https://i.pravatar.cc/150?img=55",
      name: "Ceza Des",
      bio: "Adventure seeker, documenting the raw beauty of mountains.",
      followers: 190,
    },
    likes: 310,
  },
  {
    id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
    title: "Sunset Over the Ocean",
    url: "https://unsplash.com/photos/man-walking-down-stairs-in-modern-building-XKNqsqgL73E",
    tags: ["ocean", "sunset", "beach"],
    views: "14M",
    share: "6.2M",
    uploaded: "2024-01-30",
    author: {
      avatar: "https://i.pravatar.cc/150?img=56",
      name: "Karim Bulletin",
      bio: "Seascape photographer chasing sunsets.",
      followers: 780,
    },
    likes: 670,
  },
  {
    id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
    title: "Blossom in Spring",
    url: "https://unsplash.com/photos/woman-in-black-and-white-striped-long-sleeve-shirt-wearing-black-sunglasses-AnOLJXPaB3o",
    tags: ["flower", "spring", "bloom"],
    views: "7.1M",
    share: "3.4M",
    uploaded: "2024-02-02",
    author: {
      avatar: "https://i.pravatar.cc/150?img=57",
      name: "Madan PA",
      bio: "Macro photography enthusiast with a love for flowers.",
      followers: 260,
    },
    likes: 180,
  },
  {
    id: "6bea51c4-1123-425f-90c9-9148724872e5",
    title: "Forest Pathway",
    url: "https://unsplash.com/photos/field-of-sunflowers-at-sunset-with-warm-light-gjXWsXJuHUw",
    tags: ["forest", "path", "green"],
    views: "9.3M",
    share: "2.7M",
    uploaded: "2024-01-28",
    author: {
      avatar: "https://i.pravatar.cc/150?img=58",
      name: "Moina Lam",
      bio: "Nature walker capturing serene trails.",
      followers: 410,
    },
    likes: 290,
  },
  {
    id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
    title: "Golden Desert Dunes",
    url: "https://unsplash.com/photos/sunset-over-the-ocean-with-a-lens-flare-_FTPy5VH7Gg",
    tags: ["desert", "sand", "sun"],
    views: "6.8M",
    share: "1.9M",
    uploaded: "2024-01-26",
    author: {
      avatar: "https://i.pravatar.cc/150?img=59",
      name: "Nat B",
      bio: "Traveling through deserts to capture endless horizons.",
      followers: 180,
    },
    likes: 240,
  },
  {
    id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
    title: "Misty Morning Lake",
    url: "https://unsplash.com/photos/a-deer-walks-through-wildflowers-near-a-snowy-mountain-DXEhDakyt8E",
    tags: ["lake", "morning", "mist"],
    views: "4.5M",
    share: "1.3M",
    uploaded: "2024-02-03",
    author: {
      avatar: "https://i.pravatar.cc/150?img=60",
      name: "Taral X",
      bio: "Calm mornings and peaceful lakes are my favorite subjects.",
      followers: 300,
    },
    likes: 200,
  },
  {
    id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
    title: "Countryside Road",
    url: "https://unsplash.com/photos/couples-feet-standing-close-together-outdoors-4u9jYt2Le_I",
    tags: ["countryside", "road", "trees"],
    views: "3.8M",
    share: "900K",
    uploaded: "2024-01-22",
    author: {
      avatar: "https://i.pravatar.cc/150?img=61",
      name: "Zhoom B",
      bio: "Capturing rustic vibes of rural roads.",
      followers: 150,
    },
    likes: 160,
  },
  {
    id: "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
    title: "Aurora in the Night Sky",
    url: "https://unsplash.com/photos/close-up-of-a-professional-camera-lens-3KDuwMdeTrI",
    tags: ["aurora", "sky", "stars"],
    views: "15M",
    share: "7.8M",
    uploaded: "2024-01-20",
    author: {
      avatar: "https://i.pravatar.cc/150?img=62",
      name: "T Manhattan",
      bio: "Astro-photographer chasing northern lights.",
      followers: 950,
    },
    likes: 870,
  },
];

const getAllPhoto = () => {
  return photos;
};

const getPhotos = () => {
  return photos.map((photo) => {
    return {
      id: photo.id,
      title: photo.title,
      url: photo.url,
    };
  });
};
const getPhotoByID = (id) => {
  return photos.find((photo) => photo.id === id);
};

export { getAllPhoto, getPhotoByID, getPhotos };

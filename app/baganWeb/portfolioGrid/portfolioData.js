import { getImages } from "./getImages";

export function loadPortfolioData() {
  const categories = {
    "akad tanpa siger": {
      name: "Akad Tanpa Siger",
      folder: "akadTanpaSiger",
      photos: getImages("akadTanpaSiger"),
    },
    Akad: {
      name: "Akad",
      folder: "makeUP-akad",
      photos: getImages("makeUP-akad"),
    },
    "beauty Shoot": {
      name: "Beauty Shoot",
      folder: "photo_grid",
      photos: getImages("photo_grid"),
    },
    Pesta: {
      name: "Pesta",
      folder: "pesta",
      photos: getImages("pesta"),
    },
    Wisuda: {
      name: "Wisuda",
      folder: "wisuda",
      photos: getImages("wisuda"),
    },
    "Pre Wedding": {
      name: "Pre Wedding",
      folder: "preWedding",
      photos: getImages("preWedding"),
    },
    Siraman: {
      name: "Siraman",
      folder: "siraman",
      photos: getImages("siraman"),
    },
    lamaran: {
      name: "Lamaran",
      folder: "lamaran",
      photos: getImages("lamaran"),
    },
    bridesmaid: {
      name: "Bridesmaid",
      folder: "bridesmaid",
      photos: getImages("bridesmaid"),
    },
    "kelas makeup": {
      name: "Kelas Makeup",
      folder: "kelas-makeup",
      photos: getImages("kelas_makeup"),
    },
    "makeup tari": {
      name: "Makeup Tari",
      folder: "makeup-tari",
      photos: getImages("makeup-tari"),
    },
  };

  return {
    categories,
    gridPatterns: ["grid-item-tall"],
  };
}

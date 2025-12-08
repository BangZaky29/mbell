import { getImages } from "./getImages";

export function loadPortfolioData() {
  return {
    categories: {
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
      natural: {
        name: "Natural",
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
    },
    gridPatterns: ["grid-item-tall"],
  };
}

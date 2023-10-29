import peledaAv from "../public/av/peleda.png";
import klykuoleAv from "../public/av/klykuole.png";
import danciasnapisAv from "../public/av/danciasnapis.png";

import peledaMain from "../public/mainImg/peleda.jpg";
import klykuoleMain from "../public/mainImg/klykuole.jpeg";
import klykuoleMainMot from "../public/mainImg/klykuolemot.jpeg";
import danciasnapisMain from "../public/mainImg/danciasnapis.jpeg";
// import kukutisMain from

import peledaText from "./assets/peleda";
import klykuoleText from "./assets/klykuole";

export default [
  {
    key: "1",
    title: "NAMINĖ PELĖDA",
    subTitle:
      "Strix aluco – tikrųjų pelėdų (Strigidae) šeimos naktinis plėšrus paukštis.",
    avatarImg: peledaAv,
    mainImg: [peledaMain],
    text: peledaText,
    files: ["../data/c1/1.webm"],

    imgUrl: "",
    x: 123,
    y: 123,
  },
  {
    key: "2",
    title: "KLYKUOLĖ",
    subTitle:
      "Bucephala clangula – žąsinių (Anseriformes) būrio paukštis. Aptinkama visoje Lietuvos teritorijoje.",
    avatarImg: klykuoleAv,
    mainImg: [klykuoleMain, klykuoleMainMot],
    text: klykuoleText,
    files: ["../data/c2/1.webm"],
    imgUrl: "",
    x: 356,
    y: 170,
  },
  {
    key: "3",
    title: "DIDYSIS DANČIASNAPIS",
    avatarImg: danciasnapisAv,
    mainImg: [danciasnapisMain],
    text: klykuoleText,
    inkilas: false,
    imgUrl: "",
    x: 300,
    y: 500,
  },
];

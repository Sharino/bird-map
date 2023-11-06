import peledaAv from "/av/peleda.png.webp";
import klykuoleAv from "/av/klykuole.png.webp";
import danciasnapisAv from "/av/danciasnapis.png.webp";

import peledaMain from "/mainImg/peleda.jpeg.webp";
import klykuoleMain from "/mainImg/klykuole.jpeg.webp";
import klykuoleMainMot from "/mainImg/klykuolemot.jpeg.webp";
import danciasnapisMain from "/mainImg/danciasnapis.jpeg.webp";
import danciasnapisMainMot from "/mainImg/danciasnapismot.jpeg.webp";
// import kukutisMain from

import peledaText from "./assets/peleda";
import klykuoleText from "./assets/klykuole";

const dev = true;

const dataPath = dev ? "../data" : "/var/www/html/data";

interface Conf {
  id: string;
  title: string;
  subTitle: string;
  avatarImg: string;
  mainImg: Array<string>;
  text: Array<any>;
  files?: Array<string>;
  inkilas?: boolean;
  imgUrl: string;
  x: number;
  y: number;
}

const conf: Array<Conf> = [
  {
    id: "1",
    title: "NAMINĖ PELĖDA",
    subTitle:
      "Strix aluco – tikrųjų pelėdų (Strigidae) šeimos naktinis plėšrus paukštis.",
    avatarImg: peledaAv,
    mainImg: [peledaMain],
    text: peledaText,
    files: [dataPath + "/c1/1.webm"],

    imgUrl: "",
    x: 123,
    y: 123,
  },
  {
    id: "2",
    title: "KLYKUOLĖ",
    subTitle:
      "Bucephala clangula – žąsinių (Anseriformes) būrio paukštis. Aptinkama visoje Lietuvos teritorijoje.",
    avatarImg: klykuoleAv,
    mainImg: [klykuoleMain, klykuoleMainMot],
    text: klykuoleText,
    files: [dataPath + "/c2/1.webm"],
    imgUrl: "",
    x: 300,
    y: 170,
  },
  {
    id: "3",
    title: "DIDYSIS DANČIASNAPIS",
    subTitle: "mergus merganser",
    avatarImg: danciasnapisAv,
    mainImg: [danciasnapisMain, danciasnapisMainMot],
    text: klykuoleText,
    inkilas: false,
    imgUrl: "",
    x: 120,
    y: 400,
  },
];

export default conf;

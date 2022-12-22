
import Portada from "../assets/IMG/portada-tenis.jpg";
import Babolat1 from "../assets/IMG/raqueta babolat pure aero.jpg";
import Babolat2 from "../assets/IMG/raqueta babolat pure drive tour.png";
import Wilson1 from "../assets/IMG/raqueta pro staff rf 97.jpeg";
import TuboPelotaWilson from "../assets/IMG/tubo de 4 pelotas champions wilson.webp"
import BallTubeBabolat from "../assets/IMG/tubo de pelotas tenis gold babolat.jpg"
import ShortWilson from "../assets/IMG/Short Wilson.jpg"
// import Mouse3 from "../assets/images/mouse_3.webp";

export const Items = [
  {
    id: "1", 
    name: "Raqueta Babolat Pure Aero",
    category: "raquets",
    description:
      "Raquet Description",
    stock: 5,
    price: 94999,
    img: Babolat1,
  },
  {
    id: "2",
    name: "Babolat Pure Drive Tour",
    category: "raquets",
    description: "Raquet Description",
    stock: 3,
    price: 94900,
    img: Babolat2,
  },
  {
    id: "3",
    name: "Raqueta Pro Staff RF ",
    category: "raquets",
    description: "Raquet description",
    stock: 7,
    price: 96199,
    img: Wilson1,
  },
  {
    id: "4",
    name: "Wilson Balls Tube",
    category: "balls",
    description: "Balls description",
    stock: 10,
    price: 3899,
    img: TuboPelotaWilson,
  },
  {
    id: "5",
    name: "Babolat Balls Tube",
    category: "balls",
    description: "Balls Description",
    stock: 10,
    price: 1000,
    img: BallTubeBabolat,
  },
  {
    id: "6",
    name: "Short Wilson",
    category: "shorts",
    description: "Short Description",
    stock: 6,
    price: 2500,
    img: ShortWilson,
  },
];
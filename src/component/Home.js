/** @format */

import React from "react";
import Banner from "../assets/banner.png";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="banner__wrapper">
        <img src={Banner} alt="banner" />
      </div>
      <div className="production-container">
        <Product
          image={
            "https://m.media-amazon.com/images/I/51ly5o5e9HL._AC_UY218_.jpg"
          }
          price={1399}
          id={223456}
          title={
            "Noise Buds VS103 - Truly Wireless Earbuds with 18-Hour Playtime, HyperSync Technology, Full Touch Controls and Voice Assistant (Pearl White)"
          }
          rating={4}
        />
        <Product
          image={
            "https://m.media-amazon.com/images/I/81lnTBGOt-L._AC_UL320_.jpg"
          }
          price={91950}
          id={323456}
          title={
            "Fujifilm X-E4 Mirrorless Camera Body with XF27mmF2.8 R WR Prime Lens- Black (Compact Body, X-Trans CMOS 4 Sensor, Fast AF, Face/Eye AF, 180° Tilting LCD Screen, EVF, 4K Video, test, Film Simulation Modes)"
          }
          rating={5}
        />
      </div>
      <div className="production-container">
        <Product
          image={
            "https://m.media-amazon.com/images/I/71QT7dSK4BL._AC_UY218_.jpg"
          }
          price={21999}
          id={123456}
          title={"Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage)"}
          rating={5}
        />
        <Product
          image={
            "https://m.media-amazon.com/images/I/41-5nd-r6bL._AC_UY218_.jpg"
          }
          price={199}
          id={423456}
          title={"PHILIPS HL1655/00 Hand Blender, 250W (White)"}
          rating={3}
        />
        <Product
          image={
            "https://m.media-amazon.com/images/I/712aGlIDuJL._AC_UL320_.jpg"
          }
          price={5999}
          id={523456}
          title={"Adidas Men's Daily 3.0 Walking Shoe"}
          rating={5}
        />
      </div>
      <div className="production-container">
        <Product
          image={
            "https://m.media-amazon.com/images/I/7160TtJzTWL._AC_UY218_.jpg"
          }
          price={39299}
          id={623456}
          title={
            "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black) (2021 Model)"
          }
          rating={4}
        />
      </div>
    </div>
  );
};

export default Home;

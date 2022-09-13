import React from "react";

import { client } from '../library/client'
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <div className="products-heading">
        <h2>Hot Item</h2>
        <p>Fire & Ice Grizzlies Thingy</p>
      </div>

      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;

import React from "react";

import { client } from '../library/client'
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner= {bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Hot Item</h2>
        <p>Fire & Ice Grizzlies Thingy</p>
      </div>

      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </div>
  );
};

export const getServerSideprops = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch;
  (bannerQuery)

  return{
    props: { products, bannerData}
  }

}

export default Home;

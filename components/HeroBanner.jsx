import React from "react";

import Link from "next/link";
import {urlFor} from 'next/link';

export default function HeroBanner({ heroBanner }) {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText}</h1>
      <img src={urlFor(heroBanner.image)} alt="Sale" className="hero_banner-image" />

      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
      </div>
      <div>
        <h5>Description</h5>
        <p>{heroBanner.desc}</p>
      </div>
    </div>
  );
}

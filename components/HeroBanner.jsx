import React from "react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">Small Text</p>
      <h3>MID TExt</h3>
      <img src="" alt="Profile" className="hero_banner-image" />

      <div>
        <Link href="/product/ID">
          <button type="button">BUTTON TEXT</button>
        </Link>
      </div>
      <div>
        <h5>Description</h5>
        <p>About Creator</p>
      </div>
    </div>
  );
}

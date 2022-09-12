import React from "react";

const Home = () => {
  return (
    <>
      Hero Banner
      <div>
        <h2>Hot Item</h2>
        <p>Fire & Ice Grizzlies Thingy</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>

      Footer
    </>
  );
};

export default Home;

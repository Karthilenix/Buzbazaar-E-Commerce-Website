import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">BuzzBazaar</span>{" "}
          Your Daily Dose of Shopping Inspiration!
Discover the latest trends, shopping tips, and lifestyle insights curated just for you. Our journal brings you fresh perspectives on smart shopping, product reviews, and expert recommendations to enhance your shopping experience.
What's Inside:

Trending Products Spotlight
Shopping Guides & Tips
Customer Success Stories
Style & Lifestyle Updates
Budget-Friendly Finds
Seasonal Must-Haves

Stay ahead of the curve and make informed buying decisions with our regularly updated articles. Whether you're a seasoned shopper or new to BuzzBazaar, our journal is your companion in the world of smart shopping.
📖 New Articles Every Week!
Subscribe to never miss an update.
          numquam voluptate!
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;

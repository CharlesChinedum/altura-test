import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "../components";
import img from "../assets/metaverse.png";

// const baseURL = "https://jsonplaceholder.typicode.com/photos?_limit=8";
const baseURL =
  "https://api.alturanft.com/api/v2/item?collectionAddress=0x78e99615063da7c12c247e6bc01240da00df77ae&slim=true";
const address = "0x78e99615063da7c12c247e6bc01240da00df77ae";

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: baseURL,
    })
      .then((res) => {
        setData(res.data.items);
        // console.log(res.data.items);
      })
      .then((error) => console.log(error));
  }, []);

  if (!data) return null;

  return (
    <div className="w-full relative mt-10">
      <div className="text-center">
        <h2 className="text-[4rem] md:text-[5rem] text-[#ec51b1]">
          Collections
        </h2>
        <p className="text-gray-400 text-sm">from {address}</p>
      </div>
      <div className="">
        <img
          src={img}
          alt=""
          className="absolute hidden md:block w-full  top-[20%] opacity-40"
        />
      </div>
      <div className="flex w-full justify-center px-5 md:px-5 flex-wrap gap-10 my-[5rem] items-center">
        {data.map((item, index) => (
          <Card
            key={index}
            description={item.collectionAddress}
            name={item.name}
            imageUrl={item.imageUrl}
            tokenId={item.tokenId}
            collectionAddress={item.collectionAddress}
            supply={item.supply}
            maxSupply={item.maxSupply}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

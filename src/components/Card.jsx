import React from "react";

import { ModalComponent } from "../components";

const Card = ({
  description,
  name,
  imageUrl,
  tokenId,
  collectionAddress,
  supply,
  maxSupply,
}) => {
  return (
    <div className="w-[20rem] hover:cursor-pointer">
      <div className="w-full card">
        <div className="flex items-center justify-center p-3">
          <div className="w-full">
            <img src={imageUrl} alt="" className="w-full rounded-[10px]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 pb-4">
          <h1 className="text-xl font-bold text-[#ec51b1]">{name}</h1>
          <p className="text-xs text-gray-400 break-words">{description}</p>
        </div>

        <div className="px-4 pb-3">
          <ModalComponent
            modalTitle={name}
            modalImg={imageUrl}
            tokenId={tokenId}
            collectionAddress={collectionAddress}
            supply={supply}
            maxSupply={maxSupply}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

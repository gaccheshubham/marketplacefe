import Link from "next/link";
import React from "react";
import Image from "next/image";
import Questlogo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="flex w-screen bg-[#04111d] px-[1.2rem] py-[0.8rem]">
        <div className="flex flex-row gap-10 flex-wrap justify-center md:justify-between">
          <div className="mb-7 flex max-w-md flex-col items-center space-y-7 md:items-start">
            <div className="flex flex-nowrap items-center text-center text-2xl">
              <div className="flex h-10 w-10 items-center justify-center">
                <div className="flex cursor-pointer items-center">
                  <Image src={Questlogo} height={40} width={60} />
                </div>
              </div>
              <div className="ml-[0.4rem] text-2xl font-semibold text-white">
                Questsea
              </div>
            </div>
            <div className="text-center text-base text-gray-300 md:text-left">
              QuestSea is the biggest NFT platform on Solana, introducing NFTs
              with embedded licenses, lowest trading fees, and real-time
              analytics from on-chain data.
            </div>
          </div>
          <div className="grid grid-cols-1 justify-center gap-20 md:grid-cols-4 md:justify-start">
            <div className="justify-center text-center md:justify-start md:text-left">
              <span className="text-base font-medium text-white">About</span>
              <ul className="mt-4 space-y-2 text-white">
                <li>About Us</li>
                <li>GitHub Repos</li>
              </ul>
            </div>
            <div className="justify-center text-center md:justify-start md:text-left">
              <span className="text-base font-medium text-white">Create</span>
              <ul className="mt-4 space-y-2 text-white">
                <li>Mint NFTs</li>
                <li>Mint Collection</li>
              </ul>
            </div>
            <div className="justify-center text-center md:justify-start md:text-left">
              <span className="text-base font-medium text-white">
                Community
              </span>
              <ul className="mt-4 space-y-2 text-white">
                <li>Discord</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className="justify-center text-center md:justify-start md:text-left">
              <span className="text-base font-medium text-white">Help</span>
              <ul className="mt-4 space-y-2 text-white">
                <li>Support</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

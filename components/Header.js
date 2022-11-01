import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Questlogo from '../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Wallet from './Wallet'
import Head from 'next/head'

const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.4rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `flex items-center text-white px-6 font-bold text-[#c8cacd] hover:text-white cursor-pointer text-2xl`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  }
  
  const Header = () => {
    return (
      <div>
        <Head>
        <title>Questsea | Marketplace for NFT's</title>
        
        <meta
          property="description"
          key="description"
          content="Discover, explore, and collect NFTs from incredible creators on Solana."
        />
        </Head>
        <div className={style.wrapper}>
        <Link href="/">
          <div className={style.logoContainer}>
            <Image src={Questlogo} height={40} width={60} />
            <div className={style.logoText}>Questsea</div>
          </div>
        </Link>
        <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input
            className={style.searchInput}
            placeholder="Search items, collections, and accounts"
          />
        </div>
          <div className={style.headerItem}> Explore </div>
          <div className={style.headerItem}> Create </div>
          <div className={style.headerItem}> <Wallet/> </div>
        </div>
      </div>
    )
  }

  export default Header;
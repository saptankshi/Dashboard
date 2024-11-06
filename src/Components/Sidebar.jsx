import React, { useState } from 'react';
import Logo from './Logo';
import MenuItem from './MenuItem';
import UserProfile from './UserProfile';

const menuItems = [
  { icon: "/assets/icon.png", label: "Dashboard", isActive: true, style:'bg-[#ffffff] rounded-2xl  mt-3 w-[50%]' },
  { icon: "/assets/wallet.png", label: "My Wallet" },
  { icon: "/assets/trans.png", label: "Transactions" },
  { icon: "/assets/crypto.png", label: "Crypto" },
  { icon: "/assets/msg.png", label: "Messages" },
  { icon: "/assets/exchange.png", label: "Exchange" },
];

const generalItems = [
  { icon: "/assets/setting.png", label: "Settings" },
  { icon: "/assets/security.png", label: "Security" },
];

function Sidebar({ isOpen }) {
    return (
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-[#111111] border border-solid bg-neutral-900 border-neutral-800 z-50 
          transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:w-64 lg:fixed lg:flex`}
      >
        <div className="flex flex-col w-full font-semibold">
          <Logo />
          <div className="self-start mt-4 ml-6 text-xs text-neutral-400">
            MENU
          </div>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
          <div className="px-6 py-4 mt-4 text-xs whitespace-nowrap bg-black bg-opacity-0 text-neutral-400">
            GENERAL
          </div>
          {generalItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
          <UserProfile />
        </div>
      </nav>
    );
  }
  
  export default Sidebar;
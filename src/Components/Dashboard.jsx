import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Logo from './Logo';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-full bg-[#111111]">
      <header className="w-full flex justify-between items-center p-4 bg-[#111111] lg:hidden">
        <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <h1 className="text-white"><Logo/></h1>
      </header>
      
      <div className="flex w-full">
        {isSidebarOpen && window.innerWidth < 1024 && (
          <div 
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        
        <Sidebar isOpen={isSidebarOpen} />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';

function Header() {
  return (
    <header data-layername="groups" className="flex relative overflow-hidden flex-wrap gap-5 justify-between lg:mt-3 mt-1 pr-2.5 pb-2.5 border-b solid border-neutral-800 pl-6 max-w-full font-semibold bg-black bg-opacity-0 w-[100%] max-md:pl-5">
      <div className="flex gap-4 items-center">
        <img loading="lazy" src="/assets/arrow.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.5]" />
        <div data-layername="dashboard" className="self-stretch lg:ml-0 lg:mb-3 ml-4 mb-4 my-auto text-sm text-zinc-400">
          Dashboard
        </div>
        <div data-layername="text" className="flex flex-col justify-center self-stretch p-1 text-xs bg-black bg-opacity-0 text-neutral-700">
          <div data-layername="background" className="flex gap-5 justify-between items-start p-3 rounded-2xl border border-solid bg-neutral-900 border-zinc-800">
            <label htmlFor="search" className="sr-only">Search</label>
            <input
              type="text"
              id="search"
              placeholder="Search anything in cupivupi.."
              className="my-auto bg-transparent border-none focus:outline-none text-neutral-700"
            />
            <img loading="lazy" src="/assets/noti.png" alt="Search" className="object-contain shrink-0 self-start w-2.5 aspect-square" />
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 items-center self-start text-xs text-neutral-400">
        <img loading="lazy" src="/assets/search.png" alt="Notification" className="object-contain shrink-0 cursor-pointer self-stretch my-auto aspect-[0.97] w-[31px]" />
        <img loading="lazy" src="/assets/user.png" alt="User profile" className="object-contain shrink-0 cursor-pointer self-stretch my-auto aspect-[0.97] w-[31px]" />
        <button data-layername="button" className="flex flex-col justify-center self-stretch py-1 bg-black bg-opacity-0">
          <div data-layername="background" className="flex gap-2 px-3.5 py-3 mr-10 cursor-pointer rounded-2xl border border-solid bg-stone-950 border-zinc-800">
            <span data-layername="addNewCoin">Add new coin</span>
            <img loading="lazy" src="/assets/plus.png" alt="" className="object-contain shrink-0 aspect-square w-[11px]" />
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
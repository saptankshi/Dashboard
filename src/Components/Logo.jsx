import React from 'react';

function Logo() {
  return (
    <header data-layername="groups" className="flex gap-0.5  px-1 lg:px-5 pt-3 pb-5 whitespace-nowrap bg-black bg-opacity-0">
      <div data-layername="cupi" className="self-start text-lg text-stone-300">
        cupi
      </div>
      <div data-layername="vupi" className="grow shrink text-base text-lime-700 w-[48px] lg:w-[98px]">
        vupi.
      </div>
    </header>
  );
}

export default Logo;
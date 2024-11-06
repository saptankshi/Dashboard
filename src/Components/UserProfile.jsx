import React from 'react';

function UserProfile() {
  return (
    <div data-layername="groups" className="flex flex-col border-t solid border-neutral-800 px-3.5 pt-1 pb-4 mt-36 w-full bg-black bg-opacity-0 max-md:mt-10">
      <div className="flex gap-5 cursor-pointer mt-2.5">
        <div className="flex gap-1.5">
          <img loading="lazy" src="/assets/profile.png" alt="User avatar" className="object-contain shrink-0 aspect-square w-[27px]" />
          <div className="flex flex-col my-auto">
            <div data-layername="erickTohir" className="self-start text-xs text-neutral-400">
              Erick Tohir
            </div>
            <div data-layername="erikabubumGmail" className="mt-2.5 text-xs text-zinc-700">
              erikabubum@gmail.com
            </div>
          </div>
        </div>
        <img loading="lazy" src="/assets/arrowl.png" alt="" className="object-contain shrink-0 my-auto aspect-square w-[11px]" />
      </div>
    </div>
  );
}

export default UserProfile;
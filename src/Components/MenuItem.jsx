import React from 'react';

function MenuItem({ icon, label, notification, isActive, style }) {
  return (
    <div
      data-layername="groups"
      className={`flex gap-2 px-6 ml-3 py-3  text-xs whitespace-nowrap ${
        isActive ? style : 'bg-opacity-0'
      } text-neutral-600 max-md:px-5`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 cursor-pointer aspect-square max-w-[20px] w-[15px]"
      />
      <div data-layername={label.toLowerCase().replace(' ', '')} className=" cursor-pointer shrink my-auto">
        {label}
      </div>
      {notification && (
        <img
          loading="lazy"
          src={notification}
          alt="Notification"
          className="object-contain shrink-0 cursor-pointer aspect-[1.31] w-[25px]"
        />
      )}
    </div>
  );
}

export default MenuItem;

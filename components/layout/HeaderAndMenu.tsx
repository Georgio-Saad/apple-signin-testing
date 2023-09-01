'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { MdClose, MdMenu } from 'react-icons/md';

export default function HeaderAndMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDrawerOpen]);

  return (
    <div>
      <Header onClickMenu={() => setIsDrawerOpen(true)} />
      {isDrawerOpen && (
        <div className="h-screen w-screen bg-background bg-opacity-25 absolute">
          <div
            ref={drawerRef}
            className="h-screen w-[450px] left-[-450px] bg-background shadow-xl"
          >
            <div className="h-8" />
            <MdClose
              onClick={() => setIsDrawerOpen(false)}
              className="text-onBackground ml-5 self-end hover:cursor-pointer"
              size={30}
            />
          </div>
        </div>
      )}
    </div>
  );
}

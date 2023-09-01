'use client';

import React from 'react';
import HeaderSigninButton from '../UI/HeaderSigninButton';
import { MdMenu } from 'react-icons/md';

type HeaderProps = {
  onClickMenu?: () => void;
};

export default function Header({ onClickMenu }: HeaderProps) {
  return (
    <div className="fixed justify-between bg-gradient-to-br from-background to-primary w-full h-24 flex items-center">
      <MdMenu
        onClick={onClickMenu}
        className="text-onBackground ml-5 hover:cursor-pointer"
        size={30}
      />
      <HeaderSigninButton />
    </div>
  );
}

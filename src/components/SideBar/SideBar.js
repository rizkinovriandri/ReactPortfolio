import React from 'react';

import Avatar from '../Avatar/Avatar';
import MainMenu from '../MainMenu/MainMenu';

import './SideBar.css';

const menu = ['about', 'experience', 'education', 'skills', 'interest', 'awards'];

const SideBar = () => {
  return (
    <div className="sidebar">
      <Avatar url="https://cdn1.iconfinder.com/data/icons/avatar-vol-9/512/3-256.png"/><br/>
      <MainMenu className="mainmenu"  txtMenu = {menu}/>
      
    </div>
  );
}

export default SideBar;
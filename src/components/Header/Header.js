import React from 'react';
import logo from '../../images/logo.svg';
import socialTg from '../../images/social_telegram.svg';
import socialInst from '../../images/social_insta.svg';
import socialVk from '../../images/social_vk.svg';

import './Header.css'

function Header() {
  return (
    <header className="header">
      <a href='#'><img className="header__logo" src={logo} alt="Логотип"></img></a>
      <div className="contacts__container">
        <div className="header__contacts">
          <span className="contacts__number">+7 777 777 77 77</span>
          <a className="contacts__link" target="_blank" href="https://link_to_tg">
            <img className="contacts__icon" src={socialTg} alt="Телеграм"></img>
          </a>
          <a className="contacts__link" target="_blank" href="https://link_to_inst">
            <img className="contacts__icon" src={socialInst} alt="Инстаграм"></img>
          </a>
          <a className="contacts__link" target="_blank" href="https://link_to_vk">
            <img className="contacts__icon" src={socialVk} alt="ВКонтакте"></img>
          </a>
        </div>
        <span className="header__span">Задайте интересующий вопрос</span>
      </div>
    </header>
  );
}

export default Header;
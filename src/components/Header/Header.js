import React from 'react';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <a href='#'><img className="header__logo" src={logo} alt="Логотип"></img></a>
      <div className="header__contacts">
        <span className="header__contacts">Задайте интересующий вопрос</span>
        <span className="contacts contacts_number">+7 777 777 77 77</span>
        <a className="contacts contacts_tg" target="_blank" href="https://link_to_tg">@link_to_tg</a>
        <a className="contacts contacts_inst" target="_blank" href="https://link_to_inst">@inst</a>
      </div>
    </header>
  );
}

export default Header;
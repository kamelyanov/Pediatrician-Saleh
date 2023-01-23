import './NavBar.css'

function NavBar () {
  return ( 
    <section className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">Обо мне</li>
        <li className="navbar__link">Забота о здоровье</li>
        {/* <li className="navbar__link">Отзывы</li>   */}
        <li className="navbar__link">Контакты</li>
      </ul>
    </section>
  );
};

export default NavBar;
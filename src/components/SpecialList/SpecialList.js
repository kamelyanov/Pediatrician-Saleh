import './SpecialList.css';
import me from '../../images/me.jpg'

function SpecialList ( ) {

  return (
    <section className="specialSection">
        <ul className="special_cards">

        <li className="special_card">
            <div className="card__container"> 
              <h3 className="card__title">Заголовок карточки</h3> 
              <img src={me} className="card__image" alt="Моя фотография"></img> 
              <p className="card__description">Текст карточки тут что-то интересное типа там в тг на несколько строк</p>
              <button>Читать дальше =></button> 
              {/* тут открыватьеся попап с полным текстом и там же где-то должна быть кнопка поделиться в соцсети */}
            </div>
          </li>

          <li className="special_card">
            <div className="card__container"> 
              <h3 className="card__title">Заголовок карточки</h3> 
              <img src={me} className="card__image" alt="Моя фотография"></img> 
              <p className="card__description">Текст карточки тут что-то интересное типа там в тг на несколько строк</p>
              <button>Читать дальше =></button> 
              {/* тут открыватьеся попап с полным текстом и там же где-то должна быть кнопка поделиться в соцсети */}
            </div>
          </li>

          <li className="special_card">
            <div className="card__container"> 
              <h3 className="card__title">Заголовок карточки</h3> 
              <img src={me} className="card__image" alt="Моя фотография"></img> 
              <p className="card__description">Текст карточки тут что-то интересное типа там в тг на несколько строк</p>
              <button>Читать дальше =></button> 
              {/* тут открыватьеся попап с полным текстом и там же где-то должна быть кнопка поделиться в соцсети */}
            </div>
          </li>

                    <li className="special_card">
            <div className="card__container"> 
              <h3 className="card__title">Заголовок карточки</h3> 
              <img src={me} className="card__image" alt="Моя фотография"></img> 
              <p className="card__description">Текст карточки тут что-то интересное типа там в тг на несколько строк</p>
              <button>Читать дальше =></button> 
              {/* тут открыватьеся попап с полным текстом и там же где-то должна быть кнопка поделиться в соцсети */}
            </div>
          </li>

        </ul>
    </section>
  );
};

export default SpecialList;
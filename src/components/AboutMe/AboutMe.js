import './AboutMe.css';
import me from '../../images/me.jpg'

function AboutMe () {
  return (
    <section className="aboutMe">
      <div className="aboutMe__description">
        <div className="aboutMe__info">
          <h2 className="aboutMe__name">Консультации и лечение</h2>
          <h3 className="aboutMe__speciality">Педиатр-</h3>
          <p className="aboutMe__history">
            Текст на пару абзацев про меня, достижения и все такое важное и интересное 
            типа училась там-то помогаю этим и тем, и все такое интересное.Текст на пару
            абзацев про меня, достижения и все такое важное и интересное типа училась там-т
            о помогаю этим и тем, и все такое интересное.Текст на пару абзацев про меня, дос
            тижения и все такое важное и интересное типа училась там-то помогаю этим и тем, и 
            все такое интересное. и все такое важное и интересн
          </p>
        </div>
      </div>
      <img src={me} className="aboutMe__foto" alt="Моя фотография"></img>
    </section>
  );
};

export default AboutMe;
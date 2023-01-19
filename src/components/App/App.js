import './App.css';

import Header from "../Header/Header";
import NavBar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';

function App() {
  return (
    <section className="page">
      <Header/>
      <NavBar/>
      <AboutMe/>
    </section>
  );
};

export default App;

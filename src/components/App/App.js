import './App.css';

import Header from "../Header/Header";
import NavBar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import SpecialList from '../SpecialList/SpecialList';


function App() {
  return (
    <section className="page">
      <Header/>
      <NavBar/>
      <AboutMe/>
      <SpecialList/>
    </section>
  );
};

export default App;

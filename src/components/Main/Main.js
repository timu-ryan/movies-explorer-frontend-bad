import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio'

const Main = () => {
  return (
    <div>
      <Promo />
      {/* <NavTab /> */}
      <AboutProject id='about-project' />
      <Techs id='techs' />
      <AboutMe id='about-me' />
      <Portfolio />
    </div>
  )
}

export default Main
import classes from './UX_Principles.module.css';
import React,{Fragment} from 'react';
import Header from './Header/Header';


// import "./style.css"
// import Footer from './Footer';
// import Images from './Images';
import InactiveCards from './InactiveCards/InactiveCards';
import Section from './Section/Section';
import ActiveCard from './ActiveCard/ActiveCardContent';

const UX_Principles = () =>{
    document.body.style.backgroundColor = "#ffffff";
  return (
    <Fragment>
        <div className={classes.wrapper}>
        <Header />
        <Section />
        </div>
        <InactiveCards />
        <ActiveCard card_title="01 Ясность / Очевидность"
                    card_text="UX - процесс определения проблем пользователя и решение этих проблем с целью повышения его удовлетворенности. Улучшение взаимодействия между пользователем и приложением на пути пользователя к цели."/>
    </Fragment>
  );
}



export default UX_Principles;

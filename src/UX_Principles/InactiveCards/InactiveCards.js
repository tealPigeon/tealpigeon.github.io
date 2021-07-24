import React from 'react';

import classes from "./InactiveCards.module.css"
import arrow_left from "./arrow_left.svg";
import arrow_right from "./arrow_right.svg";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const InactiveCards = () =>
{
  return (
    <div className={classes.cards}>
      <img id="arrow_left" style={{marginRight: '40px'}} className={classes.arrow} src={arrow_left} />
      <LeftCard />
      <RightCard />
      <img id="arrow_right" style={{marginLeft: '40px'}} className={classes.arrow} src={arrow_right} />
    </div>
  );
}

export default InactiveCards;
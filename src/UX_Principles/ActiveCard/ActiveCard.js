import React, {Fragment} from 'react';
import classes from "./ActiveCard.module.css"
import ActiveCardContent from './ActiveCardContent';

const ActiveCard = (props) =>
{
  return (
      <Fragment>
        <ActiveCardContent id={"active_card"}/>
      </Fragment>
  );
}

export default ActiveCard;
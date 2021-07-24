import React, {Fragment} from 'react';
import classes from "./ActiveCardContent.module.css"
import image from "./image_for_card.svg";
// import ActiveCardListContent from './ActiveCardListContent';
import classes1 from "./ActiveCardListContent.module.css"

const ActiveCardListContent = (props) =>
{
  return (
      <Fragment>

        <div className={classes1.active_card_list_title}>Как добиться:</div>
        <ol>
          <li>Недвусмысленные формулировки</li>
          <li>Ссылки ведут себя как ссылки</li>
          <li>Что-то еще </li>
        </ol>
      </Fragment>
  );
}


let titles=["01 Ясность / Очевидность", "02 Последовательность / Консистентность","03 Инклюзивность", "04 Иерархия"]

let contents =[{
    id: 1,
    title: "01 Ясность / Очевидность",
    text: "UX - процесс определения проблем пользователя и решение этих проблем с целью повышения его удовлетворенности. Улучшение взаимодействия между пользователем и приложением на пути пользователя к цели. "
},
  {
    id: 2,
    title: "02 Последовательность / Консистентность",
    text: "dfqertghjk"
  },
  {
    id: 3,
    title: "03 Инклюзивность",
    text: "dfgrqqqqehjk"
  },
  {
    id: 4,
    title: "04 Иерархия",
    text: "dfgh23456789jk"
  },

  ];

const ActiveCardContent = (props) =>
{
  return (
    <div className={classes.active_card} onClick={click}>
    <div id="title" className={classes.active_card_title}>
      {/*{titles[num]}*/}
      {props.card_title}
      {/*01 Ясность / Очевидность*/}
    </div>
    <div id="text" className={classes.active_card_text}>
      {props.card_text}
      {/*UX - процесс определения проблем пользователя и решение этих проблем с целью повышения его удовлетворенности. Улучшение взаимодействия между пользователем и приложением на пути пользователя к цели. */}
      <ActiveCardListContent />
      <img className={classes.image_for_active_card} src={image} />

    </div>
  </div>
  );
}

let num=0;
function click()
{
  num++;
  console.log(num%4);
  document.getElementById("title").innerHTML= contents[num%4].title;
  document.getElementById("text").innerHTML= contents[num%4].text;

  // console.log(contents[num].title);
  // console.log(contents[num].text);
}

export default ActiveCardContent;
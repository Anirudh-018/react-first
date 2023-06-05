import { useState } from "react";
import Time from "./Time";
import { contents } from "../App";
function Content(props) {
  const content=contents;
  var val=parseInt(content[props.index].time_limit[14])
  const [hrs,setTime]=useState(val);
  function increaseTime(){
    setTime(hrs+1);
  }
  function decreaseTime(){
    setTime(hrs-1);
  }
  return (
    <div>
      <h2>{content[props.index].name}</h2>
      <h4>{content[props.index].time_limit}</h4>
      <Time time={hrs} onIncrease={increaseTime} onDecrease={decreaseTime}/>
    </div>
  );
}

export default Content;

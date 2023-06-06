function Time(props) {
  return (
    <div className="time">
      <button className="btn" onClick={props.onIncrease}>
        -
      </button>
      <p style={{paddingRight:15}}>{props.time}</p>
      <button className="btn" onClick={props.onDecrease}>
        +
      </button>
    </div>
  );
}

export default Time;

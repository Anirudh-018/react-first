const content = [
  { name: "complete tasks", time_limit: "time limit is 8 hrs" },
  { name: "go to gym", time_limit: "time limit is 1.5 hrs" },
];
function Content(props) {
  return (
    <div>
      <h2>{content[props.index].name}</h2>
      <h4>{content[props.index].time_limit}</h4>
    </div>
  );
}

export default Content;

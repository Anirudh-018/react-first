function Deleter(props) {
  function show() {
    props.toggler();
  }
  function handle() {
    props.deleter();
  }
  return (
    <div className="actions" onChange={show}>
      <button className="btn" onClick={handle}>
        delete
      </button>
    </div>
  );
}
export default Deleter;
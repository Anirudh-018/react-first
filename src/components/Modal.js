function Modal(props) {
  function cancel(){
    props.onCancel();
  }
  function confirm(){
    props.onConfirm();
  }
  return (
    <div className="modal">
      <h3>are u sure?</h3>
      <button className="btn btn--alt" onClick={cancel}>cancel</button>
      <button className="btn" onClick={confirm}>confirm</button>
    </div>
  );
}
export default Modal;

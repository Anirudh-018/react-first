import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Content from "./Content";
import Deleter from "./Deleter";
function Todo(props) {
  //returns value and the state chane function
  const [showModal, setModalOpen] = useState(false);
  const [showDiv, setShow] = useState(true);
  const [complete, setComplete] = useState(props.completed);
  //   const ele=document.getElementById("demo");
  //   ele.remove();
  function deleteHandler() {
    setModalOpen(true);
  }

  function closeHandler() {
    setModalOpen(false);
  }

  function deleteButton() {
    setShow(false);
    setModalOpen(false);
  }
  function completeTask() {
    setComplete(true);
  }
  return (
    <div>
      {showDiv ? (
        <div
          className="card"
          style={{ backgroundColor: complete ? "green" : "white" }}
        >
          <Content index={props.index} />
          <div className="button-container">
            <button className="btn" onClick={completeTask}>
              completed
            </button>
            <Deleter toggler={setShow} deleter={deleteHandler} />
          </div>
          {showModal ? (
            <Modal onCancel={closeHandler} onConfirm={deleteButton} />
          ) : null}
          {showModal ? <Backdrop onClick={closeHandler} /> : null}
        </div>
      ) : null}
    </div>
  );
}

export default Todo;

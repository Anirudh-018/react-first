import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Content from "./Content";
import Deleter from "./Deleter";
function Todo(props) {
  //returns value and the state chane function
  const [showModal, setModalOpen] = useState(false);
  const [showDiv, setShow] = useState(true);
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
  return (
    <div>
      {showDiv?<div className="card" >
      <Content index={props.index} />
        <Deleter toggler={setShow} deleter={deleteHandler} />
        {showModal ? (
          <Modal onCancel={closeHandler} onConfirm={deleteButton} />
        ) : null}
        {showModal ? <Backdrop onClick={closeHandler} /> : null}
      </div>:null}
    </div>
  );
}

export default Todo;

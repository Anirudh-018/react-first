import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Content from "./Content";
function Todo(props) {
  //returns value and the state chane function
  const [showModal, setModalOpen] = useState(false);
//   const ele=document.getElementById("demo");
//   ele.remove();
  function deleteHandler() {
    setModalOpen(true);
  }

  function closeHandler(){
    setModalOpen(false);
  }
  return (
    <div className="card">
    <Content index={props.index}/>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          delete
        </button>
      </div>
      {showModal ? <Modal onCancel={closeHandler} onConfirm={closeHandler}/> : null};
      {showModal?<Backdrop onClick={closeHandler}/>:null};
    </div>
  );
}

export default Todo;

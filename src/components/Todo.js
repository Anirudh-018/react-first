import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  //returns value and the state chane function
  const [showModal, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function closeHandler(){
    setModalOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
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

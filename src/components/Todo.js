function Todo(props){
    function deleteHandler(){
        console.log("clicked");
    }
    return (
        <div className="card">
          <h2>{props.title}</h2>
          <button className="btn" onClick={deleteHandler}>delete</button>
        </div>
    );
}

export default Todo;
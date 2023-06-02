import Todo from "./components/Todo";
import Modal from "./components/Modal";
function App() {
  return <div>
    <h1>to do</h1>
    <Todo title='complete tasks'/>
    <Todo title='go to gym'/>
    <Modal />
  </div> ;
} 

export default App;

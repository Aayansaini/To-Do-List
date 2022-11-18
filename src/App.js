import { useState } from "react";
import TODOList from './TODOList';
import "./App.css";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems)=> {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItems =(id) =>{
    console.log("deleted")
    setItems((oldItems)=> {
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      });
    });
}

  return (
    <>
        <div className="center_div">
          <br />
          <h1> To-Do-LIST</h1>
          <br />
          <input type="text" placeholder="Add Task..." onChange={itemEvent}
          value={inputList} />
          <button onClick={listofItems}> + </button>
          <ol>

             {items.map((itemval, index) => {
              return <TODOList 
              key={index} 
              id={index} 
              text={itemval}
              onselect={deleteItems}/>;
             })}
          </ol>
        </div>
        <div class="last_style">
            <p><span> Hustle </span> On <span> Task </span> <span></span></p>
            <p id="gg">Note:- Add 10 Task Everyday !</p>
            <h5><b><span>WEB DEVELOPER</span></b></h5>
        </div>
    </>
  );
};

export default App;

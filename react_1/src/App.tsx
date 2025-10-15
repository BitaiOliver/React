//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button1 from "./components/Button";


function App() {
 // let Cities = ['Arad', 'Timisoara', 'Buteni', 'Vadasu'];
 // const handleSelection = (item: string) => (console.log(item));

  //return <div><Message></Message></div> Explicit closing
 // return <div><ListGroup items={Cities} heading="Cities list" onSelectItem={handleSelection}/></div>; //self closing

 const [alertVisibility, setAlertVisibility] = useState(false); // create state and initialize value to FALSE
 
 return (
  <div>

    {alertVisibility && <Alert onClose={()=>setAlertVisibility(false)}> xxx </Alert>}

    <Button1
      //onClick={()=>{console.log("Clicked")}}
      onClick={() =>{ setAlertVisibility(true)}}
      color="danger"
    >
      My button</Button1>
  </div>
 );
}

export default App;
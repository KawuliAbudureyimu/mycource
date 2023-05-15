//import { useState } from "react";
//import Button from "./components/Button";
//import Alert from "./components/alert";


import ListGroup from "./components/ListGroup/ListGroup";
import './App.css'


function App() {

 // const [alertVisiable , setAlertVisiablity] = useState(false)
 const items = ["New york", "Istanbul", "Urumqi","Tokyo"];

  return (
    <>
   <div>
   < ListGroup heading ="Miami" items={items} onSelectItem={() => {}} />
    </div>
    {/*    
  <div>
    { alertVisiable && <Alert>its wrong</Alert>}
    <Button color="yellow" onClick={() => setAlertVisiablity(true)}>My Button</Button>

  </div>*/}
</>

  );
}

export default App;




import ListGroup from './Components/ListGroup';
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState} from "react";

function App(){

  let items = ['New York','San Fransisco','Tokyo','London','Paris'];
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {console.log(item)};
  return (
  <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert> }
    <Button color="secondary" onClick={() => setAlertVisibility(true)}>My Button</Button>
  </div>
  );
}
  export default App; 

 

  




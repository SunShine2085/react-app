import ListGroup from './Components/ListGroup';
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App(){
  let items = [
    'New York',
    'San Fransisco',
    'Tokyo',
    'London',
    'Paris'
];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (<div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <Alert>
      Hello <span>World</span>
    </Alert> 
    <Button color="secondary" onClick={() => console.log('Clicked')}>My Button</Button>
       </div>
  );
}
  export default App; 

 

  




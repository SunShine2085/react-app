import ListGroup from './Components/ListGroup';

function App(){
  let items = [
    'New York',
    'San Fransisco',
    'Tokyo',
    'London',
    'Paris'
];
  return (<div>
    <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App; 
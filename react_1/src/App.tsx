import ListGroup from "./components/ListGroup";


function App() {
  let Cities = ['Arad', 'Timisoara', 'Buteni', 'Vadasu'];
  const handleSelection = (item: string) => (console.log(item));

  //return <div><Message></Message></div> Explicit closing
  return <div><ListGroup items={Cities} heading="Cities list" onSelectItem={handleSelection}/></div>; //self closing
}

export default App;
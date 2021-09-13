//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Worldwww!</h1>
      <CardComponent text={"producto 1"}/>
    </div>
  );
}
const CardComponent=(props)=>{
  return(
    <div>
      <p>{props.text}</p>
    </div>
  )
}
export default App;

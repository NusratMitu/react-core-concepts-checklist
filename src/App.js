import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Blogs title='JS' author= 'N Jahan'></Blogs>
      <Blogs title='React' author= 'Mitu'></Blogs> */}
      <Mobile></Mobile>
      <GetToDo></GetToDo>
    </div>
  );
}

const GetToDo = () => {
  const [toDos, setToDos]= useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( res => res.json())
    .then( data => setToDos(data))
  },[])
  return (
    toDos.map( todo => <DisplayToDo title={todo.title} status ={todo.completed}></DisplayToDo> )
  );
} 
const DisplayToDo = (props) => {
  let isCompleted;
  if(props.status){
  isCompleted = 'true'
  }
  else{
    isCompleted = 'false'
  }
  const styleToDo = {
    border: '1px solid sienna',
    padding: '10px',
    margin: '20px 200px'
  }
  return (
    <div style={styleToDo}>
    <h2>Title: {props.title}</h2>
    <p>Completed: {isCompleted}</p>
    </div>
    );
}
const Mobile = () =>{
  const [chargeCount, setCharge ] = useState(91);
  const chargeDecrease = () =>{
    if(chargeCount > 9){
      setCharge(chargeCount - 10)
    }
  }
  return (
    <div>
        <h4>Charge: {chargeCount}% </h4>
        <button onClick={chargeDecrease}>Battery down</button>
    </div>
  )
}
export default App;

/* 
function Blogs(props){
  const styleArticle = {
      border: '1px solid sienna',
      padding: '10px',
      margin: '20px'
  };
  return(
    
    <div  className='blog'>
      <article style={styleArticle}>
        <h2> <span style={{color:'white', backgroundColor:'sienna', padding:'10px'}}> Title:{props.title}</span></h2>
        <h5>Author: {props.author}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni odit molestias aut inventore alias, facilis pariatur est animi quam autem, ipsam maxime dicta amet exercitationem vel? Ullam aliquid cumque, ut iste earum voluptatibus eos doloremque natus nihil consequuntur voluptatum temporibus at, pariatur sunt tempora libero, odit eligendi nesciunt nemo.</p>
      </article>
    </div>
  )
} 
*/
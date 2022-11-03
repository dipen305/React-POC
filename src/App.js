import Footer from './Footer';
import Header from './Header'
import Table from './Table';
import UserForm from './UserForm'
import logo from './Images/icon-72x72.png'
import { userData } from './mockData';
import { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Todo from './Todo';
function App() {
    let [user,setUser] =  useState(false);

    
    const users = userData;
    const car = {
        brand: 'Tata',
        name: 'Nexon',
        type: 'SUV',
        capacity: '5',
        color: 'red'
    }
    let [todos,setTodos] = useState([
        { task: "HTML I", done: true, id: 1 },
        { task: "CSS", done: true, id: 2 },
        { task: "Responsive design", done: true, id: 3 },
        { task: "Git", done: true, id: 4 },
        { task: "J̦avaScript I", done: true, id: 5 },
        { task: "JavaScript II", done: false, id: 6 },
        ]);
    const color = ['red', 'green', 'yellow'];
    function changeStatus(){
        setUser(!user);
    }
    function deleteTodo(id){
        setTodos(todos.filter(data=>data.id!==id));
        console.log("Deleting Todo with id : ", id);
    }

    function test(){
        console.log("test executed from app component");
    }
    let InlineStyle = {color:'white',marginTop:'10px',backgroundColor:'red'}
    return (
        <>
    {todos.map((todo)=><Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}

        <UserForm />
        {user?<Login/>:<Logout/>}
        <button onClick={changeStatus}>Change Status</button>
        <img src={logo} alt="logo"></img>
        <Table test={test} tableData={users}/>
            <br/>
            {color.map(color=><span key={color}>{color + ' '}</span>)}
            <Header />
            <h1>Hello World from App Component!</h1>
            <h1 style={InlineStyle}>Inline Style!</h1>
            <p> Brand : {car.brand}</p>
            <p> Model : {car.name}</p>
            <p> Type : {car.type}</p>
            <p> Capacity : {car.capacity}</p>
            <p> Color : {car.color}</p>
            <Footer />
        </>
    );
}

export default App;


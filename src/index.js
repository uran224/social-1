import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message:"Hey, how are you getting on, asshole?", likesCount: "100500"},
    {id: 2, message:"This is the second post!", likesCount: "20"},
    {id: 3, message:"Asshole!", likesCount: "10"},
    {id: 4, message:"This is the fdsfdssd", likesCount: "111"}
 
]; 

let dialogs = [
    {id: 1, name: 'Jim'},
    {id: 2, name: 'Marta-Marta'},
    {id: 3, name: 'Peter II'},
    {id: 4, name: 'Carol'},
    {id: 5, name: 'Ursula'}
]; 

let messages = [
    {id: 1, text:'Hi, how are you!'},
    {id: 2, text:'Hi, shit asshole!'},
    {id: 3, text:'How are you getting on?'},
    {id: 4, text:'Yo'},
    {id: 5, text:'Yo'}
];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

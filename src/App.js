import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {

/*   
  let dialogs = [
    {id: 1, name: 'Jim'},
    {id: 2, name: 'Marta'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'Carol'},
    {id: 5, name: 'Ursula'}
  ]; 

  let messages = [
    {id: 1, text:'Hi, how are you!'},
    {id: 2, text:'Hi, asshole!'},
    {id: 3, text:'How are you getting on?'},
    {id: 4, text:'Yo'},
    {id: 5, text:'Yo'}
  ];
*/


 return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />  */}
          {/* what is the "exact path" */}
          
          <Route path="/profile" render={ () => <Profile posts={props.posts}  /> } />
          <Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}  /> } /> 
          
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;

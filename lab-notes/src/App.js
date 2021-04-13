import React,{useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import {Welcome} from './components/welcome/Welcome'
import {Register} from './components/register/Register'
import {Categories} from './components/categories/Categories';
import { MyNotes } from './components/myNotes/MyNotes';
// import {Navbar} from './components/navbar/Navbar'
// import {MyNotes} from './components/myNotes/MyNotes'
// import {Notes} from './components/notes/Notes'

function App() {
  const [note, setNote] = useState()

  const handleSetNote=(title,text)=>{
    setNote({title,text})
}
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Welcome />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path='/my-notes'>
            <div className="myNotes">
              <MyNotes
              handleSetNote={handleSetNote}
              />
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//         <MyNotes />
//         <Notes />
//         <Notes />
//         <Notes />
//         <Notes />
//         <Notes />
//     </div>
//   );
// }

// export default App;
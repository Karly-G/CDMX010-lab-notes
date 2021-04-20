import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import './firebase'
import {Home} from './components/home/Home'
import {Register} from './components/register/Register'
import {Categories} from './components/categories/Categories';
import { Notes } from './components/notes/Notes';


function App() {

  return (
    <Router>
        <Switch>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

// import './App.css';

// import { Notes } from './components/notes/Notes';

// function App() {
//   return (
//     <div>
//       <Notes/>
//     </div>
//   );
// }

// export default App;

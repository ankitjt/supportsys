import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MemberHome from './components/Users/member/MemberHome';
// import AdministratorHome from "./components/admin/AdministratorHome";
import LoginPage from './components/LoginPage';
import Home from './components/Users/member/routes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <div className='app-wrapper'>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route exact path='/member/'>
            <MemberHome />
          </Route>
          {/* <Route exact path='/admin'>
                        <AdministratorHome />
                    </Route> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;

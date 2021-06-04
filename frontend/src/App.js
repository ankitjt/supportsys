import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/LoginPage.css";
import MemberHome from "./components/member/MemberHome";
import AdministratorHome from "./components/admin/AdministratorHome";
import LoginPage from "./components/LoginPage";

function App() {
    return (
        <div className='app-wrapper'>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <LoginPage />
                    </Route>
                    <Route exact path='/memberHome'>
                        <MemberHome />
                    </Route>
                    <Route exact path='/adminHome'>
                        <AdministratorHome />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

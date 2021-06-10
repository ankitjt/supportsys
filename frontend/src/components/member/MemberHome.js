import React from "react";
import "./MemberHome.css";
import MemberNavbar from "../common/MemberNavbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Documentation from "./routes/Documentation";
import Issues from "./routes/Issues";
import Leaves from "./routes/Leaves";
import Profile from "./routes/Profile";
import Reports from "./routes/Reports";
import Announcements from "./routes/Announcements";
import IssuesPending from "./routes/IssuesPending";
import LeavesApply from "./routes/LeavesApply";
import LeavesStatus from "./routes/LeavesStatus";

const MemberHome = () => {
    return (
        <Router>
            <div className='member-home'>
                <MemberNavbar />
                <Switch>
                    <Route path='/member/home' exact component={Home} />
                    <Route path='/member/reports' exact component={Reports} />
                    <Route path='/member/documentation' exact component={Documentation} />
                    <Route path='/member/issues' exact component={Issues} />
                    <Route path='/member/leaves' exact component={Leaves} />
                    <Route path='/member/profile' exact component={Profile} />
                    <Route path='/member/announcements' exact component={Announcements} />
                    <Route path='/member/issues/pending' exact component={IssuesPending} />
                    <Route path='/member/leaves/apply' exact component={LeavesApply} />
                </Switch>
            </div>
        </Router>
    );
};

export default MemberHome;

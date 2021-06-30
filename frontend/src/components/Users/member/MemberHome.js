import React from 'react';
import Navbar from '../../CommonComponents/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Documentation from './routes/Documentation';
import Issues from './routes/Issues';
import Leaves from './routes/Leaves';
import Profile from './routes/Profile';
import Reports from './routes/Reports';
import Announcements from './routes/Announcements';
import IssuesPending from './routes/IssuesPending';
import LeavesApply from './routes/LeavesApply';
import Home from './routes/Home';
import Root from './routes/Root';
import { memberHomeStyle } from './MemberHomeStyle';

const MemberHome = () => {
  const classes = memberHomeStyle();
  return (
    <Router>
      <Navbar />
      <div className={classes.components}>
        <Switch>
          <Route path='/member/' exact component={Root} />
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

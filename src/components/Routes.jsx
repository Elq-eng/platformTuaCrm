import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customer from '../pages/Customer';

const Routes = () => {
  return (
    <Switch>
        <Route path ="/" exact component={Dashboard}></Route>
        <Route path ="/customers" exact component={Customer}></Route>
    </Switch>

  )
}

export default Routes
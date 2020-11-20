import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../components/Body/Home/Home';
import Demo from '../components/Body/Demo/Demo';
import Contact from '../components/Footer/Contact/Contact';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/demo' component={ Demo } />
            <Route path='/contact' component={ Contact } />
        </Switch>
    )
}

export default Routes;
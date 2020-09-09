import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/login/Login';
import Logout from '../components/logout';
import SignUp from '../components/login/SignUp';
import Testimonials from '../components/Testimonials';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';
import Events from '../components/events';
import Testimonialform from '../components/Testimonials/testimonialform';
import Eventform from '../components/Events/eventform';


const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/signup" component={SignUp} />
                <Route path="/events" component={Events} />
                <Route path="/testimonials" component={Testimonials} />
                <Route path="/testimonialform" component={Testimonialform} />
                <Route path="/eventform" component={Eventform} />
                <Route component={NotFoundPage} />
            </Switch>

        </div>
    </BrowserRouter>
);

export default AppRouter;
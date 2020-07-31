import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';
import SignUp from '../components/login/SignUp';
import Testimonials from '../components/Testimonials';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';
import Social from '../components/social';
import Events from '../components/events';
import Formtesti from '../components/Testimonal/Formtesti';
import Formadmin from '../components/Events/Formadmin';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/events" component={Events} />
                <Route path="/testimonials" component={Testimonials} />
                <Route path="/formtesti" component={Formtesti} />
                <Route path="/formadmin" component={Formadmin} />
                <Route component={NotFoundPage} />
            </Switch>
            <Social />
        </div>
    </BrowserRouter>
);

export default AppRouter;
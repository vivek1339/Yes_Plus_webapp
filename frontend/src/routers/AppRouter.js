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
import Events from '../components/Events';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="./events" component={Events}/>
                <Route path="/signup" component={SignUp} />
                <Route path="/testimonials" component={Testimonials} />
                <Route component={NotFoundPage} />
            </Switch>
            <Social />
        </div>
    </BrowserRouter>
); 

export default AppRouter;
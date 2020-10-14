import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navigation/Navbar/Navbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import FixedBar from '../FixedBar/FixedBar';
import Home from '../../views/Home/Home';
import Contact from '../../views/Contact/Contact';
import Portfolio from '../../views/Portfolio/Portfolio';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        sideDrawerOpen: false,
        backdropOpen: false
    }

    openSidedrawerHandler = () => {
        this.setState({sideDrawerOpen: true, backdropOpen: true});
    }

    closeSidedrawerHandler = () => {
        this.setState({sideDrawerOpen: false, backdropOpen: false});
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Router>
                    <Navbar clicked={this.openSidedrawerHandler} />
                    <Sidedrawer show={this.state.sideDrawerOpen} />
                    <Backdrop clicked={this.closeSidedrawerHandler} show={this.state.backdropOpen} />
                    <FixedBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/portfolio' component={Portfolio} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </Router>
            </div>
        )
    }

}

export default Layout;
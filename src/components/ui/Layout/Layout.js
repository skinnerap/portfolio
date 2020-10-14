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
import Axios from 'axios';

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

    resumeHandler = () => {
        this.setState({sideDrawerOpen: false, backdropOpen: false});
        Axios({
            url: 'http://localhost:8080/api/download', //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'AlexanderSkinnerResume.pdf'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Router>
                    <Navbar clicked={this.openSidedrawerHandler} />
                    <Sidedrawer clicked={this.resumeHandler} clickedLink={this.closeSidedrawerHandler} show={this.state.sideDrawerOpen} />
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
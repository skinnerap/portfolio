import React, { Component } from 'react';
import classes from './Portfolio.module.css';
import Aux from '../../hoc/Auxi';
import Modal from '../../ui/Modal/Modal';

class Portfolio extends Component {

    state = {
        opacity1: {opacity: 0, transition: '.6s'},
        opacity2: {opacity: 0, transition: '.6s'},
        opacity3: {opacity: 0, transition: '.6s'},
        opacity4: {opacity: 0, transition: '.6s'},
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }

    handleHover = ( num ) => {
        if(num === 1) {
            let copy = {...this.state.opacity1}
            copy.opacity = 1;
            this.setState({opacity1: copy});
            console.log(this.state)
        } else if(num === 2) {
            let copy = {...this.state.opacity2}
            copy.opacity = 1;
            this.setState({opacity2: copy});
        } else if(num === 3) {
            let copy = {...this.state.opacity3}
            copy.opacity = 1;
            this.setState({opacity3: copy});
        } else if(num === 4) {
            let copy = {...this.state.opacity4}
            copy.opacity = 1;
            this.setState({opacity4: copy});
        }  
    }

    handleHoverLeave = ( num ) => {
        if(num === 1) {
            let copy = {...this.state.opacity1}
            copy.opacity = 0;
            this.setState({opacity1: copy});
        } else if(num === 2) {
            let copy = {...this.state.opacity2}
            copy.opacity = 0;
            this.setState({opacity2: copy});
        } else if(num === 3) {
            let copy = {...this.state.opacity3}
            copy.opacity = 0;
            this.setState({opacity3: copy});
        } else if(num === 4) {
            let copy = {...this.state.opacity4}
            copy.opacity = 0;
            this.setState({opacity4: copy});
        }
    }

    showModalHandler = (num) => {
        if(num === 1) {
            this.setState({showModal1: true});
        } else if(num === 2) {
            this.setState({showModal2: true});
        } else if(num === 3) {
            this.setState({showModal3: true});
        } else if(num === 4) {
            this.setState({showModal4: true});
        }
        
    }

    hideModalHandler = (num) => {
        if(num === 1) {
            this.setState({showModal1: false});
        } else if(num === 2) {
            this.setState({showModal2: false});
        } else if(num === 3) {
            this.setState({showModal3: false});
        } else if(num === 4) {
            this.setState({showModal4: false});
        }
        
    }

    render() {
        return (
            <Aux>
                <Modal className={classes.modal1} show={this.state.showModal1} clicked={() => this.hideModalHandler(1)} >
                    
                    <div className={classes.ModalCard}>
                        <div>
                            <h3>Project Name</h3>
                            <div className={classes.ButtonContainer}>
                                <button>Visit Site</button>
                                <button>View Repo</button>
                            </div>
                            
                        </div>
                        <ul>
                            <li>
                                URL: <a href='https://www.bethanymemorialassociation.org'>https://www.bethanymemorialassociation.org</a>
                            </li>
                            <li>
                                Client: Bethany Memorial Association (Non-Profit)
                            </li>
                            <li>
                                Client Needs: lorem ipsum
                            </li>
                            <li>
                                Challenges: lorem ipsum
                            </li>
                        </ul>
                    </div>
                    <div className={classes.ModalImg}></div>
                </Modal>
                <Modal className={classes.modal2} show={this.state.showModal2} clicked={() => this.hideModalHandler(2)} >
                </Modal>
                <Modal className={classes.modal3} show={this.state.showModal3} clicked={() => this.hideModalHandler(3)} >
                </Modal>
                <Modal className={classes.modal4} show={this.state.showModal4} clicked={() => this.hideModalHandler(4)} >
                </Modal>
                <div className={classes.Container}>
                    <div className={classes.Portfolio}>
                        <div onClick={() => this.showModalHandler(1)} onMouseEnter={() => this.handleHover(1)} onMouseLeave={() => this.handleHoverLeave(1)} className={classes.project1}>
                            <div className={classes.topbar}>
                                <div className={classes.red}></div>
                                <div className={classes.yellow}></div>
                                <div className={classes.green}></div>
                                <span>/File-Uploading</span>
        
                                <h3 style={this.state.opacity1} className={classes.portHeader}>
                                        Memorial Association <br /><br /> File Upload Platform <br />+<br /> Administration Controls
                                </h3>
        
                            </div>
                        </div>
                        <div onClick={() => this.showModalHandler(2)} onMouseEnter={() => this.handleHover(2)} onMouseLeave={() => this.handleHoverLeave(2)} className={classes.project2}>
                            <div className={classes.topbar}>
                                <div className={classes.red}></div>
                                <div className={classes.yellow}></div>
                                <div className={classes.green}></div>
                               <span>/Scheduling-Software</span>
                                
                                <h3  style={this.state.opacity2}className={classes.portHeader}>Auto Business <br /><br /> Scheduling Software <br />+<br /> Customizable Admin Panel</h3>
                                
                            </div>
                        </div>
                        <div onClick={() => this.showModalHandler(3)} onMouseEnter={() => this.handleHover(3)} onMouseLeave={() => this.handleHoverLeave(3)} className={classes.project3}>
                            <div className={classes.topbar}>
                                <div className={classes.red}></div>
                                <div className={classes.yellow}></div>
                                <div className={classes.green}></div>
                                <span>/Data-Visualizations</span>
        
                                <h3 style={this.state.opacity3} className={classes.portHeader}>Golf Data <br />+<br /> Statistical Visualizations</h3>
        
                            </div>
                        </div>
                        <div onClick={() => this.showModalHandler(4)} onMouseEnter={() => this.handleHover(4)} onMouseLeave={() => this.handleHoverLeave(4)} className={classes.project4}>
                            <div className={classes.topbar}>
                                <div className={classes.red}></div>
                                <div className={classes.yellow}></div>
                                <div className={classes.green}></div>
                                <span>/Algorithms</span>
        
                                <h3 style={this.state.opacity4} className={classes.portHeader}>Algorithm Visualizers <br /><br /> Pathfinding <br />+<br /> Searching</h3>
        
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
    

}

export default Portfolio;
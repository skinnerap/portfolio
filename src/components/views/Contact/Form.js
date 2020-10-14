import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import classes from './Contact.module.css';
import Axios from 'axios';

class Form extends Component {

    state = {
        name: null,
        email: null,
        message: null,
        disableSubmit: true,
        business: true,
        personal: false
    }

    nameHandler = (e) => {
        const name = e.target.value;
        this.setState({name: name});

        if(this.state.email !== null && this.state.message !== null) {
            this.setState({disableSubmit: false});
        }

        if(e.target.value === '') {
            this.setState({disableSubmit: true})
        }
    }

    emailHandler = (e) => {
        const email = e.target.value;
        this.setState({email: email});

        if(this.state.name !== null && this.state.message !== null) {
            this.setState({disableSubmit: false});
        }

        if(e.target.value === '') {
            this.setState({disableSubmit: true})
        }
    }

    messageHandler = (e) => {
        const message = e.target.value;
        this.setState({message: message});

        if(this.state.email !== null && this.state.name !== null) {
            this.setState({disableSubmit: false});
        }

        if(e.target.value === '') {
            this.setState({disableSubmit: true})
        }
    }

    submitHandler = (e) => {

        e.preventDefault();
        const data = {
            ...this.state
        }
        console.log(data);

        if(!this.state.business && !this.state.personal) {
            alert("Please choose business or personal")
            return;
        }

        //Check email address

        //Check message length
        if(this.state.message.length < 5) {
            alert("Please send a message of at least 5 characters")
            return;
        }

        Axios({
            method: 'post',
            url: 'http://localhost:8080/api/email',
            data: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            console.log(res.config.data);
            alert('Message was sent successfully, I will get back to you ASAP.')
            document.getElementById('contactForm').reset();
        }).catch(err => {
            console.log(err);
            alert('Error: ' + err);
        })

    }

    businessHandler = () => {
        
        this.setState({business: !this.state.business});

        if(!this.state.business) {
            this.setState({personal: false})
        }
        
    }

    personalHandler = () => {
        
        this.setState({personal: !this.state.personal});

        if(!this.state.personal) this.setState({business: false})
        
    }

    render() {
        return (
            <Spring from={{ opacity: 0}} to={{ opacity: 1}} config={{ delay: 600, duration: 400}}>
                {props => (
                    <div style={props}>
                        <form id='contactForm'>
                            <input onChange={(e) => this.nameHandler(e)} type='text' placeholder='Name'></input>
                            <input onChange={(e) => this.emailHandler(e)} type='email' placeholder='Email'></input>
                            <textarea onChange={(e) => this.messageHandler(e)} placeholder='Message'></textarea>
                            <div className={classes.Radio}>
                                <label for='choice-business' className={classes.Reason}>
                                    Business
                                </label>
                                <input checked={this.state.business} onClick={this.businessHandler}  className={classes.RadioBtn} type='radio' name='choice-business' />
                                <span className={classes.Span}> <strong>OR</strong> </span>
                                <label for='choice-personal' className={classes.Reason}>
                                    Personal
                                </label>
                                <input checked={this.state.personal} onClick={() => this.setState({personal: !this.state.personal})} className={classes.RadioBtn} type='radio' name='choice-personal' />
                                
                            </div>
                            <button disabled={this.state.disableSubmit} onClick={(e) => this.submitHandler(e)} type='submit'>Send</button>
                        </form>
                    </div>
                )}      
            </Spring>
        )
    }   
}

export default Form;
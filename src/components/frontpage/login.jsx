import React from "react";
import logimg from "../imgs/key.svg";
import "./style.css";

const initialState = {
    UserID: "",
    Password: "",
  };

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    state=initialState;

    handleChange = event => {
        this.setState({
          [event.target.name]:event.target.value
        });
    };


    validate = () => {
        let UIDError = "";
        let PWDError = "";
    
        if (!this.state.UserID) {
            UIDError = "Please Enter your UserID!";
            alert(UIDError);
        }

        if (!this.state.Password) {
            PWDError = "Please Enter your Password!";
            alert(PWDError);
        }
    
        if (UIDError || PWDError) {
          this.setState({ UIDError, PWDError });
          return false;
        }
    
        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
    };


    render(){
        return (
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">LOGIN</div>
            <br/>
            <div className="content">
                <div className="image">
                    <img src={logimg}/>
                </div>
                <br/><br/><br/>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type ="text" name="UserID" placeholder="UserID*"
                        value={this.state.UserID}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.UIDError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type ="password" name="Password" placeholder="Password*"
                        value={this.state.Password}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.PWDError}
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">LOGIN</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        );
    }
}
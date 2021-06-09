import React from "react";
import logimg from "../imgs/form.svg";
import "./style.css";

const initialState = {
    FirstName   : "",
    LastName    : "",
    DoB         : "",
    Gender      : "",
    ContactNumber: "",
    Email       : "",
    UserCategory: "",
    UserID      : "",
    Password    : "",
  };

export class Register extends React.Component{
    constructor(props){
        super(props);
    }

    state=initialState;

    validate = () => {
        let FNError = "";
        let LNError = "";
        let DBError = "";
        let GNError = "";
        let CNError = "";
        let EMError = "";
        let RLError = "";
        let UIDError = "";
        let PWDError = "";
        

        if (!this.state.UserID) {
            UIDError = "Please Enter your UserID!";
        }
        if (!this.state.Password) {
            PWDError = "Please Enter your Password!";
        }
    
        if(typeof(this.state.FirstName) !=="undefined"){
            if (!this.state.FirstName) {
                FNError = "Please Enter your First Name!";
                alert(FNError);
            }
            else if(!this.state.FirstName.match(/^[a-zA-Z]+$/)){
                FNError = "Invalid format for First Name!";
            }
            else if(this.state.FirstName > 10){
                FNError = "First Name cannot exceed 10 characters";
            }
        }

        if(typeof(this.state.LastName) !=="undefined"){
            if (!this.state.LastName) {
                LNError = "Please Enter your Last Name!";
                alert(LNError);
            }
            else if(!this.state.LastName.match(/^[a-zA-Z]+$/)){
                LNError = "Invalid format for Last Name!";
            }
            else if(this.state.LastName > 10){
                FNError = "Last Name cannot exceed 10 characters";
            }
        }

        if (!this.state.DoB) {
            DBError = "Please Enter your Date of Birth!";
        }

        if(typeof(this.state.Gender) !=="undefined"){
            if (!this.state.Gender) {
                GNError = "Please Enter your Gender!";
                alert(GNError);
            }
            else if(!this.state.Gender.match(/^[a-zA-Z]+$/)){
                GNError = "Invalid format for Gender!";
            }
        }

        if(typeof(this.state.ContactNumber) !=="undefined"){
            if (!this.state.ContactNumber) {
                CNError = "Please Enter your Contact!";
                alert(CNError);
            }
            else if(!this.state.ContactNumber.match(/^[0-9]+$/)){
                CNError = "Please Enter a valid Contact Number!";
            }
        }

        if(typeof(this.state.Email) !=="undefined"){
            if (!this.state.Email) {
                EMError = "Please Enter your Email!";
                alert(EMError);
            }
            else if (!this.state.Email.includes("@")) {
                EMError = "Invalid format for Email!";
            }
        }

        if (!this.state.UserCategory) {
            RLError = "Please choose your Category!";
        }

        
        if( FNError || LNError || DBError || GNError || CNError || EMError || RLError || UIDError || PWDError) {
            this.setState({ FNError, LNError, DBError, GNError, 
                CNError, EMError, RLError, UIDError, PWDError });
            return false;
        }
    
        return true;
    };

    handleChange = event => {
        this.setState({
          [event.target.name]:event.target.value
        });
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
            <div className="header">REGISTERATION</div>
            <div className="content">
                <div className="image">
                    <img src={logimg}/>
                </div>
                <br/>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="FirstName" placeholder="First Name*"
                        value={this.state.FirstName}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.FNError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" name="LastName" placeholder="Last Name*"
                        value={this.state.LastName}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.LNError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type ="date" name="DoB"
                        value={this.state.DoB}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.DBError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type ="text" name="Gender" placeholder="Gender*"
                        value={this.state.Gender}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.GNError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type ="text" name="ContactNumber" placeholder="Contact Number*"
                        value={this.state.ContactNumber}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.CNError}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type ="text" name="Email" placeholder="Email*"
                        value={this.state.Email}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.EMError}
                        </div>
                    </div>
                    <div className="radio-group">
                        <label>
                        <input type ="radio" name="UserCategory"
                        value="Customer"
                        onChange={this.handleChange}
                        /> CUSTOMER
                        </label>
                        <label>
                        <input type ="radio" name="UserCategory"
                        value="Tailor"
                        onChange={this.handleChange}
                        /> TAILOR
                        </label>
                        <div className="msg">
                        {this.state.RLError}
                        </div>
                    </div>
                    <br/>
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
                        <input type ="text" name="Password" placeholder="Password*"
                        value={this.state.Password}
                        onChange={this.handleChange}
                        />
                        <div className="msg">
                        {this.state.PWDError}
                        </div> 
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">REGISTER</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        );
    }
}
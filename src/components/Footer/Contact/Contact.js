import React from 'react'

import user from "./../../../container/emailJS.json"
import "./Contact.css"

export default class Contact extends React.Component {
    //credit to https://blog.mailtrap.io/react-send-email/
    constructor(props) {
      super(props);
      this.state = { 
          message: '', 
          name: 'Anonymous', 
          email: 'email@example.com' 
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center">
                <form className="test-mailing padding-top-md orange-light">
                  <h1>Interested? Send your hello to me!</h1>
                  <div>
                    <div class="form-group row">
                      <label for="fromName" class="col-sm-2 col-form-label">Your Name</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          name="name" 
                          class="form-control" 
                          onChange={this.handleChange}
                          value={this.state.name}
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="email" class="col-sm-2 col-form-label">Your Email</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          name="email" 
                          class="form-control" 
                          onChange={this.handleChange}
                          value={this.state.email}
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <textarea
                      name="message"
                      onChange={this.handleChange}
                      value={this.state.message}
                      required
                      placeholder="Got a message? Leave it here!"
                      style={{width: '100%', height: '150px'}}
                    />
                  </div>
                  <input type="button" value="Submit" className="btn btn--submit orange-light submit-bg float-right" onClick={this.handleSubmit} />
                </form>
              </div> 
            </div>  
          </div>
        </div>
      )
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    handleSubmit(event) {
        

        const service_id = "default_service";
        const template_id = "template_52xhfo1";
        const user_id = user[0].UserID;
        
        this.sendFeedback(
          template_id, 
          {
            to_name: "Joe",
            from_name: this.state.name, 
            email: this.state.email,
            message: this.state.message, 
          })
    }

    sendFeedback (templateId, templateParams) {
        console.log(templateParams)

        window.emailjs.send(
        'default_service', 
        templateId,
        templateParams, 
        user[0].UserID
        ).then(res => {
            console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}
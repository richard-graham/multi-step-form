import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  }

  // Proceed to the next step

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  // go back to pervious step

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  } 

  // Handle Field Change

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  render() {
    const { step, firstName, lastName, email, occupation, city, bio } = this.state
    const values = { firstName, lastName, email, occupation, city, bio }

    switch(step) {
      case 1:
        return (
          <FormUserDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return <h1>Form Personal Deatils</h1>
      case 3:
        return <h1>Confirm</h1>
      case 4:
        return <h1>Success</h1>
      default:
        return <h1>Error 'Step' is undefined</h1>
    }
    
  }
}

export default UserForm

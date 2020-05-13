import React, { Component } from 'react'
import Profile from './Profile'

class ProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                {
                    name: 'Stephen',
                    position: 'CEO'
                },
                {
                    name: 'Joseph',
                    position: 'CFO'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {
                    //this.state.employees.map(employee => <Profile name={employee.name} position={employee.position} />)
                    this.state.employees.map((employee, index) => {
                        return (
                            <Profile key={index} name={employee.name} position={employee.position} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ProfileContainer

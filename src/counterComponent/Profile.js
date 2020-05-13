import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <img 
                    src="https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg"
                    alt='profile'
                    style={{ width: "100p", height: "100px" }}
                />
                <p>{this.props.name}</p>
                <p>{this.props.position}</p>
            </div>
        )
    }
}
Profile.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string
}
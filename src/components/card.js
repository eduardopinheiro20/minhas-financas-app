import React from 'react'
import Login from '../views/login'


class Card extends React.Component {

    render(){
        return (
            <div className="card mb-3">
                <h3 className="card-header">{this.props.title}</h3>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>

        )
    }
}


export default Card
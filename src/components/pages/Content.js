import React, {Component} from 'react';
// import {connect} from 'react-redux';

class Content extends Component {
    render() {
        const {cbody} = this.props;
        return (
            <div>
                <div className="container">
                <div className="card">
                    <div className="card-body">
                        {cbody}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


export default Content

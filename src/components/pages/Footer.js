import React, {Component} from 'react';
// import {connect} from 'react-redux';

class Footer extends Component {

    render() {
        const {fText} = this.props;
        return (
            <div>

                <div className="footer bg-danger">

                    <p className="text-center"> {fText}  </p>


                </div>


            </div>
        );
    }
}



export default Footer

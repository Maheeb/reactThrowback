import React, {Component} from 'react';


class Appbar extends Component {
    render() {

        const {logo} = this.props;
        return (
            <div>

                <div className="page-header text-center bg-success text-danger">
                    <h1 className="">{logo}</h1>
                </div>
            </div>
        );
    }
}



export default Appbar;

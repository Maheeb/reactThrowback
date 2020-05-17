import React, {Component} from 'react';
// import {connect} from 'react-redux';

class Leftnav extends Component {
    render() {
        const {name_1,name_2} = this.props;
        return (
            <div>

                <div id="sidebar-wrapper">
                    <nav id="spy">
                        <ul className="sidebar-nav nav">
                            <li className="sidebar-brand">
                                <a href="#home"><span class="fa fa-home solo">{name_1}</span></a>
                            </li>
                            <li>
                                <a href="#anch1" data-scroll>
                                    <span className="fa fa-anchor solo">{name_2}</span>
                                </a>
                            </li>


                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default Leftnav;

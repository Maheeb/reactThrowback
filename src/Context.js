import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state,action) => {

    switch (action.type) {
        case 'Delete_Contact':
            return{
                ...state,
                contacts: state.contacts.filter(contact=>
                contact.id !== action.payload
                )
            };
        default:
            return state;
    }
}



export class Provider extends Component{

    state = {
        contacts: [
            {
                id:1,
                name: 'Maheeb',
                address: 'Dhaka',
                phone: '111-111-111'
            },
            {
                id:2,
                name: 'Azmaeen',
                address: 'Khilgaon',
                phone: '222-222-222'
            },
            {
                id:3,
                name: 'Sharif',
                address: 'Gulshan',
                phone: '333-333-333'
            }
        ],
        dispatch: action => this.setState(
            state=> reducer(state,action)
        )
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
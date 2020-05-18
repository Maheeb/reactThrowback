import React, {Component} from 'react';
import Contact from './Contact'

class Contacts extends Component {
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
        ]
    };

    render() {
        const {contacts} = this.state;
        return (
            <div>
                {
                    contacts.map(item => (
                        <Contact
                            key = {item.id}
                            item = {item}
                            // name={item.name}
                            // address={item.address}
                            // phone={item.phone}

                        />
                    ))
                }



            </div>
        );
    }
}

export default Contacts;
import React, {Component} from 'react';

class AddContact extends Component {
    state ={
        name: '',
        address: '',
        phone: '',
    };

    onSubmit = e => this.setState([e.preventDefault])

    onChange = e =>this.setState({ [e.target.name]: e.target.value});
    render() {
        const {name,address, phone} = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control form-control-lg"
                            placeholder="Enter Your Name here"
                                   value={name}
                                   onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" className="form-control form-control-lg"
                                   placeholder="Enter address here"
                                   value={address}
                                   onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input type="text" name="phone" className="form-control form-control-lg"
                                   placeholder="Enter phone here"
                                   value={phone}
                                   onChange={this.onChange}
                            />
                        </div>
                        <input type="submit"
                                value= "Add Contact"
                               className= "btn btn-success btn-block"
                        />
                    </form>

                </div>
            </div>
        );
    }
}

export default AddContact;
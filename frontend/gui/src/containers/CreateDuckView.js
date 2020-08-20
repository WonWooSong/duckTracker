import React from 'react';
import axios from 'axios';
import CustomForm from '../components/Form'

class CreateList extends React.Component {

    state = {
        ducks: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    ducks: res.data
                });
            })
    }

    render() {
        return (
            <div>

                <br />
                <h2> Create Duck Report </h2>
                <CustomForm requestType="post" btnText="Create" />
            </div>
        )
    }
}

export default CreateList;
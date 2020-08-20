import React from 'react';
import axios from 'axios';
import Ducks from '../components/Duck';

class DuckList extends React.Component {

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
                <Ducks data={this.state.ducks} />
            </div>
        )
    }
}

export default DuckList;
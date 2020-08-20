import React from 'react';
import axios from 'axios';
import { Button, Card, Row, Col } from 'antd';
import CustomForm from '../components/Form'


class DuckDetail extends React.Component {

    state = {
        duck: {}
    }

    componentDidMount() {
        const duckID = this.props.match.params.duckID;
        axios.get(`http://127.0.0.1:8000/api/${duckID}`)
            .then(res => {
                this.setState({
                    duck: res.data
                });
            })
    }

    handleDelete = event => {
        event.preventDefault();
        const duckID = this.props.match.params.duckID;
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api/${duckID}/delete/`)
        .then(res => {
          if (res.status === 204) {
            //this.props.history.push(`/`);
          }
        })
      };

    render() {
        return (
            <div>
                <h2> Detailed Duck Report </h2>

                <Card id={this.state.duck.id}>
                    <Row>
                        <Col span={18} push={4}>
                            <p>{this.state.duck.name}</p>
                        </Col>
                        <Col span={4} pull={18}>
                            <p>Name:</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={18} push={4}>
                        <p>{this.state.duck.time}</p>
                        </Col>
                        <Col span={4} pull={18}>
                        <p>Time:</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={18} push={4}>
                            <p>{this.state.duck.food}</p>
                        </Col>
                        <Col span={4} pull={18}>
                            <p>Food:</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={18} push={4}>
                            <p>{this.state.duck.where}</p>
                        </Col>
                        <Col span={4} pull={18}>
                            <p>Where:</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={18} push={4}>
                            <p>{this.state.duck.howMany}</p>
                        </Col>
                        <Col span={4} pull={18}>
                            <p>How Many Ducks:</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={18} push={4}>
                            <p>{this.state.duck.howMuch}</p>
                        </Col>
                        <Col span={4} pull={18}>
                            <p>How much Food:</p>
                        </Col>
                    </Row>

                </Card>

                <h2> Update Duck Report </h2>
                <CustomForm requestType="put" duckID={this.props.match.params.duckID} btnText="Update" />

                <form onSubmit={this.handleDelete}>
                <Button type="danger" htmlType="submit">
                  Delete
                </Button>
                </form>

            </div>

        )
    }
}

export default DuckDetail;
  
import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const FormItem = Form.Item;

class CustomForm extends React.Component {
  
  handleFormSubmit = async (event, requestType, duckID) => {
    event.preventDefault();

    const postObj = {
      name: event.target.elements.name.value,
      time: (event.target.elements.date.value + 'T' +event.target.elements.time.value),
      food: event.target.elements.food.value,
      where: event.target.elements.where.value,
      howMany: event.target.elements.howMany.value,
      howMuch: event.target.elements.howMuch.value,
    }
    console.log(postObj);


    
    if (requestType === "post") {
      await axios.post("http://127.0.0.1:8000/api/create/", postObj)
        .then(res => {
          if (res.status === 201) {
            //this.props.history.push(`/`);
          }
        })
    } else if (requestType === "put") {
      await axios.put(`http://127.0.0.1:8000/api/${duckID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            //this.props.history.push(`/`);
          }
        })
    }
  };

  render() {
    return (
      <div>
        <Form
            onSubmitCapture={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.duckID
            )
          }
        >
          <FormItem label="Duck Info">
            <br />

            <Input name="name" placeholder="Put a duck name here" />
            <br />

            <input type="date" name="date" />
            <input type="time" name="time" />
            <br />

            <Input name="food" placeholder="What food the ducks are fed" />
            <br />

            <Input name="where" placeholder="Where the ducks are fed" />
            <br />

            <Input type="text" pattern="[0-9]*" name="howMany" placeholder="How many ducks are fed" />
            <br />
            
            <Input type="text" pattern="[0-9]*" name="howMuch" placeholder="How much food the ducks are fed" />

          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default (CustomForm);
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

// Components
import NavBar from "../../Components/NavBar/NavBar";

// Styles
import "./AddVote.scss";

function AddVote() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <NavBar back={true} />

      <div className="form-container">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title of Vote"
            name="voteName"
            rules={[
              {
                required: true,
                message: "Please enter a Title for your Vote",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="voteDescription"
            rules={[
              {
                required: true,
                message: "Please describe your Vote",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddVote;

import React from "react";
import { Button, Form, Input } from "antd";

// Styles
import "./VoteForm.scss";

function VoteForm({ onSubmit }) {
  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
  );
}

export default VoteForm;

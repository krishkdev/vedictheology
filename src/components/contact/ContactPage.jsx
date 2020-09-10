import React, {useState} from "react";
import { Form, Modal, Button, Input, Radio } from "antd";
import Styles from "./ContactPage.module.css";

const ContactForm = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();
  return (
    <div>
      <Modal
        visible={visible}
        Full
        Name="Please provide your details."
        okText="Create"
        cancelText="Back"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
              console.log(values);
            })
            .catch((err) => {
              alert("Can't validate form. Please try again");
              console.log(err);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="Contact_form"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="Full Name"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please input the your Name.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Do you want to subscribe to our newsletter and events?"
            label="Do you want to subscribe to our newsletter and events?"
            className="subsciption-opt"
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

const ContactPage = () => {
    const [visible, setVisible] = useState(false);
    
    const onCreate = values => {
        console.log('Received values of form: ', values);
        setVisible(false);
      };

    return (
      <div className={Styles.container}>
          <h1 style={{color:"#000000",fontSize:"30px"}}><b style={{color:"#aaa",fontSize:"38px"}}>P</b>lease refer the address in footer :)</h1>
          <h1 style={{color:"#000000",fontSize:"30px"}}><b style={{color:"#aaa",fontSize:"38px"}}>S</b>ubscribe to our newsletter by clicking the button below.</h1>
        <Button
          type="primary"
          style= {{background:"orange", borderColor:"orange"}}
          onClick={() => {
            setVisible(true);
          }}
        >
          New Collection
        </Button>
        <ContactForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    );
  }
    

export default ContactPage;

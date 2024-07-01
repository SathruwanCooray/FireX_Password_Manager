import React, { useState, useEffect } from "react";
import { Button, Divider, Form, Input } from "antd";
import { MailOutlined, LockOutlined, GlobalOutlined, FireOutlined } from "@ant-design/icons";
import "../index.css";
import ItemComponent from "../Components/ItemComponent";

function Page() {
  const [items, setItems] = useState([]);
  const [nextItemId, setNextItemId] = useState(1);
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
    const storedItems = JSON.parse(localStorage.getItem("items"));
    console.log("Retrieved from local storage:", storedItems);
    if (storedItems && storedItems.length > 0) {
      setItems(storedItems);
      const maxId = storedItems.reduce((max, item) => (item.id > max ? item.id : max), 0);
      setNextItemId(maxId + 1);
      console.log("Set items:", storedItems);
    }
  }, []);
  
  useEffect(() => {
    console.log("Saving to local storage:", items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const onFinish = (values) => {
    const ComponentItem = {
      id: nextItemId,
      websiteName: values.websiteName,
      email: values.email,
      password: values.password,
    };
    setItems([...items, ComponentItem]);
    setNextItemId(nextItemId + 1);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen min-w-screen flex">
      <div className="flex-1 flex-col bg-slate-50">
        <div className="rounded-tl-3xl">
          <h1 className="text-left font-bold text-xl mt-10 ml-10">Password</h1>
          <h1 className="text-left font-thin text-lg mt-1 ml-10 text-zinc-500">
            Manage all the passwords you save here
          </h1>
          <Divider />
        </div>
        <div className="flex-1 overflow-y-auto mr-2">
          {items.map((item) => (
            <ItemComponent key={item.id} {...item} onRemove={handleRemoveItem} />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-slate-100 justify-center rounded-bl-3xl rounded-tl-3xl">
        <div className="rounded-tl-3xl">
          <h1 className="text-left font-bold text-xl mt-10 ml-10">Login Details</h1>
          <h1 className="text-left font-thin text-lg mt-1 ml-10 text-zinc-500">
            This details for your saved password
          </h1>
        </div>
        <Divider />
        <h1 className="text-center text-5xl font-bold pt-20">
          Fire<span className="text-orange-500">X</span> Password Manager <FireOutlined style={{ color: '#ff8c5efb' }} />
        </h1>
        <div className="flex flex-grow flex-col justify-center items-center rounded-bl-3xl">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              requiredMarkValue: "",
            }}
          >
            <h1 className="flex items-center justify-start text-lg font-bold pb-2 text-slate-600">
              Enter your Website
            </h1>
            <Form.Item
              name="websiteName"
              rules={[
                { required: true, message: "Please input your Website!" },
              ]}
            >
              <Input
                className="font-medium mr-44 h-12 text-lg"
                prefix={<GlobalOutlined style={{ marginRight: 14 }} />}
                placeholder="Website"
              />
            </Form.Item>

            <h1 className="flex items-center justify-start text-lg font-bold pb-2 text-slate-600">
              Enter your Email
            </h1>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                className="font-medium mr-44 h-12 text-lg"
                prefix={<MailOutlined style={{ marginRight: 14 }} />}
                placeholder="Email"
              />
            </Form.Item>

            <h1 className="flex items-center justify-start text-lg font-bold pb-2 text-slate-600">
              Enter your Password
            </h1>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                className="font-medium h-12 text-lg"
                prefix={<LockOutlined style={{ marginRight: 14 }} />}
                placeholder="Password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Form.Item>

            <Form.Item className="flex items-center justify-center">
              <Button
                className="mt-5 text-md font-bold pr-16 pl-16 pt-5 pb-5 bg-orange-500"
                type="primary"
                htmlType="submit"
              >
                ADD
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Page;

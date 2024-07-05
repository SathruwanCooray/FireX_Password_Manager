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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className={`min-h-screen ${isMobile ? 'flex-col' : 'flex'}`}>
      <div className={`bg-slate-50 ${isMobile ? 'p-4' : 'flex-1'}`}>
        <div className="rounded-tl-3xl">
          <h1 className="text-left font-bold text-xl mt-4 ml-5">Password</h1>
          <h1 className="text-left font-thin text-lg mt-1 ml-5 text-zinc-500">
            Manage all the passwords you save here
          </h1>
          <Divider />
        </div>
        <div className={`${isMobile ? 'max-h-60' : 'flex-1'} overflow-y-auto`}>
          {items.map((item) => (
            <ItemComponent key={item.id} {...item} onRemove={handleRemoveItem} />
          ))}
        </div>
      </div>
      <div className={`bg-slate-100 ${isMobile ? 'p-4' : 'flex-1 flex flex-col justify-center rounded-bl-3xl rounded-tl-3xl'}`}>
        <div className="rounded-tl-3xl">
          <h1 className="text-left font-bold text-xl mt-4 ml-5">Login Details</h1>
          <h1 className="text-left font-thin text-lg mt-1 text-zinc-500 ml-5">
            This details for your saved password
          </h1>
        </div>
        <Divider />
        <h1 className={`text-center  ${isMobile ? 'text-3xl' : 'text-5xl'} font-bold pt-4`}>
          Fire<span className="text-orange-500">X</span> Password Manager <FireOutlined style={{ color: '#ff8c5efb' }} />
        </h1>
        <div className={`${isMobile ? '' : 'flex flex-grow flex-col justify-center items-center'} rounded-bl-3xl`}>
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
                className="font-medium h-12 text-lg w-full"
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
                className="font-medium h-12 text-lg w-full"
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
                className="font-medium h-12 text-lg w-full"
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
                className="mt-5 text-md font-bold px-8 py-3 bg-orange-500 w-full"
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
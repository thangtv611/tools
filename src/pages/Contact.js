import React from "react";
import { Typography, Form, Input, Button } from "antd";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

const { Title, Paragraph } = Typography;

const validationSchema = Yup.object({
  name: Yup.string().required("Họ tên là bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  message: Yup.string().required("Tin nhắn là bắt buộc"),
});

const Contact = () => {
  return (
    <div style={{ padding: "50px 0", maxWidth: "600px", margin: "0 auto" }}>
      <Title>Liên hệ</Title>
      <Paragraph>Liên hệ với chúng tôi qua form dưới đây:</Paragraph>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm layout="vertical">
            <Form.Item label="Họ tên">
              <Field name="name" as={Input} placeholder="Nhập họ tên" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Field name="email" as={Input} placeholder="Nhập email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </Form.Item>
            <Form.Item label="Tin nhắn">
              <Field
                name="message"
                as={Input.TextArea}
                rows={4}
                placeholder="Nhập tin nhắn của bạn"
              />
              <ErrorMessage
                name="message"
                component="div"
                style={{ color: "red" }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                Gửi
              </Button>
            </Form.Item>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Contact;

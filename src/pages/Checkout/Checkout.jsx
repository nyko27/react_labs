import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import "./Checkout.css";
import { useHistory } from "react-router-dom";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="label">
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">Can not submit: {meta.error}</div>
      ) : null}
    </>
  );
};

const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Checkout() {
  const history = useHistory();

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          phone: "",
          address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(1, "Must contain ta least one letter")
            .max(100, "Must be 100 characters or less")
            .required("Name filed is required"),
          surname: Yup.string()
            .min(1, "Must contain ta least one letter")
            .max(100, "Must be 100 characters or less")
            .required("Surname filed is required"),
          email: Yup.string()
            .min(4, "Must contain ta least 4 characters")
            .matches(emailRe, "Email is not valid ")
            .max(100, "Must be 100 characters or less")
            .required("Email filed is required"),

          phone: Yup.string()
            .matches(/[0-9]+/, "Phone number is not valid ")
            .min(10, "Must contain ta least 10 numbers  ")
            .max(13, "Must be 13 numbers or less")

            .required("Phone filed is required"),
          address: Yup.string().optional(),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          history.push("/success");
        }}
      >
        {() => (
          <>
            <Form className="form">
              <h3 className="checkout-title"> Checkout</h3>
              <TextInput
                label="Name"
                name="name"
                placeholder="name"
                className="input"
              />
              <TextInput
                label="Surname"
                name="surname"
                placeholder="surname"
                className="input"
              />
              <TextInput
                label="Email"
                name="email"
                placeholder="email"
                className="input"
              />
              <TextInput
                label="Phone number"
                name="phone"
                placeholder="phone"
                className="input"
              />
              <TextInput
                label="Address"
                name="address"
                placeholder="address"
                className="input"
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>

      <div className="bottom-btns">
        <Link to="/cart">
          <Button className="bottom-btn" variant="outline-dark">
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import * as Yup from "yup";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import "./formikField.css";

function SignInModal(props) {
  const { title, openPopup, onHide } = props;
  const [flagForCotinue, setFlagForContinue] = React.useState(true);

  const initialValues = {
    phoneNumber: "",
    otp: "",
  };
  const onsubmit = (props) => {
    console.log("form data ", props);
  };
  const otpmatch = /^[0-9]{4}$/;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    otp: Yup.string()
      .matches(otpmatch, "otp is not valid")
      .required("Required"),
  });
  const OpenFieldForotp = () => {
    setFlagForContinue(false);
  };
  return (
    <Dialog open={openPopup} onClose={onHide}>
      <DialogContainer>
        <DialogTitle>
          <Title>{title}</Title>
        </DialogTitle>
        <WrapCoseIcon onClick={onHide}>
          <CloseIcon />
        </WrapCoseIcon>
      </DialogContainer>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          onSubmit={onsubmit}
          validationSchema={validationSchema}
        >
          {(formikprops) => {
            console.log("formik props", formikprops);
            return (
              <Form>
                <div className="form-control">
                  <label htmlFor="phoneNumber">Enter your phone no</label>
                  <Field type="number" id="phonenumber" name="phoneNumber" />
                  <ErrorMessage name="phoneNumber">
                    {(errmsg) => <div className="error">{errmsg}</div>}
                  </ErrorMessage>
                </div>
                {!flagForCotinue && (
                  <div className="form-control">
                    <label htmlFor="otp">OTP</label>
                    <Field type="number" id="otp" name="otp" />
                    <ErrorMessage name="otp">
                      {(errmsg) => <div className="error">{errmsg}</div>}
                    </ErrorMessage>
                  </div>
                )}
                {!flagForCotinue && (
                  <SubmitButton
                    type="submit"
                    disabled={!(formikprops.dirty && formikprops.isValid)}
                  >
                    Submit
                  </SubmitButton>
                )}
                {console.log("flag for continue", flagForCotinue)}
                {flagForCotinue && (
                  <SubmitButton
                    type="submit"
                    onClick={() => OpenFieldForotp()}
                    disabled={!(formikprops.dirty && formikprops.isValid)}
                  >
                    Continue
                  </SubmitButton>
                )}
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
export default SignInModal;

const DialogContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #212529;
`;
const WrapCoseIcon = styled.div`
  cursor: pointer;
`;

const Title = styled.div`
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 500;
`;
const SubmitButton = styled.button`
  cursor: pointer;
  background-color: #ff3f6c;
  text-align: center;
  padding: 12px;
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 16px;
`;

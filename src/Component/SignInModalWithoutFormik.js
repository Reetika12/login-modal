import React, { useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function SignInModal(props) {
  const { title, openPopup, onHide, getflagForLoggedInPerson } = props;
  const [flagForCotinue, setFlagForContinue] = React.useState(false);
  const [flagForOtp, setFlagForOtp] = React.useState(false);
  const [value, setValue] = React.useState("+91");
  const [otp, setOtp] = React.useState();
  const onsubmit = (props) => {
    console.log("form data ", props);
  };
  //   const otpmatch = /^[0-9]{4}$/;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const OpenFieldForotp = () => {
    setFlagForContinue(true);
    console.log("hello");
  };
  useEffect(() => {
    setValue("+91");
  }, []);

  const CloseDialog = () => {
    onHide();
    setFlagForContinue(false);
  };
  const matchWithOtp = () => {
    console.log("otppp", otp);
    if (otp === "1111") {
      setFlagForOtp(false);
      getflagForLoggedInPerson();
      setFlagForContinue(false);
      return;
    } else {
      setFlagForOtp(true);
    }
  };
  const setOtpEvent = (e) => {
    setOtp(e.target.value);
    setFlagForOtp(false);
  };
  return (
    <Dialog open={openPopup} onClose={() => CloseDialog()}>
      <DialogContainer>
        <DialogTitle>
          <Title>{title}</Title>
        </DialogTitle>
        <WrapCoseIcon onClick={() => CloseDialog()}>
          <CloseIcon />
        </WrapCoseIcon>
      </DialogContainer>
      <WrapDialogContent>
        {!flagForCotinue ? (
          <WrapPhoneNumber>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
          </WrapPhoneNumber>
        ) : (
          <WrapPhoneNumber>
            <HeaderInput
              type="tel"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtpEvent(e)}
            />
            {flagForOtp ? (
              <Errormessage>Invalid otp try again</Errormessage>
            ) : null}
          </WrapPhoneNumber>
        )}

        {!flagForCotinue ? (
          <WrapSubmitButton>
            <SubmitButton
              type="submit"
              disabled={value.length < 10}
              onClick={() => OpenFieldForotp()}
            >
              Continue
            </SubmitButton>
          </WrapSubmitButton>
        ) : (
          <WrapSubmitButton>
            <SubmitButton
              type="submit"
              disabled={value.length < 10}
              onClick={() => matchWithOtp()}
            >
              Submit
            </SubmitButton>
          </WrapSubmitButton>
        )}
      </WrapDialogContent>
    </Dialog>
  );
}
export default SignInModal;

const DialogContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  background-color: ${(props) => (props.disabled ? "#C0C0C0" : "#ff3f6c")};
  text-align: center;
  padding: 12px;
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 16px;
`;
const WrapPhoneNumber = styled.div`
  margin: 20px;
  background: #fff;
`;
const WrapDialogContent = styled(DialogContent)`
  height: 175px;
`;
const WrapSubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  line-height: 42px;
  background-color: #fff;
  width: 300px;
  text-align: left;
  height: 35px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  margin-top: 7px;
  margin-bottom: 7px;
  text-align: center;
`;
const Errormessage = styled.p`
  color: red;
  margin: 0px;
  text-align: center;
}
`;

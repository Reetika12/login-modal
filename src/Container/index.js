// import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import SignInModal from "../Component/SignINModal";
function Main() {
  const [openDialog, setDialog] = useState(false);
  const openTheDialog = () => {
    setDialog(true);
  };
  const dismissLogin = () => {
    setDialog(false);
  };
  return (
    <div>
      <Container>
        <Wrapbutton>
          <Button onClick={() => openTheDialog()}>Login</Button>
        </Wrapbutton>
      </Container>
      <SignInModal
        title={"Login / Signup"}
        openPopup={openDialog}
        onHide={dismissLogin}
      />
    </div>
  );
}

export default Main;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 10%;
  z-index: 1000;
  padding: 0px 16px;
  background-color: #fff;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  box-shadow: rgb(0 0 0 / 16%) 0px 2px 5px 0px,
    rgb(0 0 0 / 12%) 0px 2px 10px 0px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 160px;
  font-size: 1.2rem;
  border-radius: 10px;
  font-weight: bold;
  padding: 7px 7px;
  color: #fff;
  background: #0a95ff;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
`;
const Wrapbutton = styled.div`
  float: right;
  margin: 10px 30px;
`;

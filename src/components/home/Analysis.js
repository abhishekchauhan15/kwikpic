import React from "react";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import Right from "../../assets/right.png";
import { width } from "@mui/system";

const UpperText = styled(Typography)`
  font-family: Gilmer, sans-serif;
  font-size: 70px;
  font-weight: 700;
  line-height: 75px;
  text-align: start;
  color: rgb(255, 255, 255);
  height: 150px;
  width: 607.688px;
  margin: 0px 0px 20px;
`;

const LowerText = styled(Typography)`
  font-family: Gilmer, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 35px;
  color:#E0E0E0;
  height: 105px;
  width: 640.375px;
  margin-bottom: 230px;
`;

const RightBar = styled(Box)`
  width: 50vw;
  overflow-y: scroll;
  webkit-scrollbar: none;
  position: relative;
  height: 450px;
  margin-left: 150px;
  margin-top: 300px;
`;

const LeftBar = styled(Box)`
  width: "60%";
  height: "100%";
  
`;

const Content = styled(Box)``;

const Analysis = () => {
  return (
    <Box style={{ display: "flex", height: "100vh" }}>
      <LeftBar>
        <img
          src={Right}
          alt=""
          style={{
            height: "335px",
            width: "355px",
            marginTop: "290px",
            marginLeft: "230px",
          }}
        />
      </LeftBar>
      <RightBar>
        <Content>
          <UpperText>For a lot of coins, on a lot of chains</UpperText>
          <LowerText>
            {" "}
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins
            you have, and some more, can be invested on Flint, using your
            favourite networks.
          </LowerText>
        </Content>
        <Content>
          <UpperText>For a lot of coins, on a lot of chains</UpperText>
          <LowerText>
            {" "}
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins
            you have, and some more, can be invested on Flint, using your
            favourite networks.
          </LowerText>
        </Content>
        <Content>
          <UpperText>For a lot of coins, on a lot of chains</UpperText>
          <LowerText>
            {" "}
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins
            you have, and some more, can be invested on Flint, using your
            favourite networks.
          </LowerText>
        </Content>
        <Content>
          <UpperText>For a lot of coins, on a lot of chains</UpperText>
          <LowerText>
            {" "}
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins
            you have, and some more, can be invested on Flint, using your
            favourite networks.
          </LowerText>
        </Content>
        <Content>
          <UpperText>For a lot of coins, on a lot of chains</UpperText>
          <LowerText>
            {" "}
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins
            you have, and some more, can be invested on Flint, using your
            favourite networks.
          </LowerText>
        </Content>
        <Content>
          <UpperText>For a lot of coins, on a lot of chains</UpperText>
          <LowerText>
            {" "}
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins
            you have, and some more, can be invested on Flint, using your
            favourite networks.
          </LowerText>
        </Content>
      </RightBar>
    </Box>
  );
};

export default Analysis;

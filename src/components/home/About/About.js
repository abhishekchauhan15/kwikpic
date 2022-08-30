import React from "react";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import dot2 from "../../../assets/dot2.webp";
import solana from "../../../assets/solana.webp";
import btc from "../../../assets/btc.webp";
import bnb from "../../../assets/bnb.webp";
import gmt from "../../../assets/gmt.webp";
import usdt from "../../../assets/usdt.webp";

const Component = styled(Box)`
  font-family: Gilmer, sans-serif;
  margin-top: 110px;
  color: white;
  position: relative;
  top: 210px;
  left: 480px;
`;
const Components = styled(Box)`
  position: relative;
  top: 630px;
  left: 90px;
`;

const Images = styled(Box)`
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 20%;
  top: 100px;
  transform: translate(-50%, -50%);
  filter: blur(80px);
  -webkit-filter: blur(200px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Small = styled(Box)`
  font-family: Gilmer, sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 36px;
  color: #e0e0e0;
  height: 184px;
  width: 654.6px;
  padding: 40px 0px 0px;
  position: relative;
  top: -130px;
  left: 60px;
`;

const LargeText = styled(Box)`
  font-size: 75px;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 93.75px;
  text-align: center;
  color: rgb(255, 255, 255);
  height: 187.5px;
  width: 546.638px;
  margin: 100px 0px 30px;
`;
const SmallText = styled(Box)`
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  height: 30px;
  width: 546.638px;
  margin: 0px 0px 50px;
  padding: 0px 30px;
  color: rgb(255, 255, 255);
`;

const About = () => {
  return (
    <div>
      <Component>
        <Images>
          <img
            src={dot2}
            alt="dot2"
            style={{
              height: "300px",
              width: "300px",
              position: "absolute",
              left: "-200px",
            }}
          />
          <img
            src={solana}
            alt="solana"
            style={{
              height: "400px",
              width: "400px",
              position: "relative",
              left: "200px",
            }}
          />
        </Images>
        <LargeText>We are building you a home</LargeText>
        <SmallText>in the world of crypto</SmallText>
      </Component>

      <Components>
        <LargeText>Our Partners</LargeText>
        <Small>
          On our mission to build the home for crypto natives, we have the best
          networks as our partners. Flint currently supports Ethereum, Solana,
          Tron, and Binance Smart Chain with additional networks on the way.
        </Small>
      </Components>
      <img
        src={btc}
        alt="dot2"
        style={{
          height: "80px",
          width: "80px",
          position: "relative",
          top: "250px",
          left: "1150px",
        
        }}
      />
      <img
        src={bnb}
        alt="dot2"
        style={{
          height: "80px",
          width: "80px",
          position: "relative",
          top: "390px",
          left: "1150px",
        }}
      />
      <img
        src={usdt}
        alt="dot2"
        style={{
          height: "80px",
          width: "80px",
          position: "relative",
          top: "190px",
          left: "1200px",
         
        }}
      />
      <img
        src={gmt}
        alt="dot2"
        style={{
          height: "80px",
          width: "80px",
          position: "relative",
          top: "500px",
          left: "1150px",
        }}
      />
    </div>
  );
};

export default About;

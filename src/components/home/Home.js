import React from "react";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import img4 from "../../assets/eth (1).webp";
import img2 from "../../assets/eth (2).webp";
import img3 from "../../assets/eth (3).webp";
import img1 from "../../assets/eth.webp";
import Analysis from "./Analysis";
import dot2 from "../../assets/dot2.webp";
import solana from "../../assets/solana.webp";

const Component = styled(Box)`
  position: absolute;
  top: 110px;
`;
const Test = styled(Typography)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilmer, sans-serif;
  font-size: 70px;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 93.75px;
  text-align: center;
  height: 187.5px;
  width: 916.737px;
  position: relative;
  left: 280px;
  top: -50px;
`;

const Text = styled(Typography)`
  color: white;
  display: inline;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 350px;
  top: -50px;
  font-size: 30px;
  font-weight: 500;
  padding-top: 5px;
`;
const Image2 = styled(Box)`
  trainsition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled("button")({
  position: "relative",
  padding: "20px",
  left: "-230px",
  top: "20px",
  borderRadius: "10px",
  width: "290px",
  fontSize: "20px",
  border: "none",
});

const Images = styled(Box)`
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translate(-50%, -50%);

  filter: blur(80px);
  -webkit-filter: blur(340px);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Home = () => {
  return (
    <Component>
      <Images>
        <img
          src={dot2}
          alt="dot2"
          style={{
            height: "400px",
            width: "400px",
            position: "absolute",
            left: "-200px",
          }}
        />
        <img
          src={solana}
          alt="solana"
          style={{
            height: "500px",
            width: "500px",
            position: "relative",
            left: "200px",
          }}
        />
      </Images>
      <Box>
        <img
          src={img1}
          alt="img1"
          style={{
            height: "200px",
            width: "200px",
            position: "relative",
            left: "100px",
            top: "50px",
          }}
        />

        <img
          src={img4}
          alt=""
          style={{
            height: "200px",
            width: "200px",
            position: "relative",
            left: "1020px",
            top: "50px",
          }}
        />
        <Test>
          Tap into the full <br />
          potential of crypto
        </Test>
        <Text>
          Earn secure yields on your crypto, using new age strategies.
        </Text>
        <Button>Start Earning </Button>

        <Image2>
          <img
            src={img2}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              position: "relative",
              left: "30px",
              top: "-50px",
            }}
          />

          <img
            src={img3}
            alt=""
            style={{
              height: "200px",
              width: "200px",
              position: "relative",
              left: "1100px",
              top: "-50px",
            }}
          />
        </Image2>
      </Box>
      <Analysis />
    </Component>
  );
};

export default Home;

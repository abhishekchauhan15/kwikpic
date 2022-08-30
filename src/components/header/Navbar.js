import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  Button,
} from "@mui/material";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.svg";

const StyledHeader = styled(AppBar)`
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);

  position: fixed;
  height: 15%;
  font-size: 16px;
  font-family: "Gilmer", "sans-serif";
  display: flex;
  justify-content: center;
  align-items: left;
`;

const Header = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-left: 150px;
  position: relative;
  top: 30px;
`;

const Component = styled(Typography)`
  display: inline;
  font-size: 20px;
  font-weight: 500;
  color:#E0E0E0;
`;

const DownloadBtn = styled("button")({
  position: "relative",
  padding: "18px",
  left: "1130px",
  top: "-30px",
  borderRadius: "50px",
  width: "200px",
  height: "60px",
  fontSize: "18px",
  backgroundColor: "#1A1A1A",
  color: "#fff",
  border: "none",
  display: "flex",
  justifycontent: "center",
  alignItems: "center",
  fontWeight: "600",
});

const Navbar = () => {
  return (
    <StyledHeader>
      <Header>
        <Component>
          {" "}
          <img src={logo} alt="" style={{ height: "36px", width: "30px" }} />
        </Component>

        <NavLink to="/">
          {" "}
          <Component>Home</Component>
        </NavLink>

        <Component>
          {" "}
          <NavLink to="/about"> About us</NavLink>{" "}
        </Component>
        <Component>Faq</Component>
        <Component>Roadmap</Component>
        <Component>Careers</Component>
        <Component>Blog</Component>
      </Header>
      <DownloadBtn>
        Download{" "}
        <div
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "24px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        >
          <img
            src={arrow}
            alt="arrow"
            style={{ marginTop: "12px", height: "6px" }}
          />{" "}
        </div>
      </DownloadBtn>
    </StyledHeader>
  );
};

export default Navbar;

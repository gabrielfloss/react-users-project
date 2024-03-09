import styled from "styled-components";
import Background from "../../assets/background1.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height: 100%;
  min-height: calc(100vh - 170px);
`;

export const ContainerItens = styled.div`
 height: 100%;
 min-height: calc(100vh - 170px);

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  padding: 50px 36px;

  border-radius: 61px 61px 0px 0px;

  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 328.92px;
  height: 176.26px;
`;

export const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;

  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  color: #ffffff;

  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;

  margin-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 15px, 20px, 15px, 25px;
  border-radius: 14px;

  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;

  border: none;
  outline: none;
  color: #ffffff;

  padding-left: 25px;

  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  margin-bottom: 34px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  background: #000000cc;
  margin-bottom: 30px;

  font-size: 17px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;

  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export const A = styled(Link)`
 width: 342px;
  height: 74px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  background: #000000cc;
  margin-bottom: 30px;

  font-size: 17px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;

  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }

`

export const User = styled.li`
  width: 342px;
  height: 58px;
  border-radius: 14px;

  border: 1px solid #ffffff33;
  background: #ffffff40;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  border: none;
  outline: none;

  color: #ffffff;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
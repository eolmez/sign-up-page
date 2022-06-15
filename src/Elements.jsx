import styled, { createGlobalStyle, css } from "styled-components";
import { RiGoogleLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Source Sans Pro", sans-serif;
  }  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
`;

export const Wrapper = styled.div`
  margin: 20px auto;
  border-radius: 30px;
  background: white;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpArea = styled.div`
  display: flex;
  margin: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  @media screen and (max-width: 960px) {
    box-shadow: none;
    border: 1px solid #013b84;
  }
`;

export const Image = styled.img`
  object-fit: content;
  width: 500px;
  height: 750px;
  background: #acdbdf;
  border-radius: 30px 0 0 30px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const FormArea = styled.div`
  display: flex;
  width: 550px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 30px;
`;

export const LoginArea = styled.div`
  display: flex;
  margin-right: 40px;
  padding: 1rem;
  align-self: flex-end;

  @media screen and (max-width: 960px) {
    align-self: flex-start;
    margin-left: 28px;
  }
`;

export const LoginP = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-right: 1rem;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid #013b84;
  border-radius: 30px;
  width: 100px;
  height: 30px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  ${(props) =>
    props.create &&
    css`
      background: #013b84;
      color: white;
      width: 100%;
      height: 40px;
      border: none;
      align-self: center;
    `}
  ${(props) =>
    props.google &&
    css`
      display: flex;
      align-items: center;
      background: #de5246;
      color: white;
      width: 100%;
      height: 40px;
      border: none;
      margin-right: 10px;
    `}

  ${(props) =>
    props.linkedin &&
    css`
      display: flex;
      align-items: center;
      background: #0e76a8;
      color: white;
      width: 100%;
      height: 40px;
      border: none;
      margin-left: 10px;
    `}
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContent = styled.div`
  margin-left: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  height: auto;
  width: 100%;
  display: grid;
  margin: 0 auto;
  padding: 30px 10px;
`;

export const FormH1 = styled.h1`
  color: #013b84;
  font-size: 20px;
  font-weight: 600;
  text-align: start;
`;

export const FormP = styled.p`
  color: #8a8a8a;
  font-size: 12px;
  font-weight: 400;
  text-align: start;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
  font-weight: 600;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 1px solid gray;
  border-radius: 5px;

  :focus {
    outline: none;
    border: 2px solid #013b84;
  }
`;

export const Terms = styled.div`
  display: inline;
`;

export const Separator = styled.div`
  align-self: center;
  margin: 20px 0;
  width: 350px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  hr {
    width: 100%;
    font-size: 14px;
    font-weight: 700;
  }

  p {
    margin: auto 10px;
  }
`;
export const SocialButtons = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
`;

export const GoogleIcon = styled(RiGoogleLine)`
  width: 30px;
  height: 30px;
  color: #de5246;
  background: white;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 20px;
`;

export const LinkedinIcon = styled(TiSocialLinkedin)`
  width: 30px;
  height: 30px;
  color: #0e76a8;
  background: white;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 20px;
`;

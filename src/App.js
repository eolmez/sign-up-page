import svg_image from "./images/image-1.svg";
import {
  GlobalStyle,
  Wrapper,
  SignUpArea,
  Image,
  FormArea,
  LoginArea,
  LoginP,
  Button,
  FormWrapper,
  FormContent,
  Form,
  FormH1,
  FormP,
  FormLabel,
  FormInput,
  Separator,
  SocialButtons,
  GoogleIcon,
  LinkedinIcon,
  Terms,
} from "./Elements";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <SignUpArea>
          <Image src={svg_image} alt="svg_image" />

          <FormArea>
            <LoginArea>
              <LoginP>Already have an account?</LoginP>
              <Button>Login</Button>
            </LoginArea>
            <FormWrapper>
              <FormContent>
                <Form>
                  <FormH1>Let's get your account setup!</FormH1>
                  <FormP>ENTER YOUR PERSONAL DETAIL</FormP>
                  <FormLabel htmlFor="for">FULL NAME</FormLabel>
                  <FormInput
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                  <FormLabel htmlFor="for">EMAIL ADDRESS</FormLabel>
                  <FormInput
                    type="email"
                    placeholder="Email address"
                    required
                  />
                  <FormLabel htmlFor="for">PASSWORD</FormLabel>
                  <FormInput type="password" placeholder="Password" required />
                  <Terms>
                    <FormInput type="checkbox" id="check" name="check" />
                    <FormLabel htmlFor="check">
                      I agree to the Terms and Conditions
                    </FormLabel>
                  </Terms>
                </Form>
                <Button create>Create Account</Button>
                <Separator>
                  <hr />
                  <p>Or</p>
                  <hr />
                </Separator>
                <SocialButtons>
                  <Button google>
                    <GoogleIcon />
                    Sign up with Google
                  </Button>
                  <Button linkedin>
                    <LinkedinIcon />
                    Sign up with LinkedIn
                  </Button>
                </SocialButtons>
              </FormContent>
            </FormWrapper>
          </FormArea>
        </SignUpArea>
      </Wrapper>
    </>
  );
}

export default App;

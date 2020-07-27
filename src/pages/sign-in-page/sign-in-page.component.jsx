import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import workingImage from "../../asset/119-working.png";
import github from "../../asset/githhub.svg";
import linkedIn from "../../asset/linkedIn.svg";
import twitter from "../../asset/twitter.svg";

import "./sign-in-page.styles.scss";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="signin-heading">Sign In to access premium services!</h1>
      <div className="u-container signin">
        <form class="signin-form">
          <div className="img__container">
            <img src={workingImage} alt="Macbook Computer." />
          </div>

          <h2 className="sub-title">Signin using Email ID and Password</h2>

          <div className="input__group">
            <FormInput
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Enter your email..."
              handleChange={(value) => setEmail(value)}
            />
          </div>

          <div className="input__group">
            <FormInput
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter your password..."
              handleChange={(value) => setPassword(value)}
            />
          </div>

          <CustomButton type="submit">Sign me in!</CustomButton>

          <small>
            <Link to="/signup">Don't have an account?</Link>
          </small>

          <div className="diff__signin">
            <button className="signin__button">
              <img src={github} alt="Github Logo" />
            </button>
            <button className="signin__button">
              <img src={linkedIn} alt="LinkedIn Logo" />
            </button>
            <button className="signin__button">
              <img src={twitter} alt="Twitter Logo" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;

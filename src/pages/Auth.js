import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';

import Logo from '../images/logos/logo-flat.png';
import google from '../images/svgs/google.svg';
import fb from '../images/svgs/fb.svg';
import { useHistory } from 'react-router';
// import { signin, signup } from '../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const history = useHistory();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initialState);

  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // signup(form, history);
    } else {
      // signin(form, history);
    }

    console.log(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      //   dispatch({ type: AUTH, data: { result, token } });
      console.log(result, token);

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  return (
    <div className="auth">
      <div className="wrapper">
        <div className="brand">
          <img src={Logo} />
        </div>
        <div className="component">{isSignup ? 'Sign Up' : 'Login'}</div>

        {/* Inputs */}
        <form onSubmit={handleSubmit}>
          {isSignup ? (
            <>
              <div className="auth-input">
                <input type="text" name="firstName" placeholder="First Name *" onChange={handleChange} />
              </div>
              <div className="auth-input">
                <input type="text" name="lastName" placeholder="Last Name *" onChange={handleChange} />
              </div>
              <div className="auth-input">
                <input type="email" name="email" placeholder="Email Address *" onChange={handleChange} />
              </div>
              <div className="auth-input">
                <input type="password" name="password" placeholder="Password *" onChange={handleChange} />
              </div>
              <div className="auth-input">
                <input type="password" name="confirmPassword" placeholder="Confirm Password *" onChange={handleChange} />
              </div>
            </>
          ) : (
            <>
              <div className="auth-input">
                <input type="email" name="email" placeholder="Email Address *" onChange={handleChange} />
              </div>
              <div className="auth-input">
                <input type="password" name="password" placeholder="Password *" onChange={handleChange} />
              </div>
            </>
          )}

          <div className="providers">
            <div className="google">
              <button type="submit">
                <div>
                  {/* <Image src={google} /> */}
                  <p>{!isSignup ? 'Login' : 'Sign Up'}</p>
                </div>
              </button>
            </div>

            <GoogleLogin
              clientId="564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com"
              render={(renderProps) => (
                <div className="google">
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <div>
                      <img src={google} />
                      <p>Continue with Google</p>
                    </div>
                  </button>
                </div>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />

            <div className="facebook">
              <button>
                <div>
                  <img src={fb} />
                  <p>Continue with Facebook</p>
                </div>
              </button>
            </div>
          </div>
        </form>

        <div className="signup">
          <div>
            <span>{isSignup ? 'Already have an account ?' : "Don't have an account ?"}</span>
            <button onClick={switchMode}>
              <h3>{isSignup ? 'Sign in' : 'Sign Up'}</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import refreshImg from '../assets/refresh.png'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

     // Define validation rules for each field
     const validationRules = {
      fullname: /^[a-zA-Z\s]+$/,
      phone: /^\d{10}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      msg: /.*/,
    };

    // Check if the input value matches the validation rules
    if (!validationRules[name].test(value)) {
      setErrors({ ...errors, [name]: `Please enter a valid ${name}` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }

    // Check if the input value contains exactly 10 digits
    // if (/^\d{10}$/.test(value)) {
    //   setError('');
    // } else {
    //   setError('Please enter a 10-digit phone number');
    // }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      alert(
        `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what is whant to say : ${data.msg} `
      );

      navigate("/");
      // Handle form submission
      console.log("Captcha value:", captchaValue);
    } else {
      alert("Please complete the reCAPTCHA.");
    }
  };

  return (
    <>
      <div style={{ width: "100%" }} className="row">
        <div style={{ width: "40%" }} className="col-md-5 m-4 ">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_twijbubv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <form
          style={{ width: "40%" }}
          className="formCP col-md-5 m-4 "
          onSubmit={formSubmit}
        >
          <h1 style={{ fontSize: 30 }}>Contact Us</h1>
          <p style={{ fontSize: 20 }}>Enter Your Details </p>

          <div>
            <label htmlFor="name">Name*:</label>
            <input
              type="text"
              id="name"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
            {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname}</p>}
          </div>

          <div>
            <label>Phone:</label>
            <input
              type="number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="Your mobile number"
            />

             {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
          </div>

          <div>
            <label>Email*:</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
            className="mt-3"
          >
            <label>Message*</label>
            <textarea
              rows="3"
              name="msg"
              value={data.msg}
              onChange={handleChange}
              placeholder="Enter Your Message Here"
              required
            />
            {errors.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
          </div>

          <div>
            {/* <label>Captcha*:</label>
            <input
              name="captcha"
              type="text"
              tabIndex="6"
              className="form-control"
              placeholder="Captcha Text"
            /> */}

            <div style={{display:'flex', justifyContent:'center'}}>
              <ReCAPTCHA
                sitekey="6LcoKwUpAAAAADeUSvJTaXjvPjTX1mRrcRVeAH57"
                onChange={handleCaptchaChange}
              />
            </div>
            {/* <div style={{width:'40%'}}>
              <a
                id="ContentPlaceHolder1_lnkRefreshCaptcha"
                href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$lnkRefreshCaptcha','')"
              >
                <img
                  src={refreshImg}
                  style={{ fontSize: "40px" }}
                  alt="Refresh"
                />
              </a>
            </div> */}
          </div>

          <button className="btn my-4" type="submit">
            Submit form
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

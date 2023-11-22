import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.username === '' || formData.email === '' || formData.message === '') {
      setFormError(true);
    } else {
      setLoading(true);
      // const sendEmail = (e) => {
      //   e.preventDefault();
      //   emailjs.sendForm('service_8tth1ev', 'template_k9jxkc4', form.current, 'rjNsk4NcuMug3qnm4')
      //     .then((result) => {
      //         console.log(result.text);
      //     }, (error) => {
      //         console.log(error.text);
      //     });
      // };
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };
      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ogunmolamaryayobami@gmail.com" className="p-text">ogunmolamaryayobami@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+2349077567469" className="p-text">+(234) 907 756 7469</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          {
            formError ? (
              <p style={{ color: 'red' }}>ERROR! Please fill all input fields before sending message.</p>
            ) : (
              <p />
            )
          }

          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);

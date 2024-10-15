import React, { useRef, useState } from 'react';
import contact from "../assets/contact.png";
import emailjs from '@emailjs/browser';;

function ContactUs() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // Define isSubmitted state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v6hc3cv","template_39y8oun", form.current, {
        publicKey: 'j8rLrHqsexJJYblb3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true); // Set isSubmitted to true upon successful submission
          alert('Thank you for your message!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-us-container">
      <div className="contact-image-container">
        <img src={contact} alt="Contact Us" />
      </div>
      <div className="contact-info">
        <h2>Phone:</h2>
        <p>+91 9842018689</p>
        <h2>Email:</h2>
        <p>ramesh@gmail.com</p>
        <h2>Address:</h2>
        <p>136/8, PK Complex, Ettimarathupatti Four Road, Annasagaram post, Dharmapuri, Tamil Nadu, 636704.</p>
        <h2>GSTIN :</h2>
        <p>33ADRFS4031R2ZF</p>
      </div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="user_name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" required />
        <label htmlFor="message">Have any queries?</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        {isSubmitted && <p>Your message was sent successfully!</p>}
      </form>
      <style>
        {`
          .contact-us-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 900px;
            margin: 0 auto;
            margin-top:80px;
            padding: 40px;
            background: #cefad0;
          }

          .contact-info {
            text-align: center;
            margin-right: 20px;
          }

          .contact-info h2 {
            margin-bottom: 5px;
          }

          .contact-info p {
            margin-bottom: 10px;
          }

          .contact-image-container img {
            max-width: 100%;
            border-radius: 10px;
            height: 300px;
          }

          .contact-form {
            width: 50%;
            text-align: left;
          }

          .contact-form label {
            font-weight: bold;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 8px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            margin-bottom: 10px;
          }

          .contact-form textarea {
            height: 100px;
        
          }

          .contact-form button {
            padding: 8px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
          }

          .contact-form button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
}

export default ContactUs;

import emailjs from 'emailjs-com'
import React from 'react'

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_4zmrqgi', 'template_4c0fmp6', e.target, 'XuEV1_8-8ZfDQ9q4h')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div>
            <div className="form">
                <form onSubmit={sendEmail}>
                  <div>
                    <label>Name: </label>
                    <input type="text" name="name" className="formBox" />
                  </div>
                  <div>
                    <label>Email: </label>
                    <input type="email" name="email" className="formBox" />
                  </div>
                  <div>
                    <label>Subject: </label>
                    <input type="text" name="subject" className="formBox" />
                  </div>
                  <div>
                    <label>Message: </label>
                    <textarea name="message" className="formBox" />
                  </div>
                  <input type="submit" value="Send" />
                </form>
            </div>
        </div>
      );
}
'use client';

import React, { useRef } from 'react';
import useEmailForm from '@/hooks/useEmailForm';

const Contact: React.FC = () => {
  const { formData, loading, handleInputChange, handleFormSubmit } =
    useEmailForm();

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="flex flex-col items-center justify-center pt-20">
      <div>
        <h2>Contact Form</h2>

        <form onSubmit={handleFormSubmit} ref={formRef}>
          <div>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="yourEmail@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message here..."
              required
            />
          </div>
          <div>
            <button type="submit">Send</button>
            {loading && <p>Sending email...</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

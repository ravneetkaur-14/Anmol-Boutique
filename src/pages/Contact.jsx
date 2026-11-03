import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');
  const apiBase = import.meta.env.VITE_API_BASE_URL || '/api';

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('');
    const form = event.currentTarget;
    try {
      const response = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        body: new FormData(form),
      });
      if (!response.ok) throw new Error('Unable to send message');
      form.reset();
      setStatus('Message sent successfully.');
    } catch (error) {
      setStatus('Unable to send your message. Please try again.');
    }
  }

  return (
    <main>
      <section className="contact-box">
        <h2>Contact Us</h2>
        <form method="POST" action={`${apiBase}/contact`} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="text" name="phone" placeholder="Enter Phone Number" required />
          <textarea name="message" placeholder="Enter Message" required />
          <button type="submit">Send Message</button>
        </form>
        {status && <p role="status">{status}</p>}
      </section>
    </main>
  );
}

export default Contact;

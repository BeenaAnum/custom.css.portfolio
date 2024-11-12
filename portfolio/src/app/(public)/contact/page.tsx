export default function Contact() {
    return (

      <section className="contact">
        <div className="content">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <h2>Contact</h2>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

    );
  }
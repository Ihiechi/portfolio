import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_qbss1pc",
        "template_l302xzf",
        form.current,
        "bbP1OR-iT3uov9zwp",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        console.log("SUCCESS TRIGGERED");
        form.current.reset(); // clears inputs

        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-50 pt-16 md:pt-20 lg:pt-24 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Me
          </h2>
          <p className="text-gray-600 mt-3">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Get in touch
            </h3>
            <p className="text-gray-600 mb-6">
              I’m open to freelance work, collaborations, and full-time roles.
            </p>

            <p className="mb-3 text-gray-700">
              📧 Email: ihechibethel5@gmail.com
            </p>
             <p className="mb-3 text-gray-700">
             ☎️ Phone number: +49 1639070469
            </p>
            <p className="mb-3 text-gray-700">🌍 Location: Berlin, Germany</p>
          </div>

          {/* Right: Form */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {success && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg mt-4 text-center">
                  Message sent successfully ✅
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

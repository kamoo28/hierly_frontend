// import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExclamationCircle } from "react-icons/fa"; // React Icons
// import Footer from '../components/Footer'

// const ContactUs = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !message) {
//       setError("All fields are required.");
//       setSuccess("");
//       return;
//     }

//     setError("");
//     setLoading(true);

//     // Web3 Form API endpoint and API key (replace with your actual details)
//     const endpoint = "https://api.web3forms.com/submit";
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("message", message);
//     formData.append("apikey", "YOUR_API_KEY");  // Replace with your API key

//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();

//       if (data.success) {
//         setSuccess("Thank you for reaching out! We will get back to you shortly.");
//         setName("");
//         setEmail("");
//         setMessage("");
//       } else {
//         setError("Something went wrong, please try again.");
//       }
//     } catch (error) {
//       setError("Error submitting the form. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <><div className="min-h-screen bg-gray-100 text-gray-800 px-20 py-20">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-5xl font-extrabold text-center mb-10 text-green-700">
//           Contact Us
//         </h1>

//         <section className="mb-16">
//           <h2 className="text-3xl font-bold mb-4">📩 Get in Touch</h2>
//           <p className="text-lg leading-relaxed mb-6">
//             Have questions, feedback, or an issue you'd like to report? We're here to help!
//             Use the form below to get in touch with us, and we'll get back to you as soon as
//             possible.
//           </p>

//           <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-lg font-semibold mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
//                   required />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-lg font-semibold mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
//                   required />
//               </div>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="message" className="block text-lg font-semibold mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="5"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
//                 required />
//             </div>

//             <button
//               type="submit"
//               className="mt-6 w-full py-4 rounded-lg text-lg font-bold bg-green-600 text-white hover:bg-green-700 focus:outline-none transition"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Submit"}
//             </button>

//             {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
//             {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
//           </form>
//         </section>

//         {/* Report Issues */}
//         <section className="mt-16">
//           <h2 className="text-3xl font-bold mb-4">⚠️ Report an Issue</h2>
//           <p className="text-lg leading-relaxed mb-6">
//             If you're facing any technical issues with the website or need to report something,
//             feel free to use the contact form above or directly let us know. We're always here
//             to assist you!
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-center">
//               <FaExclamationCircle className="text-red-600 mr-4" size={24} />
//               <p className="text-lg">We take every issue seriously and aim to resolve them quickly.</p>
//             </div>
//             <div className="flex items-center">
//               <FaPhone className="text-green-600 mr-4" size={24} />
//               <p className="text-lg">You can also reach us at: <strong>+123-456-7890</strong></p>
//             </div>
//             <div className="flex items-center">
//               <FaEnvelope className="text-blue-600 mr-4" size={24} />
//               <p className="text-lg">Email us at: <strong>support@jobquest.com</strong></p>
//             </div>
//             <div className="flex items-center">
//               <FaMapMarkerAlt className="text-yellow-600 mr-4" size={24} />
//               <p className="text-lg">Visit our office: <strong>123 Main St, City, Country</strong></p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//     <Footer /></>
//   );
// };

// export default ContactUs;


import React, { useState } from "react";
import { Mail, Phone, MapPin, AlertCircle, Send, MessageCircle } from "lucide-react";
import Footer from '../components/Footer';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    setError("");
    setLoading(true);

    const endpoint = "https://api.web3forms.com/submit";
    const formData = new FormData();
    formData.append("access_key", "c34f6bba-d42e-4b73-9208-f85cfb3bbdad"); // Replace with your real key
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setSuccess("Thank you for reaching out! We will get back to you shortly.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Something went wrong, please try again.");
      }
    } catch (error) {
      setError("Error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              💬 Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions or need support? We're here to help you succeed in your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl mr-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
              </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
                {success && (
                  <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-green-500 mr-2" />
                    <p className="text-green-700">{success}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-200">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-2xl mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                      <p className="text-gray-600">support@hierly.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-2xl mr-4">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-2xl mr-4">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                      <p className="text-gray-600">123 Business Ave, Suite 100</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Info */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-10 text-white shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-2xl mr-4">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold">Need Help?</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  We're committed to providing excellent support. Whether you have questions about our platform, 
                  need technical assistance, or want to report an issue, we're here to help.
                </p>
                <div className="space-y-3 text-white/90">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Quick response times (usually within 24 hours)
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Dedicated support team
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Comprehensive help documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;


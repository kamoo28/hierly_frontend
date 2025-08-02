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
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExclamationCircle } from "react-icons/fa";
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
      <div className="min-h-screen bg-gray-100 text-gray-800 px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-10 text-green-700">
            Contact Us
          </h1>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">📩 Get in Touch</h2>
            <p className="text-lg leading-relaxed mb-6">
              Have questions, feedback, or an issue you'd like to report? We're here to help!
              Use the form below to get in touch with us, and we'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-4 rounded-lg text-lg font-bold bg-green-600 text-white hover:bg-green-700 focus:outline-none transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
              {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
            </form>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-4">⚠️ Report an Issue</h2>
            <p className="text-lg leading-relaxed mb-6">
              If you're facing any technical issues with the website or need to report something,
              feel free to use the contact form above or directly let us know. We're always here
              to assist you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FaExclamationCircle className="text-red-600 mr-4" size={24} />
                <p className="text-lg">We take every issue seriously and aim to resolve them quickly.</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-600 mr-4" size={24} />
                <p className="text-lg">You can also reach us at: <strong>+123-456-7890</strong></p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-4" size={24} />
                <p className="text-lg">Email us at: <strong>support@jobquest.com</strong></p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-yellow-600 mr-4" size={24} />
                <p className="text-lg">Visit our office: <strong>123 Main St, City, Country</strong></p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;


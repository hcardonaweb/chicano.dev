import React from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState(""); // result is hidden

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7980f3d-3e8f-47d4-a925-dea4a25759fc");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="FormApp">
      <div className="flex items-center my-20">
        <div className="container mx-auto max-w-4xl">
          <div className="mx-auto my-10">
            <div className="text-center mb-10">
              <h1 className="my-3 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Reach Out!
              </h1>
              <p className="text-gray-500">
                Like what you see? Reach out by sending me an email, or feel
                free to use any of the social media links at the bottom of this
                page.
              </p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={onSubmit}>
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Chicano Dev Contact Form"
                />

                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Michael"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="surname"
                      required
                      placeholder="Scott"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                </div>

                <div className="flex mb-6 space-x-4">
                  <div className="w-full md:w-1/2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="michaelscott@dundermifflin.net"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+1 (123) 456-789"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {/* 
              <div className="text-center">
                <h3 class="m-auto text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Thanks for reaching out! <br />
                  <span className="text-blue-600">
                    I will be in touch shortly.
                  </span>
                </h3>
              </div>
               */}
              {/* <span>{result}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

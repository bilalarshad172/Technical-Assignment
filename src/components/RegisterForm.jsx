import React, { useState } from "react";
import toast from "react-hot-toast";
import assistant from "../assets/Assistantbot.png";
import frame from "../assets/group101.png";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      // Basic form validation
      if (formData.name.trim() === "" || formData.email.trim() === "") {
        toast.error("Please fill out all required fields.");
        console.log("Please fill out all the fields.");
        return;
      }

      // Retrieve form submissions from localStorage and ensure it's an array
      let storedData = JSON.parse(localStorage.getItem("formData"));

      // Check if storedData is not an array and reset if necessary
      if (!Array.isArray(storedData)) {
        storedData = [];
        localStorage.setItem("formData", JSON.stringify(storedData));
      }

      // Check if the form data already exists
      const isAlreadySubmitted = storedData.some(
        (data) =>
          data.name === formData.name &&
          data.email === formData.email &&
          data.companyName === formData.companyName
      );

      if (isAlreadySubmitted) {
        toast.error("Form already submitted!");
        console.log("Form already submitted");
        return;
      }

      // Add new form data to stored data
      storedData.push(formData);
      localStorage.setItem("formData", JSON.stringify(storedData));

      // Display success message
      toast.success("Form submitted successfully!");
      console.log("Form submitted successfully");

      // Clear the form fields after submission
      setFormData({
        name: "",
        companyName: "",
        email: "",
      });
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row pt-10">
        <div className="w-full md:w-1/2 relative mb-6 md:mb-0 hidden md:block">
          {/* Hidden on mobile, shown on medium screens and above */}
          <img
            className="absolute inset-0 w-full h-full object-cover "
            src={frame}
            alt="background-dots"
          />
          {/* Always shown, adjust size as needed */}
          <img
            src={assistant}
            alt="registration-logo"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white rounded-lg">
          <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold my-4">Registration</h1>
            <p className="text-xl font-semibold mt-6 text-[#515151]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae, ullam.
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex flex-col">
                <label className="text-xl font-semibold" htmlFor="name">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  className="h-12 border mt-2 px-4 rounded-md"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength="3"
                  maxLength="15"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 flex flex-col">
                <label className="text-xl font-semibold" htmlFor="company-name">
                  Company Name
                </label>
                <input
                  className="h-12 border mt-2 px-4 rounded-md"
                  placeholder="Enter your company name"
                  type="text"
                  id="company-name"
                  name="companyName"
                  maxLength="15"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 flex flex-col">
                <label className="text-xl font-semibold" htmlFor="email">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  className="h-12 border mt-2 px-4 rounded-md"
                  placeholder="Enter your email address"
                  type="email"
                  id="email"
                  name="email"
                  required
                  minLength="3"
                  maxLength="50"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <button
                  className="bg-[#F89D21] rounded-full px-10 py-2 text-white shadow-lg font-semibold w-full md:w-auto"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;

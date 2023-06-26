import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email is valid
    if (
      !email ||
      !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    ) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you can handle the form submission, e.g., send the email to a backend API
    console.log(`Submitting email: ${email}`);

    // Clear the input field and error message
    setEmail("");
    setError("");
  };

  return (
    <div className="p-20 bg-white">
      <div className="p-8 bg-purple-950 rounded-3xl">
        {/* Text */}
        <div className="text-center text-white">
          <h2 className="mb-2 text-xl font-bold">
            Subscribe to our Newsletter
          </h2>
          <p className="text-lg">
          Lorem lpsum is simply dummy text of the printing
          </p>
        </div>

        {/* Email Input and Submit Button */}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-full"
            />
            <button type="submit" className="px-4 py-2 bg-orange rounded-full text-white cursor-pointer">
              Send
            </button>
          </div>
        </form>

        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Newsletter;

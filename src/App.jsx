import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const number =
      import.meta.env.VITE_WHATSAPP_NUMBER || "254723914683";

    const text = `Hello, I would like a quote:

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Details: ${form.message}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div>
      {/* HEADER */}
      <header className="bg-indigo-800 text-white text-center py-4 text-lg font-semibold">
        The Bridge Recoveries Solutions Limited
      </header>

      {/* FORM SECTION */}
      <div className="flex justify-center items-center py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">
            Request a Quote
          </h2>

          {/* NAME */}
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* SERVICE */}
          <div>
            <label className="block text-sm mb-1">
              Select Service
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Choose...</option>
              <option value="Moving">Moving</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Relocation">Relocation</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm mb-1">
              Additional Details
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-800 transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>

      {/* SERVICES SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Services
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm md:text-base font-semibold text-gray-800">
          
          {/* COLUMN 1 */}
          <div className="space-y-2">
            <p>Relocation</p>
            <p>Services</p>
            <p>Commercial</p>
            <p>And</p>
            <p>Domestic</p>
            <p>Relocation</p>
            <p>Services</p>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-2">
            <p>Cleaning</p>
            <p>Services</p>
            <p>Commercial</p>
            <p>and</p>
            <p>domestic</p>
            <p>cleaning</p>
            <p>services</p>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-2">
            <p>Marine</p>
            <p>Cargo</p>
            <p>Recoveries</p>
            <p>Survey and</p>
            <p>subrogation</p>
            <p>Services</p>
          </div>

        </div>
      </div>

      
      {/* ABOUT */}
      <div className="text-center px-6 pb-10 max-w-xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">About Us</h3>
        <p className="text-gray-600">
          We provide reliable moving and cleaning services across Kenya
          with professionalism and care.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="bg-indigo-800 text-white text-center py-3 text-sm">
        © 2026 The Bridge Recoveries Solutions Limited. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

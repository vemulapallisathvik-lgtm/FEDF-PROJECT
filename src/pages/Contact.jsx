import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-[500px] text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-6">
            Contact Us
          </h1>

          <p className="text-xl text-black mb-4">
            Email: BLOODBANK_ADMIN@gmail.com
          </p>

          <p className="text-xl text-black">
            Phone No: 1122334455
          </p>
        </div>
      </div>
    </div>
  );
}
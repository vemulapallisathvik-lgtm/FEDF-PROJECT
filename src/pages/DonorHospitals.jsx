import { useNavigate } from "react-router-dom";

export default function DonorHospitals() {
  const navigate = useNavigate();

  const hospitals = [
    {
      name: "Apollo Hospital",
      address: "Jubilee Hills, Hyderabad",
      phone: "+91 98765 43210",
    },
    {
      name: "Yashoda Hospital",
      address: "Secunderabad, Hyderabad",
      phone: "+91 98765 11111",
    },
    {
      name: "KIMS Hospital",
      address: "Begumpet, Hyderabad",
      phone: "+91 98765 22222",
    },
    {
      name: "Care Hospital",
      address: "Banjara Hills, Hyderabad",
      phone: "+91 98765 33333",
    },
    {
      name: "Sunshine Hospital",
      address: "Gachibowli, Hyderabad",
      phone: "+91 98765 44444",
    },
    {
      name: "Rainbow Hospital",
      address: "HITEC City, Hyderabad",
      phone: "+91 98765 55555",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-100 p-8">
      <h1 className="text-5xl font-extrabold text-center text-red-600 mb-4">
        Choose Hospital for Blood Donation
      </h1>

      <p className="text-center text-gray-600 text-lg mb-10">
        Select a nearby hospital and schedule your blood donation appointment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hospitals.map((hospital, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/donation-form/${encodeURIComponent(hospital.name)}`)
            }
            className="cursor-pointer bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-t-4 border-red-500"
          >
            <div className="text-6xl mb-4 animate-pulse">🏥</div>

            <h2 className="text-2xl font-bold text-red-600 mb-3">
              {hospital.name}
            </h2>

            <p className="text-gray-700 mb-2">{hospital.address}</p>
            <p className="text-gray-600">{hospital.phone}</p>

            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700">
              Donate Here
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="border border-red-600 text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-red-50"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}
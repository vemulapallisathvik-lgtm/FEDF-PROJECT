import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

export default function MapPage() {

  const hospitals = [
    {
      name: "Apollo Hospital",
      position: [17.385, 78.486],
    },
    {
      name: "City Hospital",
      position: [17.420, 78.450],
    },
  ];

  const donors = [
    {
      name: "Rahul",
      blood: "O+",
      position: [17.400, 78.470],
    },
    {
      name: "Priya",
      blood: "A+",
      position: [17.395, 78.490],
    },
  ];

  return (
    <div className="min-h-screen">

      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          Live Donor & Hospital Map
        </h1>
      </div>

      <MapContainer
        center={[17.385, 78.486]}
        zoom={12}
        style={{
          height: "90vh",
          width: "100%",
        }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            position={hospital.position}
          >
            <Popup>
              🏥 {hospital.name}
            </Popup>
          </Marker>
        ))}

        {donors.map((donor, index) => (
          <Marker
            key={index}
            position={donor.position}
          >
            <Popup>
              🩸 {donor.name}
              <br />
              Blood Group: {donor.blood}
            </Popup>
          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}
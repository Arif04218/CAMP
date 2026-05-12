import { Link } from 'react-router-dom';
import { useState } from 'react';

const Reservations = () => {

  const [reservations] = useState([
    {
      id: 1,
      customer: 'Arif',
      table: 3,
      seats: 6,
      time: '18:00'
    },
    {
      id: 2,
      customer: 'Budi',
      table: 5,
      seats: 4,
      time: '19:00'
    }
  ]);

  return (
    <div className="container">

      <h1 className="page-title">
        Daftar Reservasi
      </h1>

      <div className="card-grid">

        {reservations.map((item) => (

          <div className="card" key={item.id}>

            <h3>{item.customer}</h3>

            <p>Meja: {item.table}</p>

            <p>Kursi: {item.seats}</p>

            <p>Jam: {item.time}</p>

            <Link
              className="card-btn"
              to={`/reservations/${item.id}`}
            >
              Detail Reservasi
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Reservations;
import { useParams, useNavigate } from 'react-router-dom';

const ReservationDetail = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const reservations = [

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

  ];

  const currentId = Number(id);

  const reservation = reservations.find(
    (item) => item.id === currentId
  );

  if (!reservation) {
    return <h1>Data tidak ditemukan</h1>;
  }

  const nextReservation = () => {

    if (currentId < reservations.length) {
      navigate(`/reservations/${currentId + 1}`);
    }

  };

  const prevReservation = () => {

    if (currentId > 1) {
      navigate(`/reservations/${currentId - 1}`);
    }

  };

  return (

    <div className="container">

      <h1 className="page-title">
        Detail Reservasi
      </h1>

      <div className="detail-box">

        <p>
          <strong>ID Reservasi:</strong> {reservation.id}
        </p>

        <p>
          <strong>Nama Customer:</strong> {reservation.customer}
        </p>

        <p>
          <strong>Nomor Meja:</strong> {reservation.table}
        </p>

        <p>
          <strong>Kapasitas Kursi:</strong> {reservation.seats}
        </p>

        <p>
          <strong>Jam Reservasi:</strong> {reservation.time}
        </p>

        <div className="detail-navigation">

          <button
            className="nav-btn"
            onClick={prevReservation}
          >
            ⬅ Previous
          </button>

          <button
            className="nav-btn"
            onClick={nextReservation}
          >
            Next ➡
          </button>

        </div>

      </div>

    </div>

  );
};

export default ReservationDetail;
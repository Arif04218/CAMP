const Dashboard = () => {
  return (
    <div className="container">

      <h1 className="page-title">
        Dashboard Reservasi
      </h1>

      <div className="card-grid">

        <div className="card">
          <h3>Total Reservasi</h3>
          <p>12 Reservasi Hari Ini</p>
        </div>

        <div className="card">
          <h3>Meja Tersedia</h3>
          <p>8 Meja Kosong</p>
        </div>

        <div className="card">
          <h3>Kapasitas Kursi</h3>
          <p>40 Kursi Tersedia</p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
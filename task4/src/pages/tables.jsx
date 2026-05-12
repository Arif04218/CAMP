const Tables = () => {

  const tables = [
    {
      id: 1,
      table: 1,
      capacity: 4
    },
    {
      id: 2,
      table: 2,
      capacity: 6
    },
    {
      id: 3,
      table: 3,
      capacity: 8
    }
  ];

  return (
    <div className="container">

      <h1 className="page-title">
        Data Meja Cafe
      </h1>

      <div className="card-grid">

        {tables.map((item) => (

          <div className="card" key={item.id}>

            <h3>Meja {item.table}</h3>

            <p>Kapasitas: {item.capacity} Kursi</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Tables;
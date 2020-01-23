const Precio = (props) => {
  const { price, market_cap, percent_change_1h, percent_change_7d, percent_change_24h } = props.precio;
  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-header">
        Precio del Bitcoin
        </div>
      <div className="card-body">
        <h4 className="card-title">Precio Actual: ${Math.round(price * 100) / 100}</h4>
        <div className="d-md-flex justify-content-between">
          <p className="card-text"><span className="font-weight-bold">Última Hora: </span>{percent_change_1h} %</p>
          <p className="card-text"><span className="font-weight-bold">Últimas 24 Horas: </span>{percent_change_7d} %</p>
          <p className="card-text"><span className="font-weight-bold">Últimos 7 Días: </span>{percent_change_24h} %</p>
        </div>
      </div>
    </div>
  );
}
export default Precio;
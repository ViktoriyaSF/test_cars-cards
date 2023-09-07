export const CarItem = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  number,
  functionalities,
}) => {
  const addressCar = address.split(',').slice(-2);
  const infoCar = addressCar.concat(rentalCompany).join(' | ');

  const texInfoCar = [type, model, number, functionalities[0]].join(' | ');

  return (
    <li>
      <img src={img} alt={`car model ${make}`} width="274" height="268" />
      <ul>
        <li>
          {make}
          <span>{model}</span>,{year}
        </li>
        <li>{rentalPrice}</li>
      </ul>
      <div>
        <p>{infoCar}</p>
        <p>{texInfoCar}</p>
      </div>
      <button>Learn more</button>
    </li>
  );
};

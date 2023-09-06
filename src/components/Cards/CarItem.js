export const CarItem = ({ key, year, make, type, img, rentalPrice }) => (
  <li>
    <img src={img} alt={`car model ${make}`} width="274" height="268" />
    <ul>
      <li>{make}</li>
      <li>{type}</li>
      <li>{year}</li>
      <li>{rentalPrice}</li>
    </ul>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <button></button>
  </li>
);

import { CarItem } from './CarItem';

export const CarList = ({ cars }) => {
  return (
    <ul>
      {cars.map(car => {
        return (
          <CarItem
            key={car.id}
            year={car.year}
            make={car.make}
            type={car.type}
            img={car.img}
            rentalPrice={car.rentalPrice}
          />
        );
      })}
    </ul>
  );
};

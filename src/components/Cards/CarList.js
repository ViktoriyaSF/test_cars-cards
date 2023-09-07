import { CarItem } from './CarItem';
import { nanoid } from 'nanoid';
// import React, { Component } from 'react';

// const idCard = nanoid();
export const CarList = ({ cars }) => {
  return (
    <ul>
      {cars.map(car => {
        return (
          <CarItem
            key={nanoid()}
            img={car.img}
            make={car.make}
            model={car.model}
            year={car.year}
            rentalPrice={car.rentalPrice}
            address={car.address}
            rentalCompany={car.rentalCompany}
            number={car.id}
            type={car.type}
            functionalities={car.functionalities}
          />
        );
      })}
    </ul>
  );
};

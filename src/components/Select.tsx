import React, { FC } from "react";



const Select: FC = () => {


  return (

    <select className="select select-accent max-w-xs ">
    <option disabled selected>Pick your favorite anime</option>
    <option>One Piece</option>
    <option>Naruto</option>
    <option>Death Note</option>
    <option>Attack on Titan</option>
    <option>Bleach</option>
    <option>Fullmetal Alchemist</option>
    <option>Jojo's Bizarre Adventure</option>
  </select>

  );
};

export default Select;

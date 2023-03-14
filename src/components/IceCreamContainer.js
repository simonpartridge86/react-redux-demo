import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  return (
    <>
      <h2>Number of Ice Creams: {numOfIceCreams} </h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy {number} Ice Cream(s)
      </button>
    </>
  );
};

export default IceCreamContainer;

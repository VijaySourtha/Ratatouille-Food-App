import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CONST_URL } from "../utils";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Pop = ({ open, setOpenPopup }) => {
  const cartItems = useSelector((state) => state.cart.items);
  let totalPrice = 0;
  return (
  <div className="flex justify-center item-center h-8/12">
    <Popup className="h-8/12 " open={open} onClose={() => setOpenPopup(false)}>
      <div className="flex items-center gap-5 h-8/12 box-border rounded-lg">
        <div className="w-12/12">
          <button className="bg-red-500 border-none w-8 h-8 text-white flex items-center justify-center rounded-md float-right" onClick={() => setOpenPopup(false)}>
            X
          </button>
        </div>
      </div>
      <div className="overflow-y-scroll h-6/12 mb-3 box-border">
        {cartItems.map((item, index) => {
          totalPrice +=
            (item?.card?.info?.price
              ? item?.card?.info?.price
              : item?.card?.info?.defaultPrice) * item.quantity;
          return (
            <div key={index} className="flex justify-between mt-8 items-center">
              <div className = "flex gap-5">
                <div>
                  <img className="w-12" src={IMG_CONST_URL + item.card.info.imageId}/>
                </div>
                <div className="min-w-12">{item.card.info.name}</div>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <button className="bg-red-500 w-8 h-8 text-white flex items-center justify-center rounded-md opacity-60">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="bg-green-500 w-8 h-8 text-white flex items-center justify-center rounded-md opacity-60">
                    +
                  </button>
                </div>
                <div>
                  ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </div>
                <div>
                  <button className="bg-red-500 p-1 text-white flex items-center justify-center rounded-md opacity-60">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-100">
        <div className="flex items-center h-8">
          <h4 className="text-lg font-bold">Bill Details</h4>
        </div>
        <div className="flex justify-between h-8 gap-16">
          <p>Item Total</p>
          <p>₹ {totalPrice / 100}</p>
        </div>
        <div className="flex justify-between h-8 gap-14">
          <p>Delivery partner fee</p>
          <p>₹ {totalPrice === 0 ? 0 : 40}</p>
        </div>
        <div className="flex justify-between h-8 gap-16">
          <h3>TO PAY</h3>
          <p>₹ {totalPrice / 100 + (totalPrice === 0 ? 0 : 40)}</p>
        </div>
      </div>
      <div>
        <button className="bg-orange-500 w-16 h-8 border-none text-white flex justify-center rounded-md float-right"
          onClick={() => setOpenPopup(false)}>
          Order
        </button>
      </div>
    </Popup>
  </div>
  );
};

export default Pop;

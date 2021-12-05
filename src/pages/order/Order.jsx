import React, { useEffect } from "react";
import {   useLocation } from "react-router-dom";

const Order = () => {
  let { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const sort = searchParam.get("sort");
  useEffect(() => {
    console.log("location.pathname", sort);
  }, []);
  return <div>order</div>;
};

export default Order;

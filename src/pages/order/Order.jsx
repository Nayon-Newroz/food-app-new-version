import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

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

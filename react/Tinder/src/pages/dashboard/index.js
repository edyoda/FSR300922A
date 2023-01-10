import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";

const Dashboard = () => {

  const userInfo = useSelector((store)=>store.userInfo)

  console.log(userInfo)


  return (
    <div>
      <Header/>
      <h1>Hello, {userInfo&& userInfo.email}</h1>
    </div>
  );
};

export default Dashboard;

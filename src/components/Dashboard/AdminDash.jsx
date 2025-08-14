import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDash = ({name}) => {
  return (
    <div className="h-screen w-full p-3">
      <Header name={name}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDash;

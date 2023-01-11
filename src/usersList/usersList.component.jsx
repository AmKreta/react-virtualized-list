import React from "react";
import UserCard from "../userCard/userCard.component";
import Virtualize from "../vitualize/virtualize.component";
import "./usersList.styles.css";

const UsersList = function ({ users }) {

    if(users?.length<2)
        return null;

  return (
    <div className="container">
      {/* <div className="inner-container">
        {users.map(item=><UserCard key={item.login?.uuid} {...item}/>)}
      </div> */}
      <div className="inner-container">
        <Virtualize list={users} Component={UserCard} gap={4} keyEtractorFunction={item=>item.login.uuid}/>
      </div>
    </div>
  );
};

export default UsersList;

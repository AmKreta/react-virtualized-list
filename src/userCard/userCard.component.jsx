import React from "react";
import {
  BsFillPersonFill,
  BsGenderMale,
  BsGenderFemale,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";

import "./userCard.styles.css";

const UserCard = function (props) {
  return (
    <div className="user-card-container">
      <img src={props.picture?.large} />
      <div className="user-details">
        <div className="name-container">
          <BsFillPersonFill />
          <span>{props.name?.title} </span>
          <span>{props.name?.first} </span>
          <span>{props.name?.last}</span>
        </div>
        <div className="address-container">
          <MdLocationPin />
          <span>
            {props.location?.street?.number}
            {props.location?.street?.name}
            {props.location?.city}
            {props.location?.state}
            {props.location?.country}
            {props.location?.postcode}
          </span>
        </div>
        <div className="gender-container">
          {props.gender === "male" ? <BsGenderMale /> : <BsGenderFemale />}
          <span>{props.gender}</span>
        </div>
        <div className="email-container">
          <MdEmail />
          <span>{props.email}</span>
        </div>
        <div className="phone-container">
          <BsTelephoneFill />
          <span>{props.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

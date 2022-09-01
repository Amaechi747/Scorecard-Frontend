import React, { useState, MouseEvent, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import photo from './images/placeholder-img.png'
import { accountSettingsData } from "./data"
import { ProfileModal, Logout } from "."
import { BiRightArrowCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";


type Props = {
  handleClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  setShowModal?: any
  showModal?: boolean
  handleHover: () => void
  handleLeave: () => void
}


const DevProfileAccountSettings = (props: Props) => {
  const { handleClick, setShowModal, showModal, handleHover, handleLeave } = props;
  
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');


  return (
    <>
      <div
        onClick={(e) => handleClick(e)}
        onMouseOver={() => handleHover()}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <div>
          <img
            src={photo}
            alt="temp"
            style={{
              clipPath: "circle(50%)",
              width: "3rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div
          style={{ marginLeft: "1rem", color: "#213" }}
        >{`${firstName} ${lastName}`}</div>
      </div>

      <div onMouseLeave={() => handleLeave()}>
        {showModal && (
          <div
            style={{
              background: "#fff",
              width: "7rem",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <span style={{ display: "flex", flexDirection: "row" }}>
              <IoPersonOutline style={{ marginRight: "2rem" }} />
              <Link to={"/ProfileModal"}>Account</Link>
            </span> */}

            <span style={{ display: "flex", flexDirection: "row" }}>
              <FiSettings style={{ marginRight: "1rem" }} />
              <Link
                to={"/ProfileAccountSettings"}
                style={{ textDecoration: "none", color: '#213' }}
              >
                Settings
              </Link>
            </span>

            <span style={{ flexDirection: "row" }}>
              <div
                style={{
                  cursor: "pointer",
                  padding: "1rem",
                  width: "100%",
                  color: "#14A800",
                  display: "flex",
                  borderRadius: "10%",
                }}
              >
                <FiLogOut
                  style={{
                    marginRight: "1.3rem",
                    marginLeft: "-1rem",
                    width: "1.2rem",
                    height: "1.2rem",
                  }}
                />
                <span style={{ fontSize: "16px", lineHeight: "19px" }}>
                  Logout
                </span>
              </div>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default DevProfileAccountSettings
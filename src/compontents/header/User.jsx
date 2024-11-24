import React, { useState } from 'react'; // Import React and useState
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { logout } from '../../redux-store/AuthSlice'; // Import logout action
import ImgUser from "../../assets/images/admin.png"; // Import your image
import { AiOutlineUser, AiOutlineHeart, AiOutlineUnlock, AiOutlineQuestion, AiOutlineLogin } from "react-icons/ai"; // Import icons
import "./header.css"; // Import your CSS

function User() {
    const [openprofile, setopenprofile] = useState(false);
    const dispatch = useDispatch();
    const [user, setuser] = useState(true);

    const closeprofile = () => {
        setopenprofile(false);
    };

    const Logout = () => {
        dispatch(logout());
    };

    // Fetch user data from localStorage and handle null case
    let nameOfUser = JSON.parse(localStorage.getItem("userRegister")) || {};

    // Check if name exists before logging it
    console.log(nameOfUser.name ? nameOfUser.name : "No user found");

    return (
        <div className="user">
            <div className="profile">
                {user ? (
                    <>
                        <div className="img" onClick={() => setopenprofile(!openprofile)}>
                            <img
                                src={ImgUser}
                                alt=""
                                style={{ width: "40px", cursor: "pointer" }}
                            />
                        </div>
                        {openprofile && (
                            <div className="box__profile" onClick={() => closeprofile()}>
                                <Link to="/myaccount">
                                    <div className="box-1 d-flex column-gap-3 mb-4">
                                        <img
                                            src={ImgUser}
                                            alt=""
                                            style={{ width: "40px", cursor: "pointer" }}
                                        />
                                        <div className="who__user d-flex flex-column">
                                            <div>{nameOfUser.name ? nameOfUser.name : "Guest"}</div>
                                            <div>egypt</div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="box-2">
                                    <div className="myaccount">
                                        <Link to="myaccount">
                                            <AiOutlineUser className="myaccount__icon" />
                                            <span className="myaccount__title ps-4">
                                                My Account
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="myorder">
                                        <a href="">
                                            <AiOutlineUnlock className="myaccount__icon" />
                                            <span className="myaccount__title ps-4">My Order</span>
                                        </a>
                                    </div>
                                    <div className="mywishlist">
                                        <a href="">
                                            <AiOutlineHeart className="myaccount__icon" />
                                            <span className="myaccount__title ps-4">Wishlist</span>
                                        </a>
                                    </div>
                                    <div className="myhelp">
                                        <a href="">
                                            <AiOutlineQuestion className="myaccount__icon" />
                                            <span className="myaccount__title ps-4">Help</span>
                                        </a>
                                    </div>
                                    <div className="mylogout">
                                        <span>
                                            <AiOutlineLogin
                                                className="myaccount__icon"
                                                onClick={Logout}
                                            />
                                            <span
                                                className="myaccount__title ps-4"
                                                onClick={Logout}
                                            >
                                                Log Out
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default User;

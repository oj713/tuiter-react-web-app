import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineTwitter, AiFillHome, AiFillBell, AiOutlineUnorderedList} from "react-icons/ai";
import { FaHashtag, FaBookmark, FaUserAlt } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {PiDotsThreeCircleFill} from "react-icons/pi";

// react.js can only return 1 html element
//  must wrap kids in a div or fragment syntax <>

// in JS 'class' is a keyword, so we use 'className' instead

const NavigationSidebar = () => {
    // retrieving current URL
    const {pathname} = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = [
        {name: "Home", icon: <AiFillHome/>},
        {name: "Explore", icon: <FaHashtag/>},
        {name: "Notifications", icon: <AiFillBell/>},
        {name: "Messages", icon: <MdEmail/>},
        {name: "Bookmarks", icon: <FaBookmark/>},
        {name: "Lists", icon: <AiOutlineUnorderedList/>},
        {name: "Profile", icon: <FaUserAlt/>},
        {name: "More", icon: <PiDotsThreeCircleFill/>}
    ]
    return (
        <div className = "list-group overflow-hidden">
            <Link className = "list-group-item">
                <AiOutlineTwitter/>
            </Link>
            {links.map((link) =>
                <Link to={`/tuiter/${link.name}`} className={`list-group-item ${active === link.name ? "active" : ""}`}>
                    {link.icon} 
                    <p className = "d-none d-xl-inline-block m-2">{link.name}</p>
                </Link>
            )}
        </div>
    )
};
export default NavigationSidebar;
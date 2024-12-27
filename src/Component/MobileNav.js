import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'; 
import { servicesData, menuData } from '../utils/constant'; 
import menubanner from "../images/menu-banner.jpg"; 
import { useMediaQuery } from 'react-responsive'; 

const MobileNav = ({ onMenuClick, handleClick, setIsDrawerOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Check if the screen width is less than 992px (mobile devices)
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId); // Toggle the active dropdown
  };

  // Handle item click (close the drawer and trigger onMenuClick, handleClick)
 
  const handleItemClick = () => {
    onMenuClick && onMenuClick();
    handleClick();
    setIsDrawerOpen && setIsDrawerOpen(false);
  };

  return (
    <div className="collapse navbar-collapse" id="mobile_nav">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right"></ul>
      <ul className="navbar-nav navbar-light">
        {/* All Departments */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link"
            to="#"
            onClick={() => isMobile && toggleDropdown('departments')}
            id="navbarDropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'departments' ? 'true' : 'false'}
            onMouseEnter={!isMobile ? () => setActiveDropdown('departments') : undefined}
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            <span className="me-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-grid"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </span>
            All Departments
            {activeDropdown === 'departments' ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </Link>
          {activeDropdown === 'departments' && (
            <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
              {menuData?.departments?.map((item, index) => (
                <Link 
                  key={index} 
                  className="dropdown-item" 
                  to={item.path} 
                  onClick={handleItemClick} // Add handleItemClick here
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* About */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link"
            to="#"
            onClick={() => isMobile && toggleDropdown('about')}
            id="navbarDropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'about' ? 'true' : 'false'}
            onMouseEnter={!isMobile ? () => setActiveDropdown('about') : undefined}
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            About
            {activeDropdown === 'about' ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </Link>
          {activeDropdown === 'about' && (
            <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
              {menuData?.about?.map((item, index) => (
                <Link 
                  key={index} 
                  className="dropdown-item" 
                  to={item.path} 
                  onClick={handleItemClick} // Add handleItemClick here
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* All Services */}
        <li className="nav-item dropdown megamenu-li dmenu">
          <Link
            className="nav-link"
            to="#"
            onClick={() => isMobile && toggleDropdown('services')}
            id="dropdown01"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'services' ? 'true' : 'false'}
            onMouseEnter={!isMobile ? () => setActiveDropdown('services') : undefined}
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            All Services
            {activeDropdown === 'services' ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </Link>
          {activeDropdown === 'services' && (
            <div
              className="dropdown-menu megamenu sm-menu border-top"
              aria-labelledby="dropdown01"
            >
              <div className="row">
                {servicesData?.map((service, index) => (
                  <div key={index} className="col-sm-6 col-lg-3 border-right mb-4">
                    <div>
                      <h6 className="text-primary ps-3">{service.category}</h6>
                      {service.items?.map((item, itemIndex) => (
                        <Link 
                          key={itemIndex} 
                          className="dropdown-item" 
                          to="/Shop" 
                          onClick={handleItemClick} // Add handleItemClick here
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                {/* Image with Banner */}
                <div className="col-sm-6 col-lg-3 border-right mb-4">
                  <div className="card border-0">
                    <img
                      src={menubanner}
                      alt="Menu Banner"
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                      className="img-fluid rounded-3"
                    />
                    <div className="position-absolute ps-6 mt-8">
                      <h5 className="mb-0">Don't miss this <br /> offer today.</h5>
                      <Link 
                        to="/Shop" 
                        className="btn btn-primary btn-sm mt-3"
                        onClick={handleItemClick} // Add handleItemClick here
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Shop */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link"
            to="#"
            onClick={() => isMobile && toggleDropdown('shop')}
            id="navbarDropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'shop' ? 'true' : 'false'}
            onMouseEnter={!isMobile ? () => setActiveDropdown('shop') : undefined}
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            Shop
            {activeDropdown === 'shop' ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </Link>
          {activeDropdown === 'shop' && (
            <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
              {menuData?.shop?.map((item, index) => (
                <Link 
                  key={index} 
                  className="dropdown-item" 
                  to={item.path} 
                  onClick={handleItemClick} // Add handleItemClick here
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* Stores */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link"
            to="#"
            onClick={() => isMobile && toggleDropdown('stores')}
            id="navbarDropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'stores' ? 'true' : 'false'}
            onMouseEnter={!isMobile ? () => setActiveDropdown('stores') : undefined}
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            Stores
            {activeDropdown === 'stores' ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </Link>
          {activeDropdown === 'stores' && (
            <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
              {menuData?.stores?.map((item, index) => (
                <Link 
                  key={index} 
                  className="dropdown-item" 
                  to={item.path} 
                  onClick={handleItemClick} // Add handleItemClick here
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* Account */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link"
            to="#"
            onClick={() => isMobile && toggleDropdown('account')}
            id="navbarDropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'account' ? 'true' : 'false'}
            onMouseEnter={!isMobile ? () => setActiveDropdown('account') : undefined}
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            Account
            {activeDropdown === 'account' ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </Link>
          {activeDropdown === 'account' && (
            <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
              {menuData?.account?.map((item, index) => (
                <Link 
                  key={index} 
                  className="dropdown-item" 
                  to={item.path} 
                  onClick={handleItemClick} // Add handleItemClick here
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;

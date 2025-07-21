import React, { useContext, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaRegHeart, FaHeart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineTrackChanges } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { CartContext } from './practiceExample/cartcontext';
import CartPopup from './navCartpop/CartPopup';

function Navii() {
  const [showHomePopup, setShowHomePopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const timeoutRef = useRef(null);

  const categories = [
    'Milks and Dairies', 'Wines & Alcohol', 'Clothing & Beauty',
    'Pet Foods & Toy', 'Fast Food', 'Baking Material',
    'Vegetables', 'Fresh Seafood', 'Noodles & Rice', 'Ice Cream',
    'Wines & Alcohol', 'Clothing & Beauty', 'Pet Foods & Toy',
    'Fast Food', 'Baking Material', 'Vegetables',
    'Fresh Seafood', 'Noodles & Rice', 'Ice Cream'
  ];

  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowHomePopup(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowHomePopup(false);
    }, 150);
  };

  return (
    <div className='custom-border'>
      <Container fluid>
        <Navbar className="justify-content-between">
          <Row>
            <Col xs={6} md={4}>
              <Image src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" rounded />
            </Col>
          </Row>

          <Form>
            <div className='d-flex mainsndsearch'>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='kfgfgdfdffdg'>
                  <ul style={{ marginBottom: 0 }}>
                    <a className='allcret'>All Categories</a>
                    < li style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                      {showHomePopup && (
                        <div className="oieruet scrollable-dropdown" style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          zIndex: 1100,
                          background: '#fff',
                          border: '1px solid #ddd',
                          padding: '10px',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                          maxHeight: '250px',
                          overflowY: 'auto',
                          width: '200px'
                        }}>
                          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                            {categories.map((cat, index) => (
                              <li className="pb-1 pt-1" key={index}>
                                <a id="artfttg" href="#" style={{ textDecoration: 'none', color: '#333' }}>{cat}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              |
              <div>
                <input
                  type="text"
                  placeholder="Search for items..."
                  className='inputse'
                />
              </div>
              <div className='jkkdfdxxx'><IoSearchOutline /></div>
            </div>
          </Form>

          <Nav className="me-100%">
            <Nav.Link as={Link} to='/Compare' id='noviitag'><GoGitCompare className='me-1' />Compare</Nav.Link>
            <Nav.Link as={Link} to='/Wishlist' id='noviitag'><FaRegHeart className='me-1' />Wishlist</Nav.Link>

            {/* Cart with hover popup */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setShowCartPopup(true)}
              onMouseLeave={() => setShowCartPopup(false)}
            >
              <Nav.Link as={Link} to='/cart' id='noviitag'>
                <div className='d-flex'>
                  <div className='poiuytgjiuyds'>
                    <p className='poiuytgjiuy' style={{
                      backgroundColor: cartCount === 0 ? "transparent" : "#47c381"
                    }}>{cartCount}</p>
                  </div>
                  <IoCartOutline className='mt-1 me-1' /> Cart
                </div>
              </Nav.Link>

              {showCartPopup && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#fff',
                  border: 'none',
                  zIndex: 1100,
                }}>
                  <CartPopup />
                </div>
              )}
            </div>

            {/* Account with hover dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setShowAccountPopup(true)}
              onMouseLeave={() => setShowAccountPopup(false)}
            >
              <Nav.Link  as={Link} to='/account' id='noviitag'>
                <VscAccount className='me-1' /> Account
              </Nav.Link>

              {showAccountPopup && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  zIndex: 1100,
                  padding: '10px',
                  borderRadius: '6px',
                  fontSize:'13px',
                  fontWeight:'600',
                  color:'gray',
                }}>
                  <ul className="list-unstyled mb-0">
                    <li><Link to="/account" className="dropdown-item"><FaUser  /> My Account</Link></li>
                    <li><Link to="/order-tracking" className="dropdown-item"><MdOutlineTrackChanges /> Order Tracking</Link></li>
                    <li><Link to="/voucher" className="dropdown-item"><RiCoupon3Line  /> My Voucher</Link></li>
                    <li><Link to="/wishlist" className="dropdown-item"><FaHeart /> My Wishlist</Link></li>
                    <li><Link to="/settings" className="dropdown-item"><IoSettingsOutline  /> Setting</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to="/logout" className="dropdown-item"><FaSignOutAlt  /> Sign out</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navii;

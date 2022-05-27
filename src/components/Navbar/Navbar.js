import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaStore,
  FaRegUserCircle,
  FaRegHeart,
  FaGift,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import './Navbar.scss';
import SecondNavDropdown from './SecondNavDropdown';
import NavbarSearchBox from './NavbarSearchBox';

const Navbar = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  const goToBag = () => {
    navigate('/bag');
  };

  const goToSignIn = () => {
    navigate('/login');
  };

  // 검색 된 제품들이 상품목록 리스트에 이동해야하는 작업을 추후 진행해야함
  // const [products, setProducts] = useState([]);
  // const [productInput, setProductInput] = useState('');

  // const updateProductInput = e => {
  //   setProductInput(e.target.value);
  // };

  // const sortedProducts = products.filter(product => {
  //   return product.name.toLowerCase().includes(userInput.toLowerCase());
  // });

  return (
    <div className="Navbar">
      <div className="firstNavbar">
        <div className="firstNav">
          <div>
            <FaStore />
            <p>Store Locator</p>
          </div>
          <div onClick={goToSignIn}>
            <FaRegUserCircle />
            <p>Sign in</p>
          </div>
          <div>
            <FaRegHeart />
            <p>Wish List</p>
          </div>
          <div>
            <FaGift />
            <p>Gift Card</p>
          </div>
          <div>
            <FaMapMarkerAlt />
            <p>USA</p>
          </div>
        </div>
      </div>
      <div className="secondNavbar">
        <div className="luluLogoSide">
          <img
            className="luluLogo"
            src="/images/Navbar/lemon.png"
            alt="luluLogo"
            onClick={goToMain}
          />
        </div>
        <div className="secondNavbarCategory">
          <SecondNavDropdown />
        </div>
        <div className="secondNavbarRightSide">
          <NavbarSearchBox
          // handleChange={updateProductInput}
          />
          <img
            className="shoppingBag"
            src="/images/Navbar/shopping-bag.png"
            alt="shopping-bag"
            onClick={goToBag}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

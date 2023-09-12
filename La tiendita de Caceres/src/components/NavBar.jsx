import Brand from "./Brand";
import MenuButton from "./MenuButton";
import CategoryItem from "./CategoryItem";
import CartContainer from "./CartContainer";


const NavBar = () => {
    return(
    <nav className="navbar fixed-bottom" style={{ backgroundColor: 'rgba(233, 244, 9 , 0.3)', color: 'white', padding: '10px', marginTop: '10px' }} >
     <div className="container-fluid">
       <Brand />
       <MenuButton />
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
         <CategoryItem isActive = {false} name="Ads"/>
         </li>
         <li className="nav-item">
         <CategoryItem isActive = {false} name="Voice"/>
         </li>
         <li className="nav-item">
         <CategoryItem isActive = {false} name="Marketing"/>
         </li>
         <li className="nav-item">
         <CategoryItem isActive = {false} name="Web"/>
         </li>
         <li className="nav-item">
         <CategoryItem isActive = {true} name="Contact"/>
         </li>
       </ul>
       <CartContainer />
     </div>
    </div>
  </nav>
    );
};

export default NavBar;
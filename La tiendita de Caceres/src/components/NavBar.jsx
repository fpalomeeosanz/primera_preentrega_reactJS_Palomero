import Brand from "./Brand";
import MenuButton from "./MenuButton";
import CategoryItem from "./CategoryItem";
import CartContainer from "./CartContainer";

const NavBar = () => {
    return(
        <nav className="navbar fixed-bottom  bg-dark body" data-bs-theme="dark">
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
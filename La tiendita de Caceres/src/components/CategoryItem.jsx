const CategoryItem = ({ isActive = false, name }) => {
  return (
    <a className={`nav-link ${isActive ? 'active' : ''}`} aria-current="page" href="#">
      {name}
    </a>
  );
};

export default CategoryItem;
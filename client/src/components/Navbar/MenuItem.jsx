import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const MenuItem = ({ item, handleClick }) => {
  return (
    <li
      className='menu_item'
      onClick={handleClick}
    >
      <Link>
        <span>{item.label}</span>
        <CgChevronRight className='arrow_right' />
      </Link>
    </li>
  );
};

export default MenuItem;

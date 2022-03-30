import { Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { GiFoodTruck } from "react-icons/gi";
import { FaLongArrowAltUp } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <p><FaLongArrowAltUp />Use your browser's "back" button to undo an action</p>
      <Nav>
        <GiFoodTruck />
        <Logo to={"/"}>Easy Meals</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;

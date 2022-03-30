import { FaPizzaSlice, FaHamburger, FaBeer, FaWineBottle } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisines/Mediterranean"}>
        <FaWineBottle />
        <h4>Mediterranean</h4>
      </SLink>
      <SLink to={"/cuisines/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisines/European"}>
        <FaBeer />
        <h4>European</h4>
      </SLink>
      <SLink to={"/cuisines/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: #0047AB;
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;
export default Category;

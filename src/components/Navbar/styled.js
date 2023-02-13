import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  gap: 150px;

  padding: 57.5px 0px 38.7px 0px;

  .Logo {
    margin-top: 7px;
    width: 97.59px;
    height: 16.9px;
  }

  a {
    width: 79.54px;
    height: 31.95px;

    background: #212529;
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;

    text-align: center;

    color: #f8f9fa;

    text-decoration: none;
  }
`;
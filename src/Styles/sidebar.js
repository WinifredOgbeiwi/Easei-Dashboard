import styled from "styled-components";
export const SidebarWrapper = styled.div`
  width: 11.25rem;
  height: calc(100vh - 50px);
  background-color: var(--primary);
  position: sticky;
  top: 40px;
  color: white;
  @media (max-width: 765px) {
    width: 3rem;
  }
`;
export const SidebarItems = styled.ul`
  list-style: none;
`;
export const SidebarItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1.6rem;
  gap: 10px;
  /* margin: 0 auto; */
  @media (max-width: 765px) {
    padding: 1.6rem 1rem;
  }
  &:nth-child(1) {
    margin-top: 0;
  }

  &:hover {
    color: var(--primaryYellow);
    border-left: 2px solid var(--primaryYellow);
    background-color: var(--hover);
    @media (max-width: 765px) {
      border: none;
      background-color: n;
    }
  }
`;
export const SidebarTitle = styled.p`
  @media (max-width: 765px) {
    display: none;
  }
`;
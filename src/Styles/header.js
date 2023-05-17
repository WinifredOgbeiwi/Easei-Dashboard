import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  position: sticky;
  top: 0;
  background-color: white;
  align-items: center;
  font-size: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 765px) {
    padding: 0rem;
  }
`;
export const LogoMenu = styled.div`
  display: flex;
  padding: 10px 60px 10px 20px;
  border-right: 2px solid #efecec;
  height: 100%;
  @media (max-width: 765px) {
    padding-right: 20px;
  }
`;
export const Logo = styled.a`
  text-decoration: none;
  color: var(--primary);
  @media (max-width: 765px) {
    color: var(--primaryYellow);
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid white;
`;
export const UserDetails = styled.div`
  display: flex;
  margin-left: 20px;
  padding: 10px 0 10px 20px;
  border-left: 2px solid #efecec;
`;
export const Icon = styled.div`
  margin-right: 10px;
  @media (min-width: 766px) {
    display: none;
  }
`;
export const NotificationWrappper = styled.div`
  position: relative;
  margin-right: 10px;
  @media (max-width: 765px) {
    display: none;
  }
`;

export const NotificationNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 13px;
  height: 13px;
  top: -7px;
  right: -3px;
  background: red;
  color: white;
  border-radius: 50%;
  font-size: 8px;
`;
export const MobilNotifiNumber = styled(NotificationNumber)`
  top: 10px;
  right: 95px;
  @media (min-width: 766px) {
    display: none;
  }
`;
export const Name = styled.p`
  @media (max-width: 765px) {
    display: none;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfilePic = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  margin-right: 5px;
  object-fit: cover;
  @media (min-width: 766px) {
    display: none;
  }
  @media (max-width: 765px) {
    display: block;
  }
`;
export const MobileIcons = styled.div`
  display: flex;
  align-items: center;
`;
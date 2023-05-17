import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { Wrapper, LogoMenu, Icon, Logo, User, MobileIcons, UserDetails, NotificationWrappper, NotificationNumber,MobilNotifiNumber,Name ,Profile, ProfilePic} from '../../Styles/header'
import Pic from '../../Assests/profile.jpg'
function Header() {
    return (
        <>
            <Wrapper>
                <LogoMenu>
                    <Icon>
                        <RiMenuUnfoldFill />
                    </Icon>
                    <Logo as='a' href='/'>Easei</Logo></LogoMenu>
                <User>
                    <MobileIcons>
                    <Icon>
                        <FiSearch />
                    </Icon>
                    <AiOutlineBell />
                    </MobileIcons>
                    <UserDetails>
                        <MobilNotifiNumber>3</MobilNotifiNumber>
                        <NotificationWrappper>
                            <BsPersonCircle />
                            <NotificationNumber>3</NotificationNumber>
                        </NotificationWrappper>
                        <Name>Mayowa Omotunde</Name>
                        <Profile>
                            <ProfilePic src={Pic} alt="Article Cover" />
                            <Icon>
                                <MdOutlineKeyboardArrowDown />
                            </Icon>
                        </Profile>
                    </UserDetails>
                </User>
            </Wrapper>
        </>
    );
}

export default Header;

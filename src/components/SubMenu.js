import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenuLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    text-decoration: none;
    padding: 10px;
    color: #f5f5f5;
    list-style: none;
    font-size: 18px;
    &:hover{
        border-left: 4px solid purple;
        background: #333;
    }
`;
const SubMenuLabel = styled.span`
    margin-left: 16px;
`;
const DropDownLink = styled(Link)`
    display: flex;
    align-items: center;
    background: #333;
    font-size: 18px;
    padding-left: 3rem;
    height: 60px;
    text-decoration: none;
    color: #f5f5f5;

    &:hover{
        background: #251a35;
    }
`;
const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubNav = ()=>{
        setSubnav(!subnav);
    }
    return (
        <>
            <SubMenuLink to={item.path}  onClick={item.subNav && showSubNav}>
                <div>
                    {item.icon}
                    <SubMenuLabel>
                        {item.title}
                    </SubMenuLabel>
                </div>
                <div>
                    { item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null }
                </div>
            </SubMenuLink>   
            { subnav && item.subNav.map((item, index) => {
                return <DropDownLink to={item.path} key={index}>
                    {item.icon}
                    <SubMenuLabel>{item.title}</SubMenuLabel>
                </DropDownLink>
            })}
        </>
    )
}

export default SubMenu

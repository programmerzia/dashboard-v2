import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
const Nav = styled.div`
    background-color: #222;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`;
const Navicon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SidebarNav = styled.div`
    width: 250px;
    background-color: #222;
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${({sidebar})=>(sidebar ? '0' : '-100%')};
`;
const SidebarWrap = styled.div`
    width: 100%;
`;
export default class SideBar extends Component{
    state = {
        sidebar: false
    }
    
    showSidebar = ()=>{
        this.setState({sidebar:!this.state.sidebar})
    }
    render(){
        return(
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <Navicon to="#" onClick={this.showSidebar}>
                        <FaIcons.FaBars />
                    </Navicon>
                </Nav>
                <SidebarNav sidebar={this.state.sidebar}>
                    <SidebarWrap>
                        <Navicon to="#" onClick={this.showSidebar}>
                            <AiIcons.AiOutlineClose />
                        </Navicon>
                        {SidebarData.map((item, index)=>{
                            return <SubMenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        );
    }
}
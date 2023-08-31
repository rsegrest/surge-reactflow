import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../style/topbar.css";
import HeaderLogotype from './HeaderLogotype';
import Icon from '../../assets/icon/Icon';
import IconType from '../../assets/icon/IconType';
import { Button } from 'react-bootstrap';
// import ViewType from '../../types/ViewType';
// import Tab from '../tabs/Tab';

const TopBar = (props:{
  tabs: JSX.Element[], // JSX.Element[],
  setCurrentView?: Function|undefined,
}) => {
  return (
    <Navbar
        className="topbar"
        expand="lg"
        variant="dark"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          marginLeft: '0px',
        }}
    >
      <Container
        className="topbar-container"
        style={{
          position: 'relative',
          marginLeft: '0px',
          left: '0px',
          borderRight: '1px solid rgba(255,255,255,0.15)',
          width: '20%',
        }}
      >
        <HeaderLogotype />
        <NavLink
          to="/home"
          style={{
            paddingBottom: '0.5rem',
            backgroundColor: 'transparent',
            borderColor: 'rgb(24,24,24)'
          }}
        >
          <Icon iconType={IconType.HOME} size={20} />
        </NavLink>
      </Container>
      <Container
        style={{
          float: 'left',
        }}
      >
        {props.tabs.map((tab:JSX.Element) => (
          (
            <React.Fragment
              key={tab.props.title}
            >
              {tab}
            </React.Fragment>
          )
        ))}
        
      </Container>
    </Navbar>
  );
}
export default TopBar;
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../style/topbar.css";
import HeaderLogotype from './HeaderLogotype';
import Icon from '../icon/Icon';
import IconType from '../icon/IconType';
import { Button } from 'react-bootstrap';
import ViewType from '../types/ViewType';

const TopBar = (props:{
  setViewType: Function,
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
        <Button
          style={{
            paddingBottom: '0.5rem',
            backgroundColor: 'transparent',
            borderColor: 'rgb(24,24,24)'
          }}
          onClick={() => {
            props.setViewType(ViewType.HOME)
          }}
        >
          <Icon iconType={IconType.HOME} size={20} />
        </Button>
      </Container>
    </Navbar>
  );
}
export default TopBar;
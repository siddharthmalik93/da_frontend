import './Sidebar.css';
import { List } from "react-bootstrap-icons";
import { Navbar } from "react-bootstrap";

export default function LogoHeader({toggleSideBar}) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="clickAble" style={{ marginLeft: "30px", marginTop: "32px", marginBottom: "32px"}} >
            <Navbar.Brand onClick={toggleSideBar}>
                <List />
            </Navbar.Brand>
        </Navbar>
  );
}

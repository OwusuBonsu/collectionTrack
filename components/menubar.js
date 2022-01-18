import { useEffect, useState } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Menu() {
  const authContext = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authContext.currentUser === null) return;
    setUser(authContext.currentUser.email);
  }, []);

  const handleLogout = () => {
    authContext.signout();
  };

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <Link href="/">CollectionTrack</Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {authContext.currentUser ? (
                <NavDropdown title={authContext.currentUser.email}>
                  <NavDropdown.Item onClick={handleLogout}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link href="/login">Sign Up / Log In</Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

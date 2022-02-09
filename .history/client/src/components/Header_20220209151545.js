import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Опции" id="options">
                <NavDropdown.Item href="/archive_data_viewing">
                  Разглеждане на архив
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/plate_tolerances">
                  Допускане на плочи
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/plate_tolerances_with_card_reader">
                  Допускане на плочи (с четец на карти)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/gratings_tolerances">
                  Допускане на решетки
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/plate_operators">
                  Оператори плочи
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/gratings_operators">
                  Оператори решетки
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/lead_paste_operator">
                  Оператори - оловна паста
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/pasting_industrial_unit_password_change">
                  Промяна на парола за цех "Пастиране"
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/foundry_industrial_unit_password_change">
                  Промяна на парола за цех "Леярен"
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/serial_port">
                  Сериен порт
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

﻿import React from 'react';
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
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/plate_gratings_tolerances">
                  Допуски на плочи / решетки
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/lead_paste_tolerances">
                  Допуски на оловна паста
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/operators">
                  Оператори
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/pasting_industrial_unit_password_change">
                  Промяна на парола за цех "Пастиране"
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings/foundry_industrial_unit_password_change">
                  Промяна на парола за цех "Леярен"
                </NavDropdown.Item>
                <hr />
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

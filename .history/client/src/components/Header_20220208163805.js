import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      {/* <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <i className="fsa fa-home" /> Home
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <i className="fsa fa-cogs" />
              <NavDropdown title="Опции" id="options">
                <LinkContainer to="/archive_data_viewing">
                  <NavDropdown.Item>Разглеждане на архив</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/plate_tolerances">
                  <NavDropdown.Item>Допускане на плочи</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/plate_tolerances_with_card_reader">
                  <NavDropdown.Item>
                    Допускане на плочи (с четец на карти)
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/gratings_tolerances">
                  <NavDropdown.Item>Допускане на решетки</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/lead_paste_tolerances">
                  <NavDropdown.Item>Допускане на оловна паста</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/plate_operators">
                  <NavDropdown.Item>Оператори плочи</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/gratings_operators">
                  <NavDropdown.Item>Оператори решетки</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/Lead_paste_operator">
                  <NavDropdown>
                    Оператори - оловна паста
                  </NavDropdown>
                </LinkContainer>
                <LinkContainer to="/settings/pasting_industrial_unit_password_change">
                  <NavDropdown>
                    Промяна на парола за цех "Пастиране"
                  </NavDropdown>
                </LinkContainer>
                <LinkContainer to="/settings/foundry_industrial_unit_password_change">
                  <NavDropdown.Item>
                    Промяна на парола за цех "Леярен"
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/settings/serial_port">
                  <NavDropdown>Сериен порт</NavDropdown>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineBars } from 'react-icons/ai';
import styled from 'styled-components';
import { MainButton } from '../../App.style';
import logo from '../../assets/images/logo.svg';



const BootNavbar = () => {
	const [navScrolled, setnavScrolled] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setnavScrolled(true);
		} else {
			setnavScrolled(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);


	
	
	return (
		<>
			<NavWrapper className={navScrolled ? 'navScrolled' : ''}>
				<Navbar expand='lg'>
					<Container>
						<Navbar.Brand href='#hero'>
							<BrandLogo src={logo } alt='' />
						</Navbar.Brand>

						<Navbar.Toggle aria-controls='basic-navbar-nav'>
							<AiOutlineBars style={{ color: 'white', fontSize: '35px' }} />
						</Navbar.Toggle>

						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='navbar-nav mx-auto mb-2 mb-lg-0' >
								<NavLink href='#hero' className='nav-link'>
									Home
								</NavLink>
								<NavLink href='#features' className='nav-link'>
									Features
								</NavLink>
								<NavLink href='#pricing' className='nav-link'>
									Pricing
								</NavLink>
							</Nav>

							<Nav.Link className='p-0' href='#newsletter'>
								<MainButton>Get Started</MainButton>
							</Nav.Link>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</NavWrapper>
		</>
	);
};

export default BootNavbar;

const NavWrapper = styled.div`
	background-color: #212d45;
	position: relative;
	top: 0;
`;

// logo icons 
const BrandLogo = styled.img`
	height: 2.55rem;
	transition: 0.5s ease;
	border-radius: 50px;
	&:hover {
			background-color: #212d45;
			transform: scale(1.2);
			cursor: pointer;
		}
`;

// Navigation Links
const NavLink = styled.a`
color: white !important;
	font-size: 22px;
	margin: 0.5rem 2rem;
	line-height: 30px;
  position: relative;
	&:hover {
		color: silver !important;
		opacity: 1;
    cursor: pointer;
		transform: scale(1.2);
		left: 6px ;
	}
`;

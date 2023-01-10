import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
	const curYear = new Date().getFullYear();
	return (
		<>
			<FooterSection>
				<footer>
					<Container>
						<Row>
							<Col
								xs={12}
								lg={4}
								className='mt-4 d-flex align-items-center justify-content-center'
							>
								<Nav.Link href='/'>
									<BrandLogo src={logo} alt='' />
								</Nav.Link>
							</Col>

							<Col
								xs={12}
								lg={4}
								className='d-flex align-items-center justify-content-center justify-content-lg-end'
							>
								<p className='m-0 mt-4'>
									© ModernApp <span> {curYear} </span> | All rights reserved.
								</p>
							</Col>
						</Row>
					</Container>
				</footer>
			</FooterSection>
		</>
	);
};

export default Footer;

const FooterSection = styled.section`
	padding-top: 30px;
	padding-bottom: 0px;
	footer {
		background-color: #212d45;
		color: white;
		padding: 15px 25px;
	}
`;

const BrandLogo = styled.img`
	height: 2.25rem;
	-webkit-user-drag: none;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;

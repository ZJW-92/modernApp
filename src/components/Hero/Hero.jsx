import '@lottiefiles/lottie-player';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { MainButton, MainGradient, SectionArea } from '../../App.style';


const Hero = () => {
	return (
		<>
			<SectionArea id='hero'>
				<Container>
					<Row>
						<Col xs={12} lg={6}>
							<HeroWrapper>
								<HeroHeading>
						       Experience Your Ultimate
									<MainGradient> Mobile Application</MainGradient>
								</HeroHeading>
								<HeroDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin quam eu mollis hendrerit. Nam laoreet justo eu vehicula commodo.
								</HeroDescription>
							</HeroWrapper>
							<MainButton type='button' align="center">
								<a className='text-decoration-none text-light' href='#pricing' >
									Get Started
								</a>
							</MainButton>
						</Col>

            {/* lottie animation */}
						<Col xs={12} lg={6}>
							<lottie-player classNameName='animPlayer' style={{ width: '115%', height: '115%' }}
								autoplay background='transparent' loop speed={1} mode='normal'
								src='https://assets7.lottiefiles.com/packages/lf20_mnek7m6l.json'
								//https://assets8.lottiefiles.com/private_files/lf30_yc1xrhz7.json
								//https://assets8.lottiefiles.com/packages/lf20_zyqfid68.json
								// https://assets8.lottiefiles.com/packages/lf20_wloxwco0.json
								// https://assets7.lottiefiles.com/packages/lf20_mnek7m6l.json
							></lottie-player>
						</Col>
					</Row>
				</Container>
			</SectionArea>
		</>
	);
};

export default Hero;

const HeroWrapper = styled.div`
	margin-top: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;


const HeroHeading = styled.h1`
	color: white;
	font-size: 3rem;
	line-height: 1.3;
	font-weight: 600;
	letter-spacing: 0.035em;
`;

const HeroDescription = styled.h2`
	color: silver;
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 600;
	line-height: 2rem;
	letter-spacing: 0.025em;
	margin-top: 2rem;
	margin-bottom: 3rem;
`;

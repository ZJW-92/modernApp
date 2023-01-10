import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SectionArea } from '../../App.style';
import MobileMoc from '../../assets/images/banner-thumb.png';
import FeatureItems from '../FeatureItems';
import SectionTitle from '../SectionTitle';
import chat from '../../assets/images/feature/chat.svg'
import cloud from '../../assets/images/feature/cloud.svg'
import design from '../../assets/images/feature/design.svg'
import setting from '../../assets/images/feature/setting.svg'
import smart from '../../assets/images/feature/smart.svg'
import winner from '../../assets/images/feature/winner.svg'

const Features = () => {
	const Data = [
		{
			icon: chat,
			title: 'Smart Features',
			description:
				'Get your blood tests delivered at let home collect sample from the victory of the managements.',
		},
		{
			icon: cloud,
			title: 'Fast Performance',
			description:
				'Get your blood tests delivered at let home collect sample from the victory of the managements.',
		},
		{
			icon: design,
			title: 'Unlimited Content',
			description:
				'Get your blood tests delivered at let home collect sample from the victory of the managements.',
		},
	];


	const Data2 = [
		{
			icon: setting,
			title: 'Unlimited Customization',
			description:
				'Get your blood tests delivered at let home collect sample from the victory of the managements.',
		},
		{
			icon: winner,
			title: 'Boost Productivity',
			description:
				'Get your blood tests delivered at let home collect sample from the victory of the managements.',
		},
		{
			icon: smart,
			title: 'Customer Support',
			description:
				'Get your blood tests delivered at let home collect sample from the victory of the managements.',
		},
	];

	return (
		<>
			<SectionArea id='features'>
				<Container>
					<SectionTitle
						Heading={''}
						Highlight={'Meet exciting features of the app'}
						Description={'QUALITY FEATURES'}/>

					<FeatureItemWrap className='row'>
						<Col xs={12} lg={4}>
							<Row>
								{Data.map((i) => {
									return (
										<FeatureItems
											ItemIcon={i.icon}
											Heading={i.title}
											Description={i.description}
										/>
									);
								})}
							</Row>
						</Col>

						<Col xs={12} lg={4} className='d-flex justify-content-center'>
							<ImageWrap>
								<img src={MobileMoc} height='' alt='' />
							</ImageWrap>
						</Col>

						<Col xs={12} lg={4}>
							<Row>
								{Data2.map((i) => {
									return (
										<FeatureItems
											ItemIcon={i.icon}
											Heading={i.title}
											Description={i.description}
										/>
									);
								})}
							</Row>
						</Col>
					</FeatureItemWrap>
				</Container>
			</SectionArea>
		</>
	);
};

export default Features;

const ImageWrap = styled.div`
	max-width:100%;
	img {
		justifyContent: 'center',
		user-select:auto;
		max-width: 100%;
		max-height: 100%;

	}
`;


const FeatureItemWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

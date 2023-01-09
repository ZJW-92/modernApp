import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const FeatureItems = (props) => {
	const { ItemIcon, Heading, Description } = props;
	return (
		<>
			<Col xs={12}>
				<FeatureItem>
					<Icons>
						<img src={ItemIcon} alt='' />
					</Icons>

					<div className='ms-4'>
						<h6>{Heading}</h6>
						<p>{Description}</p>
					</div>
				</FeatureItem>
			</Col>
		</>
	);
};

export default FeatureItems;

const FeatureItem = styled.div`
	display: flex;
	text-align: left;
	padding: 18px 20px;

	h6 {
		color: #fff;
		font-size: 1.125rem;
		font-weight: 500;
		line-height: 1.25;
	}
	p {
		color: #9b9ea2;
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.75;
	}
`;

const Icons = styled.div`
	img {
		width: 27px;
	}
`;

import React from 'react';
import { MainGradient, SectionDescription, SectionHeading } from '../App.style';

const SectionTitle = (props) => {
	return (
		<>
			<SectionHeading>
				{props.Heading}
				<MainGradient>{props.Highlight}</MainGradient>
			</SectionHeading>
			<SectionDescription>{props.Description}</SectionDescription>
		</>
	);
};

export default SectionTitle;

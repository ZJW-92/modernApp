import { default as styled } from 'styled-components';

export const SectionArea = styled.section`
	padding-top: 30px;
	padding-bottom: 30px;
`;
export const MainGradient = styled.span`
	background: rgb(82, 136, 252);
	background: linear-gradient(
		90deg,
		rgba(82, 136, 252, 1) 57%,
		rgba(203, 28, 90, 1) 94%
	) !important;
	-webkit-background-clip: text !important;
	-webkit-text-fill-color: transparent !important;
	background-clip: text !important;
	margin-left: 7px;
`;


export const MainButton = styled.button`
	background: linear-gradient(
		100deg,
		rgba(2, 133, 246, 1) 0%,
		rgba(4, 177, 252, 1) 100%
	);
	color: #fff;
	padding: 0.5rem 0.8rem;
	font-weight: 400;
	line-height: 1.8;
	cursor: pointer;
	font-size: 1rem;
	border-radius: 25px;
	
	border: transparent;
	&:hover {
		background: linear-gradient(
			100deg,
			rgba(4, 177, 252, 1) 0%,
			rgba(2, 133, 246, 1) 100%
		);
	}
`;

export const SectionHeading = styled.h2`
	color: #fff;
	font-weight: 600;
	font-size: 1.875rem;
	text-align: center;
	margin-top: 3rem !important;
`;
export const SectionDescription = styled.p`
	color: #9b9ea2;
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 400;
	letter-spacing: 0.025em;
	text-align: center;
	margin-bottom: 3rem;
`;

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';
import styled from 'styled-components';
import { SectionArea } from '../../App.style';
import Volume1 from '../../assets/images/volume1.svg';
import Volume2 from '../../assets/images/volume2.svg';
import Volume3 from '../../assets/images/volume3.svg';
import SectionTitle from '../SectionTitle';


const Pricing = () => {
	return (
		<>
			<SectionArea className='pricing' id='pricing'>
				<div className='container'>
					<SectionTitle 
					
					Heading={'What deal'} Highlight={'suits you perfect'}
						Description={"Let's see how it works"} />
					<Row>
						<Col xs={12} md={6} lg={4}>
							<PriceBox>
								<PlanType>Starter</PlanType>
								<PriceStatus>
									<h2>Free</h2>
								</PriceStatus>
								<h6>Forever free to get started</h6>
								<h6>For Small teams or office</h6>

								<img className='user-select-none' src={Volume1} alt='' />
         
								<BenefitListParent>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Up to 5 users
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Up to 10 SSH hosts for Fig Access
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Public Fig Scripts
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Community support
									</li>
										<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Priority support
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										OpenAI Codex English → Bash translation
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Unlimited users
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Unlimited private autocomplete
									</li>

									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Unlimited private Fig Workflows
									</li>
								</BenefitListParent>
								<PurchaseButton>Choose Starter</PurchaseButton>
							</PriceBox>
						</Col>


						<Col xs={12} md={6} lg={4}>
							<PriceBox>
								<PopularPurchase>POPULAR</PopularPurchase>
								<PlanType>Pro</PlanType>

								<PriceStatus>
									<h6>SEK</h6>
									<h2>199</h2>
									<span>/month</span>
								</PriceStatus>

								<h6>Saving 25% Per Year</h6>
							  <h6>For pro level</h6>	

								<img className='user-select-none' src={Volume2} alt='' />

								<BenefitListParent>
									<p>	All in Free plan, plus: </p>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Unlimited users
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Unlimited private autocomplete
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Unlimited SSH hosts in Fig Access
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										OpenAI Codex English → Bash translation
									</li>

									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Role Based Access Controls
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Custom onboarding
									</li>

									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Priority Support with SLA
									</li>

									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Whatever else you need (we will make it work)
									</li>
 

								</BenefitListParent>
								<PurchaseButton>Choose Pro</PurchaseButton>
							</PriceBox>
						</Col>

						<Col xs={12} md={6} lg={4}>
							<PriceBox>
								<PlanType>Enterprise</PlanType>

								<PriceStatus>
									<h6>SEK</h6>
									<h2>299</h2>
									<span>/month</span>
								</PriceStatus>

								<h6>Saving 4%5 per Year</h6>
								<h6>For Enterprise business</h6>	

								<img className='user-select-none' src={Volume3} alt='' />

								<BenefitListParent>
								<p>	All in Pro plan, plus: </p>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Role Based Access Controls
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Custom onboarding
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										3 prototypes
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Priority Support with SLA
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Whatever else you need (we will make it work)
									</li>
								</BenefitListParent>

								<PurchaseButton>Choose Enterprise</PurchaseButton>
							</PriceBox>
						</Col>
					</Row>
				</div>
			</SectionArea>
		</>
	);
};

export default Pricing;

const PriceBox = styled.div`
	margin-bottom: 1.5rem;
	padding: 40px;
	background-color: #212d45;
	color: rgb(33, 43, 54);
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	box-shadow: rgb(0 0 0 / 24%) 0px 0px 2px 0px,
		rgb(0 0 0 / 24%) 0px 16px 32px -4px;
	border-radius: 16px;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	h6 {
		font-size: 0.75rem;
		font-weight: 400;

		color: rgb(4, 177, 252);
	}
`;
const PopularPurchase = styled.span`
	height: 22px;
	min-width: 22px;
	line-height: 0;
	border-radius: 8px;
	cursor: default;
	align-items: center;
	white-space: nowrap;
	display: inline-flex;
	justify-content: center;
	padding: 0px 8px;
	color: #74caff;
	font-size: 0.75rem;
	background-color: #203b56;
	font-weight: 600;
	top: 16px;
	right: 16px;
	position: absolute;
`;
const PlanType = styled.div`
	font-weight: 700;
	font-size: 0.75rem;
	letter-spacing: 1.1px;
	color: rgb(99, 115, 129);
`;
const PriceStatus = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 16px;
	margin-bottom: 16px;
	h6 {
		margin: 0px;
		font-weight: 600;
		line-height: 1.5;
		font-size: 1rem;
		color: rgb(99, 115, 129);
	}
	h2 {
		margin: 0px 8px;
		font-size: 3rem;
		font-weight: 700;
		color: #fff;
	}
	span {
		margin: 0px 0px 8px;
		font-weight: 600;
		line-height: 1.57143;
		font-size: 0.875rem;

		color: rgb(99, 115, 129);

		align-self: flex-end;
	}
`;
const BenefitListParent = styled.ul`
	margin-top: 40px;
	margin-bottom: 40px;
	width: 100%;
	color: #fff;
	li {
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 2.5;
		font-size: 0.875rem;

		font-weight: 400;
	}
`;
const IconTick = styled.div`
	font-size: 15px;
	font-weight: 500;
	margin-right: 10px;
`;
const PurchaseButton = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 8px 22px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 0.9375rem;
	height: 48px;
	width: 100%;
	min-width: 64px;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	background: rgb(2, 133, 246);
	background: linear-gradient(
		90deg,
		rgba(2, 133, 246, 1) 0%,
		rgba(4, 177, 252, 1) 100%
	);
	color: #fff;
	text-align: center;
	user-select: none;
	border: transparent;
	&:hover {
		background: rgb(4, 177, 252);
		background: linear-gradient(
			90deg,
			rgba(4, 177, 252, 1) 0%,
			rgba(2, 133, 246, 1) 100%
		);
	}
`;


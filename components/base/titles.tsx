import React from "react";
import styled from "styled-components";

const H1Continer = styled.div`
	width: 100%;
	color: ${({ theme }: any) => theme.color.contrast};
	display: flex;
	justify-content: center;
	margin: 12px 4px;
`;
const H1text = styled.h1`
	display: inline-block;
	text-align: center;
	font-size: 1.5rem;
	letter-spacing: 4px;

	::after {
		content: "";
		display: block;
		height: 4px;
		margin-left: 12.5%;
		width: 75%;
		margin-top: 12px;
		background-color: ${({ theme }) => theme.color.primary};
	}
`;

export const H1 = (props: any) => {
	return (
		<H1Continer>
			<H1text {...props} />
		</H1Continer>
	);
};
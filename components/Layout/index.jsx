/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import React, { useState } from "react";
import Helmet from "react-helmet";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import styled from "styled-components";

/* -------------------------- Internal Dependencies ------------------------- */
import { BodyStyling } from "styles/GlobalStyle";
import SkipToMain from "../A11y/skip-to-main";

const propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	className: PropTypes.string,
};

const Layout = ({ children, title = "Home", className = "", ...rest }) => {
	return (
		<Main>
			<BodyStyling />
			<Helmet>
				<title>{`${title} | TLCcoin`}</title>
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0 viewport-fit=cover"
				/>
			</Helmet>
			<SkipToMain content="main-content" />
			{children}
		</Main>
	);
};

Layout.propTypes = propTypes;

const Main = styled.main`
	width: 100%;
	height: 100vh;
`;

export default Layout;

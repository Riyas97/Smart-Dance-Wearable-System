import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const AppLoader = () => {
    return (
        <BounceLoader size={150} color={'red'} loading={true} margin={'auto'} css={override} />
    )
}

export default AppLoader;


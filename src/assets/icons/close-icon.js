import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  width: 100%;
`;

const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <title>Icons/icon-close-black</title>
    <g
      id="Icons/icon-close-black"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="close-black-18dp">
        <polygon id="Path" points="0 0 18 0 18 18 0 18"></polygon>
        <polygon
          id="Path"
          fill="#000000"
          fillRule="nonzero"
          points="14.25 4.8075 13.1925 3.75 9 7.9425 4.8075 3.75 3.75 4.8075 7.9425 9 3.75 13.1925 4.8075 14.25 9 10.0575 13.1925 14.25 14.25 13.1925 10.0575 9"
        ></polygon>
      </g>
    </g>
  </CloseIconWrapper>
);

export { CloseIcon };

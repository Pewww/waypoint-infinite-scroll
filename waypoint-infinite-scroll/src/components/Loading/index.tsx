import * as React from 'react';
import LoadingIcon from '../../assets/icon-loading.gif';
import styled from 'styled-components';

// <Waypoint> needs a DOM element to compute boundaries.
// The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

const Img = styled.img`
  display: block;
  margin: auto;
  padding: 20px 0;
`;

const Loading = React.memo(({innerRef}: {
  innerRef: React.RefObject<HTMLParagraphElement>
}) => (
  <p ref={innerRef}>
    <Img
      src={LoadingIcon}
      alt="피드를 불러오는 중입니다..."
    />
  </p>
));

const LoadingWithRef = React.memo(
  React.forwardRef((props, ref) => (
    <Loading
      innerRef={ref as React.RefObject<HTMLParagraphElement>}
      {...props}
    />
  )
));

export default LoadingWithRef;
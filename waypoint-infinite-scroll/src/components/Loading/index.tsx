import * as React from 'react';
import LoadingIcon from '../../assets/icon-loading.gif';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  margin: auto;
  padding: 20px 0;
`;

const LoadingWithRef = React.memo(
  React.forwardRef((_, ref) => (
    <p ref={ref as React.RefObject<HTMLParagraphElement>}>
      <Img
        src={LoadingIcon}
        alt="내용을 불러오는 중입니다..."
      />
    </p>
  )
));

export default LoadingWithRef;
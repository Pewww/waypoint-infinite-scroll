import * as React from 'react';
import {Omit} from '../../@types/common';
import styled from 'styled-components';

export interface IFeedItem {
  name: string;
  title: string;
  contents: string;
  id: string; // HashId
}

const Li = styled.li`
  list-style: none;
`;

const Div = styled.div`
  width: 450px;
  height: 550px;
  margin: 50px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const FeedItem: React.ExoticComponent<
  Omit<IFeedItem, 'id'>
> = React.memo(({
  name,
  title,
  contents
}) => (
  <Li>
    <Div>
      <h1>제목: {title}</h1>
      <p>이름: {name}</p>
      <pre>{contents}</pre>
    </Div>
  </Li>
));

export default FeedItem;

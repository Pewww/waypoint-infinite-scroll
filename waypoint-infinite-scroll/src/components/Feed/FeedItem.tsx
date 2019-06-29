import * as React from 'react';
import {Omit} from '../../@types/common';

export interface IFeedItem {
  name: string;
  title: string;
  contents: string;
  id: string; // HashId
}

const FeedItem: React.ExoticComponent< Omit<IFeedItem, 'id'> > = React.memo(({
  name,
  title,
  contents
}) => (
  <div>
    <h1>제목: {title}</h1>
    <p>이름: {name}</p>
    <pre>{contents}</pre>
  </div>
));

export default FeedItem;
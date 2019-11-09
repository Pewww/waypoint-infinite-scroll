import * as React from 'react';
import {Waypoint} from 'react-waypoint';
import styled from 'styled-components';

interface Props {
  loadMore: () => void;
  threshold?: string;
  hasMore: boolean;
  loader: React.ReactNode | React.ComponentType;
  children: React.ReactNode;
  className?: string;
}

const InfiniteScrollDiv = styled.div`
  padding-top: 35px;
`;

const InfiniteScroll: React.ExoticComponent<Props> = React.memo(({
  loadMore,
  threshold,
  hasMore,
  loader,
  children,
  className
}) => (
  <InfiniteScrollDiv className={className}>
    {children}
    {hasMore && (
      <Waypoint
        onEnter={loadMore}
        bottomOffset={threshold}
        // scrollableAncestor="window"
      >
        {loader}
      </Waypoint>
    )}
  </InfiniteScrollDiv>
));

export default InfiniteScroll;

import * as React from 'react';
import InfiniteScroll from '../InfiniteScroll';
import Loading from '../Loading';
import axios from 'axios';
import FeedItem, {IFeedItem} from './FeedItem';
import {SECOND} from '../../constants/times';

interface Props {
  fetchURI: string;
}

interface State {
  dataList: IFeedItem[];
  next: string | null;
  previous: string | null;
}

const Feed: React.FC<Props> = React.memo(({fetchURI}) => {
  const [{dataList, next, previous}, setData] = React.useState<State>({
    dataList: [],
    next: null,
    previous: null
  });

  const fetchData = React.useCallback((uri: string) => {
    axios.get(uri)
      .then(({data: {results, next, previous}}) => {
        setData(curr => ({
          ...curr,
          dataList: [
            ...curr.dataList,
            ...results
          ],
          next,
          previous
        }));
      })
      .catch(err => new Error(err));
  }, []);

  const fetchMore = React.useCallback(() => {
    // Loading 컴포넌트의 정확한 확인을 위해 2초의 Delay를 임시로 추가했습니다.
    setTimeout(() => {
      fetchData(next as string);
    }, 2 * SECOND);
  }, [next]);

  React.useEffect(() => {
    fetchData(fetchURI);
  }, []);

  return (
    <div>
      <InfiniteScroll
        loader={<Loading/>}
        hasMore={!!next}
        loadMore={fetchMore}
        threshold="-250px"
      >
        <ul>
          {dataList.map(({id, ...rest}) => (
            <FeedItem
              key={id}
              {...rest}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
});

Feed.displayName = 'Feed';

export default Feed;

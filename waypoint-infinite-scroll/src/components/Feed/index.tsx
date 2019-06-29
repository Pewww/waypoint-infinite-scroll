import * as React from 'react';
import InfiniteScroll from '../InfiniteScroll';
import Loading from '../Loading';
import axios from 'axios';
import {IFeedItem} from './FeedItem';
import FeedItem from './FeedItem';
import styled from 'styled-components';

interface Props {
  fetchURI: string;
}

interface State {
  dataList: IFeedItem[];
  next: string | null;
  previous: string | null;
}

const Li = styled.li`
  list-style: none;
`;

export default class Feed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      dataList: [],
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    const {fetchURI} = this.props;

    this.fetchData(fetchURI);
  }

  fetchData = (uri: string) => {
    const {dataList} = this.state;

    axios.get(uri)
      .then(({data: {results, next, previous}}) => {
        this.setState({
          dataList: [
            ...dataList,
            ...results
          ],
          next,
          previous
        })
      })
      .catch(err => new Error(err));
  }

  fetchMore = () => {
    const {next} = this.state;

    // Loading 컴포넌트의 정확한 확인을 위해 2초의 Delay를 추가했습니다.
    setTimeout(() => {
      this.fetchData(next as string)
    }, 2000);
  }

  render() {
    const {
      dataList,
      next
    } = this.state;

    return (
      <div>
        <InfiniteScroll
          loader={<Loading/>}
          hasMore={!!next}
          loadMore={this.fetchMore}
          threshold="-250px"
        >
          <ul>
            {dataList.map(({id, ...rest}) => (
              <Li key={id}>
                <FeedItem {...rest}/>
              </Li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}
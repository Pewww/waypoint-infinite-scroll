import * as React from 'react';
import InfiniteScroll from '../InfiniteScroll';
import Loading from '../Loading';
import axios from 'axios';
import {IFeedItem} from './FeedItem';
import FeedItem from './FeedItem';

interface Props {
  fetchURI: string;
}

interface State {
  dataList: IFeedItem[];
  next: string | null;
  previous: string | null;
}

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

    this.fetchData(next as string);
  }

  render() {
    const {
      dataList,
      next
    } = this.state;

    return (
      <div>
        <InfiniteScroll
          loader={Loading}
          hasMore={!!next}
          loadMore={this.fetchMore}
          threshold="-250px"
        >
          <ul>
            {dataList.map(({id, ...rest}) => (
              <li key={id}>
                <FeedItem {...rest}/>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}
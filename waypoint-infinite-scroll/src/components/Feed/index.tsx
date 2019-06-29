import * as React from 'react';
import InfiniteScroll from '../InfiniteScroll';
import Loading from '../Loading';
import axios from 'axios';

interface Props {
  fetchURI: string;
}

interface State {
  dataList: Array<{
    name: string;
    title: string;
    contents: string;
  }>;
}

export default class Feed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      dataList: []
    };
  }

  componentDidMount() {
    const {fetchURI} = this.props;

    axios.get(fetchURI)
      .then()
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
import * as React from 'react';
import { connect } from 'react-redux';

import './style/style.scss';
import FeedMidleware from '../../store/modules/feed/middleware';
/* 
import FeedMidleware from '../../store/modules/feed/middleware';
import TeamCardsList from '../../components/lists/team-cards-list';
import Title from './Title';
import Hero from '../../components/ui/Hero';
import { appString } from '../../utils';
import LoadSpinner from '../../components/ui/LoadSpinner';
 */

export interface IProps {
  dispatchLoadFeed():void
}

export class FeedContainer extends React.Component<IProps> {

  componentDidMount() {
    this.props.dispatchLoadFeed();
  }

 

  render() {

    // const { team, isLoadingFeed } = this.props;
    console.log(this.props);

    return (
      <section className="cards">
        Feed
        <button className="btn btn-primary">click</button>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  ...state.feed,
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadFeed: () => dispatch(FeedMidleware.loadFeedRequest()),
});

/* 



*/


export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
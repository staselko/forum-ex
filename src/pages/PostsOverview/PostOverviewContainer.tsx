import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUsersLoading } from '../../redux/Users/UserSelector';
import Spinner from '../../components/Spinner/Spinner';
import PostsOverview from './PostsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsUsersLoading(state),
});

const PostsOverviewContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(PostsOverview);

export default PostsOverviewContainer;

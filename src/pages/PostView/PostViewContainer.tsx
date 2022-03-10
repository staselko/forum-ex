import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PostViev from './PostView';
import { selectIsGettingCurrentUser } from '../../redux/Users/UserSelector';
import Spinner from '../../components/Spinner/Spinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsGettingCurrentUser(state),
});

const PostViewContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(PostViev);

export default PostViewContainer;

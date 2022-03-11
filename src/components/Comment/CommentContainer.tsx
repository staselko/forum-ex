import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Commetn from './Comment';
import Spinner from '../../components/Spinner/Spinner';
import { selectIsPostsLoading } from '../../redux/Posts/PostsSelector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsPostsLoading(state),
});

const CommentContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(Commetn);

export default CommentContainer;

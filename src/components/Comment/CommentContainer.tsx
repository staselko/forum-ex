import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Commetn from './Comment';
import Spinner from '../../components/Spinner/Spinner';
import { IRootReducer } from '../../redux/RootReducer';

const mapStateToProps = createStructuredSelector({
  isLoading: (state: IRootReducer) => state.posts.isCommenting,
});

const CommentContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(Commetn);

export default CommentContainer;

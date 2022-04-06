import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Comment from '../Comment/Comment';
import { selectIsGettingCurrentUser } from '../../redux/Users/UserSelector';
import Spinner from '../Spinner/Spinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsGettingCurrentUser(state),
});

const CommetnCreateFormContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(Comment);

export default CommetnCreateFormContainer;

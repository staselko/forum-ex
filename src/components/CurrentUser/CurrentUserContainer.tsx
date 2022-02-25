import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUsersLoading } from '../../redux/Users/UserSelector';
import Spinner from '../Spinner/Spinner';
import CurrentUser from './CurrenUser';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsUsersLoading(state),
});

const CurrentUserContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(CurrentUser);

export default CurrentUserContainer;

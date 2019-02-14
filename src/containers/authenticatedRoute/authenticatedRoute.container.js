import { connect } from 'react-redux';
import AuthenticatedRoute from '../../components/common/authenticatedRoute.component';

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticatedRoute);

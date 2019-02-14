import { connect } from 'react-redux';
import LogInComponent from '../../components/logIn/logIn.component';
import { updateEmail, updatePassword, logIn } from '../../actions/logIn/logIn.actions';


const mapStateToProps = (state, ownProps) => ({
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateEmail: value => dispatch(updateEmail(value)),
  updatePassword: value => dispatch(updatePassword(value)),
  logIn: () => dispatch(logIn()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInComponent);

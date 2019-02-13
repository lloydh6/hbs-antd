import { connect } from 'react-redux';
import CreatePatientComponent from '../../components/patientNotFound/createPatient.component';
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateMobile,
} from '../../actions/createPatient/createPatient.actions';

const mapStateToProps = (state, ownProps) => ({
  firstName: state.createPatient.firstName,
  lastName: state.createPatient.lastName,
  mobile: state.createPatient.mobile,
  email: state.createPatient.email,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateFirstName: value => dispatch(updateFirstName(value)),
  updateLastName: value => dispatch(updateLastName(value)),
  updateEmail: value => dispatch(updateEmail(value)),
  updateMobile: value => dispatch(updateMobile(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePatientComponent);

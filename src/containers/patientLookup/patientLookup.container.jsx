import { connect } from 'react-redux';
import PatientLookupComponent from '../../components/patientLookup/patientLookup.component';
import { updateEmail, updateMobileNumber } from '../../actions/patientLookup/patientLookup.actions';

const mapStateToProps = (state, ownProps) => ({
  email: state.patientLookup.email,
  mobile: state.patientLookup.mobileNumber,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateEmail: value => dispatch(updateEmail(value)),
  updateMobile: value => dispatch(updateMobileNumber(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientLookupComponent);

import { connect } from 'react-redux';
import PatientLookupComponent from '../../components/patientLookup/patientLookup.component';
import { updateEmail, updateMobileNumber, initializeComponent } from '../../actions/patientLookup/patientLookup.actions';

const mapStateToProps = (state, ownProps) => ({
  email: state.patientLookup.email,
  mobile: state.patientLookup.mobileNumber,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateEmail: value => dispatch(updateEmail(value)),
  updateMobile: value => dispatch(updateMobileNumber(value)),
  initializeComponent: () => dispatch(initializeComponent()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientLookupComponent);

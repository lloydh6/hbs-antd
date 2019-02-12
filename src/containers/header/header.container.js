import { connect } from 'react-redux';
import HeaderComponent from '../../components/header/header.component';

const mapStateToProps = (state, ownProps) => ({
  header: state.header,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);

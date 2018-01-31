import {connect} from 'react-redux';
import Trainer from '../Trainer/Trainer.jsx';

function mapStateToProps(state) {
  return {
    trainerName: state.name,
    trainerSubmitted: state.submitted
  };
}

export default connect(mapStateToProps)(Trainer);
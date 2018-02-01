import {connect} from 'react-redux';
import Trainer from '../Trainer/Trainer.jsx';
import {setTrainer, updateTrainerOnState} from "../../actions/updateTrainer";

function mapStateToProps(state) {
  return {
    trainerName: state.trainers.name,
    trainerSubmitted: state.trainers.trainerSubmitted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTrainer: () => {
      dispatch(setTrainer());
    },
    updateTrainerOnState: (trainerName) => {
      dispatch(updateTrainerOnState(trainerName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trainer);
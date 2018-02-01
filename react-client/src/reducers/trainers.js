export default function (state = {
  trainerName: null,
  trainerSubmitted: false
}, action) {
  switch (action.type) {
    case 'SET_TRAINER_ON_STATE':
      return {
        trainerName: state.trainerName,
        trainerSubmitted: true
      };
    case 'UPDATE_TRAINER_ON_STATE':
      return {
        trainerName: action.payload,
        trainerSubmitted: false
      };
    default:
      return state;
  }
}

export const setTrainer = () => {
  return {
    type: 'SET_TRAINER_ON_STATE'
  }
};


export const updateTrainerOnState = (trainerName) => {
  return {
    type: 'UPDATE_TRAINER_ON_STATE',
    payload: trainerName
  }
};
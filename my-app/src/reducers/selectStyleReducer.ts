import {ProductDispatchTypes, CURRENT_STYLE_INDEX} from '../actions/actionTypes';

interface ExampleState {
  loading: boolean,
  selectedStyleIndex: number
}

const selectStyleReducer = (state: number = 0, action: ProductDispatchTypes) : ExampleState => {
  switch (action.type) {
    case CURRENT_STYLE_INDEX:
      return {
        loading: false,
        selectedStyleIndex: action.payload
      }
    default:
      return {
        loading: false,
        selectedStyleIndex: 0
      }
  }
};


export default selectStyleReducer;
import {ADD_ITEM, SAVE_PAGES, MAKING_CHANGES_TO_PAGES} from '../actions/actionType';

const initialstate = {
  itemList: [],
  counter: 2500,
  title: '',
  pages: [],
};

const AddingReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
       pages: [...state.pages,action.data]
      };
      case SAVE_PAGES:
      return {
        ...state,
        pages : [...state.pages, action.page]
      };
      case MAKING_CHANGES_TO_PAGES:
        return {
          ...state,
          pages : action.data
        }
    default:
      return state;
  }
  //return state;
};

export default AddingReducer;

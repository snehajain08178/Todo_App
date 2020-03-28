import {ADD_ITEM,SAVE_PAGES, MAKING_CHANGES_TO_PAGES} from './actionType';

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    data
  };
};

export const savePages = () => {
  return {
    type: SAVE_PAGES,
  };
};

export const makingChangesToPages = (data) => {
  return {
    type : MAKING_CHANGES_TO_PAGES,
    data
  }
}

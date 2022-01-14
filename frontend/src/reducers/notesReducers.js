import {
  NOTE_CREATE_FAIL,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_LIST_FAIL,
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
} from "../constants/noteConstants";

// reducer for getting notes list
export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_REQUEST:
      return { loading: true, notes: [] };

    case NOTE_LIST_SUCCESS:
      return {
        loading: false,
        notes: action.payload,
      };

    case NOTE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// reducer for creating notes
export const noteCreateReducer = (state = {}, action) => {
  switch (action.payload) {
    case NOTE_CREATE_REQUEST:
      return { loading: true };

    case NOTE_CREATE_SUCCESS:
      return { loading: false, success: true };

    case NOTE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const noteEditReducer = (state = {}, action) => {
  switch (action.type) {
    case "A":
      break;

    default:
      break;
  }
};
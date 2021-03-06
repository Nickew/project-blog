import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE } from '../../constants/blogConstants';

const initialState = {
  post: {
    id: '', title: '', category: '', description: '',
  },
  creating: false,
  created: false,
  error: false,
};

export const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, creating: true };
    case CREATE_POST_SUCCESS:
      return {
        post: {
          id: action.payload.id,
          title: action.payload.title,
          category: action.payload.category,
          description: action.payload.description,
        },
        creating: false,
        created: true,
      };
    case CREATE_POST_FAILURE:
      return { ...state, creating: false, error: true };
    default:
      return state;
  }
};

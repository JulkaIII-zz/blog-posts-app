import { FETCH_POSTS, FETCH_POST, DELETE_FETCH } from "../actions";
import _ from "lodash";

export default function(state = {}, action) {
  // Good approach - to use Object {} for state
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); // to get this: {"4":{"id":4,"title":"hi"},"25":{"id":25,"title":"bye"},"36":{"id":36,"title":"lalala"}} from this: [{"id":4,"title":"hi"},{"id":25,"title":"bye"},{"id":36,"title":"lalala"}]
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newStatep[post.id] = post;
      // return newState;
      // the same as:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_FETCH:
      return _.omit(state, action.payload); // if a state has a key of a posts id, delete it.
    default:
      return state;
  }
}

import { FETCH_POSTS } from "../actions";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); // to get this: {"4":{"id":4,"title":"hi"},"25":{"id":25,"title":"bye"},"36":{"id":36,"title":"lalala"}} from this: [{"id":4,"title":"hi"},{"id":25,"title":"bye"},{"id":36,"title":"lalala"}]
    default:
      return state;
  }
}

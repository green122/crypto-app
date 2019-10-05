import { LOAD_LISTINGS_SUCCESS } from "../listings";
import mapper from "../../utils/mapping";

export const fetchActions = [LOAD_LISTINGS_SUCCESS];
export default () => next => action => {
  const { type, payload } = action;
  if (!fetchActions.includes(type)) {
    return next(action);
  }

  const nextPayload = payload.data.data.map(mapper);
  return next({ ...action, payload: nextPayload });
};

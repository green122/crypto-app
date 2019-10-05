import { LOAD_LISTINGS_SUCCESS } from "../listings";

export const fetchActions = [LOAD_LISTINGS_SUCCESS];
export default function handleFetchedData(mapper) {
  return () => next => action => {
    const { type, payload } = action;
    if (!fetchActions.includes(type)) {
      return next(action);
    }

    const nextPayload = payload.data.data.map(mapper);
    return next({ ...action, payload: nextPayload });
  };
}

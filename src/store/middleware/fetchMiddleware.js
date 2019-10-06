export default function fetchMiddleware(helpers) {
  return ({ dispatch, getState }) => next => action => {
    
    if (typeof action === "function") {
      return action(dispatch, getState, helpers.client);
    }

    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    const actionPromise = promise(helpers, dispatch, getState);
    actionPromise
      .then(
        result => {
          next({ ...rest, payload: result, type: SUCCESS });
        },
        error => {
          next({ ...rest, payload: error, type: FAILURE });
        }
      )
      .catch(error => {
        console.error("MIDDLEWARE ERROR:", error);
        next({ ...rest, payload: error, type: FAILURE });
      });

    return actionPromise;
  };
}

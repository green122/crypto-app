import fetchMiddleware from "./fetchMiddleware";

describe("fetch middleware", () => {
  it("should dispatch start action, then success", async () => {
    const middleware = fetchMiddleware({});
    const fakeAction = {
      types: ["FAKE_START", "FAKE_SUCCESS", "FAKE_FAIL"],
      promise: () => Promise.resolve({ data: "fakedata" })
    };

    const dispatch = jest.fn();
    const next = jest.fn();
    middleware({ dispatch })(next)(fakeAction);
    expect(next).toHaveBeenCalledWith({ type: "FAKE_START" });
    await new Promise(resolve => setImmediate(resolve));
    expect(next).toHaveBeenLastCalledWith({
      type: "FAKE_SUCCESS",
      payload: { data: "fakedata" }
    });
  });
  it("should dispatch fail action, then success", async () => {
    const middleware = fetchMiddleware({});
    const fakeAction = {
      types: ["FAKE_START", "FAKE_SUCCESS", "FAKE_FAIL"],
      promise: () => Promise.reject({ error: "fakeerror" })
    };

    const next = jest.fn();
    middleware({})(next)(fakeAction);
    await new Promise(resolve => setImmediate(resolve));
    expect(next).toHaveBeenLastCalledWith({
      type: "FAKE_FAIL",
      payload: { error: "fakeerror" }
    });
  });
});

import { useEffect, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                data: null,
                loading: true,
                error: null,
            };
        case "SUCCESS":
            return { data: action.data, loading: false, error: null };
        case "ERROR":
            return { data: null, loading: false, error: action.error };
        default:
            throw new Error(`핸들러가 되지않은 에러가 발생 : ${action.type}`);
    }
}

function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        data: null,
        loading: false,
        error: null,
    });

    const fetch = async () => {
        try {
            dispatch({ type: "LOADING" });
            const data = await callback();
            dispatch({ type: "SUCCESS", data });
        } catch (e) {
            dispatch({ type: "SUCCESS", error: e });
        }
    };
    useEffect(() => {
        if (skip) return;
        fetch();
    }, deps);
    return [state, fetch];
}
export default useAsync;

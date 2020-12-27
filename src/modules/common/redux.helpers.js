//Helper function which enables passing an object with action.type as key
// reducer function as value

export const createReducer = (initialState={},actionHandleKeyFuncs={}) => {
    return (state=initialState, action) => {
        const actionHandler = actionHandleKeyFuncs[action.type]
        return actionHandler ? actionHandler(state,action) : state;
    }
};

//Create a basic action 
export const createAction =(type, actionProps) => {
    console.log(`Create Action ${type} of action has been created and Props are ${actionProps}`)
    return {
        type,
        ...actionProps
    };
}

//eg createAsyncActionCreator('GET_TOP_MOVIES',getTopMovies,{page:1})

export const createAsyncActionCreator = (actionType, asyncRequestFunc, requestParams) => {
    console.log(`REDUX HELPERS : createAsyncActionCreator ${actionType}`)
    return (dispatch) => {
        console.log(`Dispatching  ${actionType}_START`)
        dispatch(createAction(`${actionType}_START`,{request:requestParams}));
        // NOTE : asyncRequestFunc must accept single object parameter
        return asyncRequestFunc(requestParams)
                .then(response => {
                    response.json()
                    .then(json => dispatch(createAction(`${actionType}_SUCCESS`,{response: json})))
                    .catch(error => dispatch(createAction(`${actionType}_ERROR`,{error})))
                })
                
                
    }
}

const initialAsyncState = { isLoading: false, response : null, request : null};

//Generic way of handling state changes for an async request
export const createAsyncReducer = (actionType, actionHandlerKeyFuncs={}, initialState=initialAsyncState ) => {
    console.log(`REDUX HELPER : createAsyncReducer - action type ${actionType} actionHandlerKeyFuncs ${Object.keys(actionHandlerKeyFuncs)}  initialState ${Object.keys(initialState)} ${initialState.isLoading} ${initialState.response} ${initialState.request}`)
    const startReducerFun = (state, action) => ({
        ...state,
        isLoading: true,
        request : action.request
    });

    const successReducerFun = (state,action) => ({
        ...state,
        isLoading : false,
        response : action.response 
    });

    const errorReducerFun = (state,action) => ({
        ...state,
        isLoading : false,
        error : action.error
    })

    return createReducer (
        initialState,
        {
            [`${actionType}_START`]: startReducerFun,
            [`${actionType}_SUCCESS`]: successReducerFun,
            [`${actionType}_ERROR`]: errorReducerFun,
            ...actionHandlerKeyFuncs
        }
    ) 
}
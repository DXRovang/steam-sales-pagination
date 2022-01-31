const ACTIONS = {
  MAKE_REQUEST: "make-request", 
  GET_DATA: "get-data", 
  ERROR: "error",
  NEXT_PAGE: "next-page"
}

function reducer(state, action){
  switch(action.type){
    case ACTIONS.MAKE_REQUEST:
    return { loading: true, games: []}
    case ACTIONS.GET_DATA:
    return { ...state, loading: false, games: action.payload.games}
    case ACTIONS.ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      games: [],
    }
    case ACTIONS.NEXT_PAGE:
    return { ...state, hasNextPage: action.payload.hasNextPage}
    default:
      return state;
  }
}
const generalReducerDefaultState = {
    isMobile: false
};

export default (state = generalReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_IS_MOBILE':
            return {
                ...state,
                isMobile: action.isMobile
            };
        default:
            return state;
    }
};
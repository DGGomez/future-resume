export default function(state={}, action){
    switch(action.type) {
        case 'FETCH_SCHEDULE':
            return {
                ...state,
                schedule: action.payload.schedule
            };
        case 'CREATE_SCHEDULE':
            return {
                ...state,
                schedule: action.payload.schedule
            };
        default:
            return state;
    }
};
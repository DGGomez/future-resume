import axios from 'axios';

export const fetchSchedule = ({ userId , token }, callback) => async (dispatch) => {
    try {
        console.log('fetchSchedule: ', userId, token );
        let { data } = await axios({
            method: 'get',
            url: `/schedules/users/${userId}`,
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log('schedule: ', data.mealSchedule);
        dispatch({
            type: 'FETCH_SCHEDULE',
            payload: {
                schedule: data.mealSchedule
            }
        });
        callback();
    } catch (error) {
        console.log('fetchSchedule error: ', error);
    }
};

export const createSchedule = ({ userId, token, dailyCalorieGoal }, callback) => async (dispatch) => {
    try {
        console.log('createSchedule: ', userId, token );
        let { data } = await axios({
            method: 'post',
            data: {
                userId,
                dailyCalorieGoal
            },
            url: `/schedules`,
            headers: { 'Authorization': `Bearer ${token}` }
        });

        dispatch({
            type: 'CREATE_SCHEDULE',
            payload: {
                schedule: data.schedule
            }
        });
        dispatch({
            type: 'ACTIVATE_USER',
            payload: {
                user: data.user
            }
        });
        callback();
    } catch (error) {
        console.log('createSchedule error: ', error);
    }
};
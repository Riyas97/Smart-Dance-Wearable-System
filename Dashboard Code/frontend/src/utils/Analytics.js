import axios from 'axios';
import { getAccessToken, logout } from './Auth';


export const getDataSummary = async () => {
    console.log('[Analytics] Get Data Summary');
    try {
        const accessToken = getAccessToken();
        const response = await axios.get('http://localhost:3333/analytics/data', {}, {
            headers: {
                'authorization': accessToken
            }
        });
        return response.data;
    } catch (error) {
        logout();
        console.log(error);
        throw new Error(error);
    }
}

export const getMovesSummary = async () => {
    console.log('[Analytics] Get Moves Summary');
    try {
        const accessToken = getAccessToken();
        const response = await axios.get('http://localhost:3333/analytics/moves/summary', {}, {
            headers: {
                'authorization': accessToken
            }
        });
        return response.data;
    } catch (error) {
        logout();
        console.log(error);
        throw new Error(error);
    }
}

export const getPositionsSummary = async () => {
    console.log('[Analytics] Get Positions Summary');
    try {
        const accessToken = getAccessToken();
        const response = await axios.get('http://localhost:3333/analytics/positions/summary', {}, {
            headers: {
                'authorization': accessToken
            }
        });
        return response.data;
    } catch (error) {
        logout();
        console.log(error);
        throw new Error(error);
    }
}

export const getMovesStats = async () => {
    console.log('[Analytics] Get Moves Stats');

    try {
        const accessToken = getAccessToken();
        const response = await axios.get('http://localhost:3333/analytics/moves/stats', {}, {
            headers: {
                'authorization': accessToken
            }
        });
        return response.data;
    } catch (error) {
        logout();
        console.log(error);
        throw new Error(error);
    }
}

export const getPositionsStats = async () => {
    console.log('[Analytics] Get Positions Stats');

    try {
        const accessToken = getAccessToken();
        const response = await axios.get('http://localhost:3333/analytics/positions/stats', {}, {
            headers: {
                'authorization': accessToken
            }
        });
        return response.data;
    } catch (error) {
        logout();
        console.log(error);
        throw new Error(error);
    }

}
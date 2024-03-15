const axios = require('axios');

const LICHESS_API_URL = 'https://lichess.org/api/';

const fetchUserData = async () => {
    try {
        const response = await axios.get(`${LICHESS_API_URL}user/me`, {
            headers: {
                Authorization: `Bearer ${process.env.LICHESS_ACCESS_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data from Lichess:', error);
        throw error;
    }
};

module.exports = {
    fetchUserData,
};

import axios from "axios";

export const axiosAPI = async (param) => {
    const response = await axios.get(`https://api.unsplash.com//search/photos`, {
        headers: {
            Authorization: 'Client-ID yOxZJdiXyIucciH0EI2ElRGccqa2_9Ycj5G_bX02FlA'
        },
        params: {
            query: param
        },
    });

    return response.data.results;
}
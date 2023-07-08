import axios from "axios"

export const axiosAPI = (link, header, param) => {
    axios.get(`https://api.unsplash.com/${link}`, {
        headers: {header},
        params: {param},
    })
}
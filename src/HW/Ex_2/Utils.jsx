import axios from "axios"

const getAllItems = async (url) => {
    const resp = await axios.get(url)
    return resp.data
}

const getItem = async (url, id) => {
    const resp = await axios.get(`${url}/${id}`)
    return resp.data
}

export {getAllItems,getItem}
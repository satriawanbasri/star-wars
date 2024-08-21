import axios from 'axios'

const fetch = async (url, data) => {
    const options = { url }
    if (data) {
        options.method = 'post'
        options.data = data
    }
    try {
        const response = await axios(options)
        return {
            isSuccess: true,
            status: 'SUCCESS',
            data: response.data,
        }
    } catch (error) {
        console.log(error)
        return {
            isSuccess: false,
            status: 'ERROR',
            message: 'Fetch failed!',
        }
    }
}

export default fetch

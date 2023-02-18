import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/';

export function QueryString(params: any) {
    return Object.keys(params)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[ k ])}`)
        .join('&');
}

const httpClient = axios.create({
    baseURL: COINGECKO_API_URL,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    timeout: (10 * 1000)
});

httpClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);


export const getFullUrl = (endpoint: string) => COINGECKO_API_URL + (endpoint.startsWith('/') ? endpoint.substring(0, 1) : endpoint)

export const getDefaultHeader = (contentType: string) => {

    const header = {
        'Accept': 'application/json',
        'Content-Type': contentType || 'application/json',
        'Accept-Encoding': 'gzip,deflate,compress',
    };

    return header;
}


export const HttpGet = async (endpoint: string, params: any = null) => {

    const fullUrl = getFullUrl(endpoint);
    console.log(`🔥.Get : `, fullUrl);
    try {

        if (!endpoint)
            throw new Error('Invalid endpoint');

        const response = await httpClient.get(fullUrl,
            {
                headers: getDefaultHeader('application/json'),
                params,
            });

        const result = response?.data ? response.data : response || null;

        return result;
    }
    catch (error) {
        throw new Error(error || error?.message || `Could not complete the request to remote url : ${fullUrl}`);
    }
}

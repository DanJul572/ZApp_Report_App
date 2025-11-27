const axios = require("axios");

async function request(options = {}) {
    const apiUrl = 'http://localhost:8080/api/hello';
    const apiKey = '31503c19-5ee4-4110-843d-40e2d3dacb6b';

    const response = await axios({
        url: apiUrl,
        method: options.method || "GET",
        headers: {
            "X-API-Key": apiKey,
            ...(options.headers || {})
        },
        data: options.body || null
    });

    return response.data;
}

return request;

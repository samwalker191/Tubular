export const fetchVideos = query => (
    $.ajax({
        method: 'GET',
        url: '/api/users',
        data: query
    })
);
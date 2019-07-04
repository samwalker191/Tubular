export const fetchVideos = query => (
    $.ajax({
        method: 'GET',
        url: '/api/videos',
        data: query
    })
);

export const fetchVideo = videoId => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`
    })
);

export const createVideo = video => (
    $.ajax({
        method: 'POST',
        url: '/api/videos',
        data: { video }
    })
);

export const updateVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}`,
        data: { video }
    })
);

export const deleteVideo = videoId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`
    })
);
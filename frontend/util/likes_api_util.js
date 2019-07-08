export const addLike = like => (
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
);

export const changeLike = like => (
    $.ajax({
        method: 'PATCH',
        url: `/api/likes/${like.id}`,
        data: { like }
    })
);

export const removeLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
);
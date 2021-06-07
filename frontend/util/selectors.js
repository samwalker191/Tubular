export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// export const filterFromHistory = (videosArray, filterId, historyArray) => {
//     if (!historyArray.includes(filterId)) {
//         historyArray.push(filterId);
//     }
//     return videosArray.filter(video => !(historyArray.includes(video.id)));
// };

export const filter = (videosArray, filterId) => {
    return videosArray.filter(video => video.id !== filterId);
};

export const likeByCurrentUserIdAndVideoId = (state, videoId) => (
    Object.values(state.entities.likes).filter(like => (
        like.userId === state.session.id && like.likeableType === 'Video' && like.likeableId === parseInt(videoId)
    ))[0]
);
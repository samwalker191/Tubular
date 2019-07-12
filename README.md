# ![alt text](https://github.com/samwalker191/Tubular/blob/master/app/assets/images/logo.png "Tubular Logo")
[Live App](https://walkertubular.herokuapp.com/#/)

Tubular is video sharing website where users can upload, watch, and interact with each other's videos through comments and a like/dislike system. It was built utlizing a Rails backend with a React/Redux frontend.

This project was created within an approximately 10 day timeframe, but will have additional features added in the future.

## Features
 * BCrypt encrypted user authentication from frontend to backend
 * Logged in users can upload videos with a custom image (thumbnail) to serve as a preview.
   * Once uploaded, users can edit the title, description, and thumbnail of their videos.
 * Videos accumulate views each time it is watched in order to gauge popularity of a video.
 * Videos will begin playing once they are loaded on the page and the next video will be switched to automatically when the current video ends.
 * Logged in users can like or dislike a video only once.
   * Each video displays its accumulated likes and dislikes in order to measure its popularity.
 * Logged in users can also comment on a video.
 * Users can use the search bar at the top of the screen to filter all of the videos by their title.
 * Users have access to a nav bar that can assist them in navigating to key locations of the site.
 
## Video Upload
Once logged in, users can click on the video icon located within the header. They will be met by the following page:
 
![alt text](https://github.com/samwalker191/Tubular/blob/master/app/assets/images/upload_form.png "Upload Form")
 
Users can select a video file to add by clicking on the field containing the video icon. Similarly, users can select an image file to use as a thumbnail for their video. Finally, they will need to input a title and description to enable the video to be uploaded. At this time, they just need to click on the 'Publish' button, after which, they will be sent to the home page and be able to see their video be added to the master list of videos.

In order to keep code more DRY, both the upload and edit video form are rendered from one component. Each form has different information passed to the shared component which then renders the page based on what was given to it. Below is an example of the information passed from state to the edit version of the video form.

 ```
 const mapSTP = (state, ownProps) => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    let defaultVideo = {
        title: '',
        description: '',
        videoURL: null,
        thumbnail: null
    };
    let video = state.entities.videos[ownProps.match.params.videoId] || defaultVideo;
    return ({
        video: video,
        errors: state.errors.videoErrors,
        formType: 'Update your video details',
        buttonType: 'Update',
        currentUser: currentUser,
    });
};
```
## Likes/Dislikes
Once logged in, users can decide whether or not they would like to like or dislike the video they are watching. All they need to do is click on the thumb's up or thumb's down icon below the video player, example shown below.



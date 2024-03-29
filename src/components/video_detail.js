import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-detail col-md-8'>
            <div className='title'>
                <h4>{video.snippet.title}</h4>
            </div>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
            </div>
            <div className='description list-group-item'>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
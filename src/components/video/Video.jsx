import './video.css';
const Video = () => {
  return (
    <>
      <iframe
        src="https://player.vimeo.com/video/895719838?h=40adfc4fd9"
        className="video"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen></iframe>
    </>
  );
};

export default Video;

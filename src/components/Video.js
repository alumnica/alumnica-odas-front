import React from "react";
import "./Video.scss";

const Video = ({ src }) => {
  // const [loading, setLoading] = useState(true);

  return (
    <div className="video-container">
      <video width="1920" height="1350" autoPlay controls src={src} />
    </div>
  );
};
export default Video;

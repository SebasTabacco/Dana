import Footer from './../../components/layout/Footer';
import Header from './../../components/layout/Header';
import "./../../styles/components/pages/Videos.css";

const videosData = [
  {
    title: "Video Tutorial 1",
    videoUrl: "https://www.youtube.com/embed/tzN2pSWjRaE?start=4"

  },
  {
    title: "Video Testimonial 2",
    videoUrl: "https://www.youtube.com/embed/O1iZM_YKARg?start=1"
  },
  {
    title: "Video Demo 3",
    videoUrl: "https://www.youtube.com/embed/6jA5REJp6Ug"
  }
];

const VideoEmbed = () => {
  return (
    <div className="app-container">
      <Header />
      {/* Contenedor principal para los videos */}
      <div className="videos-container">
        <h2 className="page-title">Videos</h2>
        {videosData.map((video, index) => (
          <div key={index} className="video-card">
            <h3 className="video-title">{video.title}</h3>
            <div className="video-wrapper">
              <iframe 
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default VideoEmbed;

      
      
      
    

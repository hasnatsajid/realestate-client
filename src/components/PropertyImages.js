import { useEffect } from 'react';
import { useState } from 'react';

const PropertyImages = ({ setNewProperty, newProperty }) => {
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState('');

  const onAddingPhoto = (e) => {
    const imgPath = e.target.value;
    const img = imgPath.slice(imgPath.lastIndexOf('\\') + 1);

    setPhotos((prev) => [...prev, `/${img}`]);
  };

  useEffect(() => {
    setNewProperty((prev) => ({
      ...prev,
      photos: photos,
    }));
  }, [photos]);

  const onAddingVideo = (e) => {
    const video = e.target.value;

    if (video) {
      setVideo(video);

      setNewProperty((prev) => ({
        ...prev,
        [e.target.name]: video,
      }));
    }
  };

  return (
    <div className="property-images">
      <div className="title">
        <h1>Images and Video</h1>
      </div>

      <div className="sub-title">
        <h2>Photo gallery</h2>
      </div>

      <div className="images">
        <div className="photo">
          <input type="file" name="photos" onChange={onAddingPhoto} />
        </div>
      </div>

      <div className="videos">
        <h2>Video tour</h2>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Youtube link (optional) </label>
          </div>
          <div className="input">
            <input type="text" name="video" placeholder="Link from Youtube" onChange={onAddingVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyImages;

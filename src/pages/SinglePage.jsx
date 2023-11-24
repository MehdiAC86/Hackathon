import { useLoaderData } from "react-router-dom";
import "../assets/Style/singleImage.css";
import * as htmlToImage from "html-to-image";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { useRef } from "react";

function SingleImage() {
  const picture = useLoaderData();
  const dataPicture = [picture];

  const elementRef = useRef(null);
  const download = () => {
    htmlToImage
      .toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Christmas-picture";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <>
      <div className="card-image" ref={elementRef}>
        {dataPicture &&
          dataPicture.map((photo) => (
            <img
              src={photo.src.large2x}
              alt={photo.alt}
              key={photo.id}
              className="image"
            />
          ))}
      </div>
      <div className="share-buttons">
        <div className="share">
          <FacebookShareButton url={picture.src.medium}>
            <FacebookIcon round />
          </FacebookShareButton>
        </div>
        <div className="share">
          <FacebookMessengerShareButton url={picture.src.medium}>
            <FacebookMessengerIcon round />
          </FacebookMessengerShareButton>
        </div>
        <div className="share">
          <TwitterShareButton url={picture.src.medium}>
            <TwitterIcon round />
          </TwitterShareButton>
        </div>
        <button type="button" className="share download" onClick={download}>
          Download
        </button>
      </div>
    </>
  );
}
export default SingleImage;

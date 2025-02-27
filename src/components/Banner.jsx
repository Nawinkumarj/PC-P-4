const Banner = ({bannerImg, image, text, breakText, highlightText}) => {
  return (
    <div className="Banner-container">
      <img
          className="Bannerbg-img"
          src={bannerImg}
      />
      <div className="Banner-main">
        <div className="Banner-imgbg1">
          <div className="Banner-imgbg2">
            <div className="Banner-img">
                          <img src={image} />
            </div>
          </div>
        </div>
        <div className="Banner-content">
          <h1>
            &quot;{text}<br />
            <span className="Banner-break">
              {breakText}
              <span className="Banner-color"> {highlightText}</span>&quot;
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

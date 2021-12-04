import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import author from "../header/me.png";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h1>ABOUT ME</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="photo-wrapper">
              <img
                src={author}
                alt="Andrey Dovganyuk"
                style={{ width: "100%" }}
              />
              <div className="photo-overlay">
                <div className="photo-text social">
                  <h5 style={{ textAlign: "center", color: "#fff" }}>
                    Help me grow, please share!
                  </h5>
                  <>
                    <FacebookShareButton
                      className="icon-button"
                      url={"https://reactjs.org"}
                      quote={
                        "This is the text which you want to show when people share your portfolio!"
                      }
                      hashtag="#FrontedDeveloper"
                    >
                      <FacebookIcon className="icon" size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      className="icon-button"
                      url={"https://reactjs.org"}
                      quote={
                        "This is the text which you want to show when people share your portfolio!"
                      }
                      hashtag="#FrontedDeveloper"
                    >
                      <TwitterIcon className="icon" size={32} round={true} />
                    </TwitterShareButton>
                    <TelegramShareButton
                      className="icon-button"
                      url={"https://reactjs.org"}
                      quote={
                        "This is the text which you want to show when people share your portfolio!"
                      }
                      hashtag="#FrontedDeveloper"
                    >
                      <TelegramIcon className="icon" size={32} round={true} />
                    </TelegramShareButton>
                    <RedditShareButton
                      className="icon-button"
                      url={"https://reactjs.org"}
                      quote={
                        "This is the text which you want to show when people share your portfolio!"
                      }
                      hashtag="#FrontedDeveloper"
                    >
                      <RedditIcon className="icon" size={32} round={true} />
                    </RedditShareButton>
                    <LinkedinShareButton
                      className="icon-button"
                      url={"https://reactjs.org"}
                      quote={
                        "This is the text which you want to show when people share your portfolio!"
                      }
                      hashtag="#FrontedDeveloper"
                    >
                      <LinkedinIcon className="icon" size={32} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton
                      className="icon-button"
                      url={"https://reactjs.org"}
                      quote={
                        "This is the text which you want to show when people share your portfolio!"
                      }
                      hashtag="#FrontedDeveloper"
                    >
                      <WhatsappIcon className="icon" size={32} round={true} />
                    </WhatsappShareButton>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 about-right">
            <>
              <h4>Hi I am Name</h4>
            </>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              quidem totam sequi dolorem neque veniam voluptate magnam aliquam
              aspernatur nostrum, sint, voluptatem, deserunt fuga ratione unde
              possimus repellendus incidunt enim.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              quidem totam sequi dolorem neque veniam voluptate magnam aliquam
              aspernatur nostrum, sint, voluptatem, deserunt fuga ratione unde
              possimus repellendus incidunt enim.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              quidem totam sequi dolorem neque veniam voluptate magnam aliquam
              aspernatur nostrum, sint, voluptatem, deserunt fuga ratione unde
              possimus repellendus incidunt enim.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              quidem totam sequi dolorem neque veniam voluptate magnam aliquam
              aspernatur nostrum, sint, voluptatem, deserunt fuga ratione unde
              possimus repellendus incidunt enim.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              quidem totam sequi dolorem neque veniam voluptate magnam aliquam
              aspernatur nostrum, sint, voluptatem, deserunt fuga ratione unde
              possimus repellendus incidunt enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

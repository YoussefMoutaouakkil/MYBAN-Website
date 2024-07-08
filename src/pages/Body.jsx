import HeaderSticky from "../components/HeaderSticky";
import Page from "../components/Page";
import ListSpaceY from "../components/ListSpaceY";
import PropTypes from "prop-types";
import "./Body.css";

const Body = ({ className = "" }) => {
  return (
    <main className={`body ${className}`}>
      <section className="header-sticky-wrapper">
        <HeaderSticky />
      </section>
      <section className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-message">
            <div className="hero-slogan">
              <div className="we-are-blending-past-vibes-wit-parent">
                <div className="we-are-blending-container">
                  <span>
                    <span>We</span>
                    <i className="i">{` `}</i>
                  </span>
                  <span className="are-blending-past">
                    are Blending Past vibes with
                  </span>
                </div>
                <div className="future-trends-wrapper">
                  <h1 className="future-trends">Future trends.</h1>
                </div>
              </div>
              <div className="call-to-action">
                <div className="c-t-a-button">
                  <div className="create-a-legend-with-your-merk-wrapper">
                    <div className="create-a-legend">
                      Create a legend with your merketing strategy
                    </div>
                  </div>
                  <div className="our-forte-lies-container">
                    <p className="our-forte-lies">{`Our forte lies in crafting bespoke strategies to boost your brand’s presence `}</p>
                    <p className="and-increasing-your">
                      and increasing your impact in the marketplace
                    </p>
                    <p className="m3a-myban-ghadi">{`M3a MYBAN Ghadi Tbaaaan `}</p>
                  </div>
                </div>
              </div>
              <div className="link-disabledcursor-not-allo-wrapper">
                <button className="link-disabledcursor-not-allo2">
                  <div className="get-started">Get Started</div>
                </button>
              </div>
            </div>
          </div>
          <div className="picture-mt-9">
            <div className="image-wrapper">
              <div className="div" />
              <div className="div1" />
              <img
                className="image-icon2"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
            <h1 className="all-you-need">{`ALL YOU NEED `}</h1>
          </div>
        </div>
      </section>
      <section className="work-showcase">
        <div className="showcase-content">
          <div className="showcase-grid">
            <img
              className="showcase-grid-child"
              loading="lazy"
              alt=""
              src="/group-27181.svg"
            />
          </div>
          <div className="showcase-description">
            <div className="description-content">
              <div className="paragraph">
                <h1 className="check-our-work">Check Our Work</h1>
              </div>
              <div className="recent-projects">
                <div className="take-a-look">
                  Take a look at some of our recent projects to see how we've
                  helped businesses like yours succeed online.
                </div>
              </div>
            </div>
          </div>
          <img
            className="showcase-content-child"
            loading="lazy"
            alt=""
            src="/group-27182.svg"
          />
        </div>
      </section>
      <section className="testimonials">
        <Page />
        <div className="group-div">
          <div className="frame-child2" />
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-13679.svg"
          />
          <div className="based-on-145-reviews-parent">
            <div className="based-on-145-container">
              <span className="span">{`5.0 `}</span>
              <span className="based-on">Based on</span>
              <span className="span1">{` 145 `}</span>
              <span className="reviews">Reviews</span>
            </div>
            <div className="star-rating">
              <img
                className="star-rating-child"
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
              <div className="star-duo-parent">
                <img
                  className="star-duo-icon"
                  loading="lazy"
                  alt=""
                  src="/star-2.svg"
                />
                <img className="star-duo-icon1" alt="" src="/star-3.svg" />
              </div>
              <img className="star-rating-item" alt="" src="/star-4.svg" />
              <img className="star-rating-inner" alt="" src="/full-stars.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="mission-statement">
        <div className="mission-content">
          <div className="mission-heading">
            <div className="we-want-to">We want to change how content is</div>
            <div className="written-and-distributed">
              written and distributed.
            </div>
          </div>
          <div className="ambition-statement">
            <div className="ambition-heading">
              <div className="we-want-to1">
                We want to build the best tools to help
              </div>
              <div className="ambitious-content-teamsdevelo">
                ambitious content teams—developers,
              </div>
            </div>
            <div className="content-goal">
              <div className="marketers-bloggers-journalis">
                marketers, bloggers, journalists—write
              </div>
              <div className="better-content-faster">
                better content, faster.
              </div>
            </div>
            <button className="link-disabledcursor-not-allo3">
              <img className="icon" alt="" src="/icon.svg" />
              <div className="read-more-about">Read more about our mission</div>
            </button>
          </div>
          <div className="pricing-content-wrapper">
            <div className="pricing-content">
              <div className="pricing-plan">
                <div className="plan-details">
                  <div className="plan-header">
                    <h1 className="pricing">Pricing</h1>
                  </div>
                  <div className="get-started-with-container">
                    <span>{`Get started with a free Personal Account, or a Team with `}</span>
                    <span className="unlimited-members">
                      unlimited members.
                    </span>
                  </div>
                </div>
              </div>
              <div className="plan-options">
                <div className="div-p-5">
                  <div className="personal-agency">
                    <div className="for-personal-use">For Personal Use</div>
                  </div>
                  <div className="personal-container">
                    <div className="personal">
                      <b className="free">Free</b>
                    </div>
                    <div className="divider-border-dark-border-so" />
                    <ListSpaceY
                      image="/image-1.svg"
                      personalWorkspace="Personal Workspace"
                    />
                    <div className="divider-border-dark-border-so1" />
                    <div className="list-space-y-3">
                      <div className="item-whitespace-nowrap">
                        <div className="sites-">10 SITES---,</div>
                        <div className="personal-sites-requests">
                          <div className="unlimited-requests">
                            Unlimited requests
                          </div>
                        </div>
                      </div>
                      <div className="item-whitespace-nowrap1">
                        <div className="logos-">1000 logos ------</div>
                        <div className="unlimited-requests1">
                          Unlimited requests
                        </div>
                      </div>
                      <div className="item-whitespace-nowrap2">
                        <div className="empty-benefit-name">
                          ------------------
                        </div>
                        <div className="unlimited-requests2">
                          Unlimited requests
                        </div>
                      </div>
                    </div>
                    <div className="personal-button-wrapper">
                      <div className="personal-button">
                        <div className="link-disabledcursor-not-allo-container">
                          <button className="link-disabledcursor-not-allo4">
                            <div className="get-started1">{`Get Started `}</div>
                          </button>
                        </div>
                        <div className="payments-secured-by">
                          Payments secured by MasterCard
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-relative">
                  <div className="div-p-51">
                    <div className="for-teams">For Teams</div>
                    <div className="for-agency-use-wrapper">
                      <div className="for-agency-use">For Agency Use</div>
                    </div>
                    <div className="personal-pricing">
                      <div className="personal-amount">
                        <div className="personal-value">
                          <b className="currency-symbol">{`$29 `}</b>
                          <div className="billing-cycle">
                            <div className="month">/ month</div>
                          </div>
                        </div>
                      </div>
                      <div className="divider-border-dark-border-so2" />
                      <ListSpaceY
                        image="/image-4.svg"
                        personalWorkspace="Unlimited Members"
                      />
                      <div className="divider-border-dark-border-so3" />
                      <div className="list-space-y-31">
                        <div className="item-whitespace-nowrap3">
                          <div className="empty-team-site">-------------</div>
                          <div className="empty-request">
                            --------------------------
                          </div>
                        </div>
                        <div className="item-whitespace-nowrap4">
                          <div className="empty-team-logo">
                            --------------------
                          </div>
                          <div className="empty-logo-request">
                            ---------------------
                          </div>
                        </div>
                        <div className="item-whitespace-nowrap5">
                          <div className="empty-team-benefit">
                            --------------------
                          </div>
                          <div className="empty-team-benefit1">
                            ------------
                          </div>
                        </div>
                      </div>
                      <div className="team-button-wrapper">
                        <div className="team-button">
                          <div className="team-create">
                            <button className="link-disabledcursor-not-allo5">
                              <div className="create-a-team">Create a Team</div>
                            </button>
                          </div>
                          <div className="payments-secured-by1">
                            Payments secured by MasterCard
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-opaque">
                    <div className="payments-secured-by2">
                      Payments secured by Stripe
                    </div>
                    <div className="link-disabledcursor-not-allo6">
                      <div className="create-a-team1">Create a Team</div>
                    </div>
                    <div className="list-space-y-32">
                      <div className="item-whitespace-nowrap6">
                        <div className="blocks">500 Blocks,</div>
                        <div className="then-25-per">then $2.5 per 125</div>
                      </div>
                      <div className="item-whitespace-nowrap7">
                        <div className="k-api-requests">100K API Requests,</div>
                        <div className="then-25-per1">then $2.5 per 25K</div>
                      </div>
                      <div className="item-whitespace-nowrap8">
                        <div className="m-cdn-requests">2M CDN Requests,</div>
                        <div className="then-5-per">then $5 per 1M</div>
                      </div>
                    </div>
                    <div className="divider-border-dark-border-so4" />
                    <div className="list-space-y-41">
                      <div className="item-text-dark-control-highli">
                        <div className="unlimited-members1">
                          Unlimited Members
                        </div>
                        <img
                          className="image-icon3"
                          alt=""
                          src="/image-7.svg"
                        />
                      </div>
                      <div className="item-flex3">
                        <div className="discord-support1">Discord Support</div>
                        <input className="image" type="checkbox" />
                      </div>
                      <div className="item-flex4">
                        <div className="ai-assistant1">AI Assistant</div>
                        <img
                          className="image-icon4"
                          alt=""
                          src="/image-9.svg"
                        />
                      </div>
                    </div>
                    <div className="divider-border-dark-border-so5" />
                    <div className="paragraph1">
                      <div className="month1">/ month</div>
                      <b className="b">{`$29 `}</b>
                    </div>
                    <div className="for-teams1">For Teams</div>
                  </div>
                </div>
              </div>
              <div className="free-empty-container">
                <div className="div2">
                  -----------------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="question-container">
        <div className="questions">
          <div className="question-title-container">
            <h1 className="frequently-asked-questions">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="questions-list">
            <div className="contact-question">
              <div className="contact-background" />
              <div className="contact-question-container">
                <div className="how-can-i-contact-inkyy-team-wrapper">
                  <b className="how-can-i"> How can I contact Inkyy Team?</b>
                </div>
                <img
                  className="frame-icon"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className="contact-info">
                <div className="you-can-reach-container">
                  <span>{`You can reach us through our contact form on our website or by emailing us at `}</span>
                  <span className="mybanagencytech">myban@agency.tech</span>
                  <span> We typically respond within 24 hours.</span>
                </div>
              </div>
            </div>
            <div className="questions-wrapper">
              <div className="question-mark" />
              <input
                className="questions-wrapper-child"
                placeholder="What services do you offer?"
                type="text"
              />
              <img className="frame-icon1" alt="" src="/frame-1.svg" />
            </div>
            <div className="questions-wrapper1">
              <div className="questions-wrapper-item" />
              <div className="do-you-provide-website-mainten-wrapper">
                <b className="do-you-provide">
                  Do you provide website maintenance services?
                </b>
              </div>
              <img className="frame-icon2" alt="" src="/frame-1.svg" />
            </div>
            <div className="questions-wrapper2">
              <div className="questions-wrapper-inner" />
              <div className="how-long-does-it-take-to-desig-wrapper">
                <b className="how-long-does">
                  {" "}
                  How long does it take to design and develop a website?
                </b>
              </div>
              <img className="frame-icon3" alt="" src="/frame-1.svg" />
            </div>
            <div className="questions-wrapper3">
              <div className="questions-wrapper-child1" />
              <div className="do-you-require-a-deposit-for-p-wrapper">
                <b className="do-you-require">
                  Do you require a deposit for projects?
                </b>
              </div>
              <img className="frame-icon4" alt="" src="/frame-1.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="touch-container">
        <div className="touch">
          <div className="touch-title">
            <h1 className="lets-get-in">Let’s Get in Touch</h1>
          </div>
          <div className="form-container">
            <div className="form-inputs">
              <div className="form-labels-container">
                <b className="email">Email</b>
              </div>
              <div className="form-inputs-container">
                <div className="form-inputs-container-child" />
                <div className="exampleemailcom">example@email.com</div>
              </div>
            </div>
            <div className="form-inputs1">
              <div className="name-wrapper">
                <b className="name">Name</b>
              </div>
              <div className="frame-div">
                <div className="frame-child3" />
                <input
                  className="full-name"
                  placeholder="full name"
                  type="text"
                />
              </div>
            </div>
            <div className="form-inputs2">
              <div className="message-wrapper">
                <b className="message">Message</b>
              </div>
              <textarea
                className="form-inputs-child"
                placeholder="write your message...."
                rows={11}
                cols={35}
              />
            </div>
            <button className="form-submit">
              <b className="get-in-touch">Get in Touch</b>
            </button>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer-content">
          <div className="div3" />
          <div className="rectangle-parent1">
            <div className="frame-child4" />
            <div className="footer-image-and-links">
              <div className="footer-logo-and-social">
                <img
                  className="fichier-12x-1"
                  loading="lazy"
                  alt=""
                  src="/2fichier-12x-1@2x.png"
                />
                <div className="footer-links">
                  <div className="footer-call-action">
                    <div className="ready-to-elevate">
                      Ready to elevate your online presence? Contact us today to
                      discuss your project and discover how we can bring your
                      vision to life.
                    </div>
                  </div>
                  <div className="footer-navigation">
                    <div className="home1">Home</div>
                    <div className="about1">About</div>
                    <div className="how-it-works1">How it Works</div>
                    <div className="services1">Services</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="footer-company-info">
                <img
                  className="footer-company-icon"
                  alt=""
                  src="/frame-5.svg"
                />
                <div className="made-with-love">
                  Made with love powered by Myban.tech
                </div>
              </div>
              <div className="footer-social-links">
                <div className="frame-parent">
                  <img
                    className="frame-child5"
                    loading="lazy"
                    alt=""
                    src="/group-27153.svg"
                  />
                  <img
                    className="frame-child6"
                    loading="lazy"
                    alt=""
                    src="/group-27154.svg"
                  />
                  <img
                    className="frame-child7"
                    loading="lazy"
                    alt=""
                    src="/group-27155.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;

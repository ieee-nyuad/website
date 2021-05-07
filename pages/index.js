import { useState } from "react";
import { Slide } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import Particles from "react-tsparticles";
import { BsChevronDoubleDown } from "react-icons/bs";

import SEO from "../components/SEO";
import particlesSettings from "../components/particles.json";
import EventsSlideshow from "../components/EventsSlideshow";

import styles from "../styles/Index.module.css";

export default function Home() {
  const [isAboutActive, setAboutActive] = useState(false);
  const [isSeminarsActive, setSeminarsActive] = useState(false);
  const [isJoinActive, setJoinActive] = useState(false);

  return (
    <div className={styles.container}>
      <SEO />
      <Particles options={particlesSettings} />

      <div className={styles.content}>
        <div className={styles.landing}>
          <h1 className={styles.h1_default}>IEEE @ NYUAD</h1>
          <h1 className={styles.h1_mobile}>
            IEEE <br /> @ <br /> NYUAD
          </h1>
          <p>PRE-PROFESSIONAL ENGINEERING</p>
          <div className={styles.join_text}>
            <img src="/icons/arrow-right.svg" />
            <a href="/join.html">JOIN US NOW!</a>
          </div>
          <a href="#about">
            <BsChevronDoubleDown className={styles.double_chevron} />
          </a>
        </div>

        <VisibilitySensor
          onChange={(isVisible) => {
            !isAboutActive && setAboutActive(isVisible);
          }}
        >
          <div id="about">
            <Slide direction="left" timeout={1000} in={isAboutActive}>
              <div className={styles.about}>
                <h2>ABOUT</h2>
                <div className={styles.about_textoverlay}>
                  <div className={styles.about_text}>
                    <p>
                      <strong>
                        The Institute of Electrical and Electronics Engineers
                        (IEEE)
                      </strong>{" "}
                      is the world's largest technical professional organization
                      dedicated to advancing technology.
                      <br />
                      At <strong>NYUAD</strong>, the IEEE student branch was
                      established in 2019 and has grown to include members from
                      diverse technical fields, such as electrical engineering,
                      computer engineering, computer science and mechanical
                      engineering.
                    </p>
                    <br />
                    <a href="/about">More details...</a>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={(isVisible) => {
            !isSeminarsActive && setSeminarsActive(isVisible);
          }}
        >
          <div>
            <Slide direction="right" timeout={1000} in={isSeminarsActive}>
              <div>
                <EventsSlideshow />
              </div>
            </Slide>
          </div>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={(isVisible) => {
            !isJoinActive && setJoinActive(isVisible);
          }}
        >
          <div>
            <Slide direction="left" timeout={1000} in={isJoinActive}>
              <div className={styles.about} id="about">
                <h2>BUILD A COMMUNITY AND NETWORK</h2>
                <div className={styles.about_textoverlay}>
                  <div className={styles.about_text}>
                    <p>
                      The NYUAD IEEE student branch has over{" "}
                      <strong>50 members</strong> of different fields of study
                      and specialization. If you are interested in tech, you are
                      welcome to join and we will be happy to add you to our
                      team.
                    </p>
                    <br />
                    <a
                      href="https://join.slack.com/t/ieeenyuad/shared_invite/zt-p65jdubp-Z8GqctFqPDvHBqcoPbv8_A"
                      target="blank"
                    >
                      Join our Slack group
                    </a>
                    <br />
                    <a href="mailto:ieee.nyuad@nyu.edu">Contact Us</a>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </VisibilitySensor>
      </div>
    </div>
  );
}

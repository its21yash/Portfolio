import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Profile.module.css";

const Profile = () => {
  const handleHireMe = () => {
    const phoneNumber = "918607698362";

    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-parent"]}>
        <div className={styles["profile-details"]}>
          <div className={styles.colz}>
            <div className={styles["cols-icon"]}>
              <a href="mailto:yash38709@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://github.com/its21yash">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100034343543101">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/its21yash/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/its21yash">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className={styles["profile-details-name"]}>
            <span className={styles["primary-text"]}>
              {" "}
              Hello, I am{" "}
              <span className={styles["highlighted-text"]}>Yashpal</span>
            </span>
          </div>
          <div className={styles["profile-details-role"]}>
            <span className={styles["primary-text"]}>
              {" "}
              <h1 className={styles.typical}>
                {" "}
                <TypeAnimation
                  sequence={[
                    "Python Enthusiast",
                    1000,
                    "Enthusiastic Dev 😎",
                    1000,
                    "Frontend Developer 💻",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "React Dev 🌐",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <span className={styles["profile-role-tagline"]}>
                Skilled web developer with a knack for building responsive,
                user-friendly websites and contributing to innovative web
                solutions.
              </span>
            </span>
          </div>
          <div className={styles["profile-options"]}>
            <button
              className={`${styles.btn} ${styles["primary-btn"]}`}
              onClick={handleHireMe}
            >
              Hire Me
            </button>
            <a href="Resume.pdf" download={"Yashpal Resume.pdf"}>
              <button className={`${styles.btn} ${styles["highlighted-btn"]}`}>
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className={styles["profile-picture"]}>
          <div className={styles["profile-picture-background"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

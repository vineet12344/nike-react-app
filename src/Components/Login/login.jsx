import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
// import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.outer_box}>
          <div className={styles.form}>
            <div className={styles.form_body}>
              <div className={styles.form_heading}>
                <span className={styles.heading}>Get in touch</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  style={{ width: "100%" }}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  style={{ width: "100%" }}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                cols="30"
                rows="8"
                placeholder="Message"
              />
              <div className={styles.btn_container}>
                <button style={{ textAlign: "center", maxWidth: "100%" }}>
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className={styles.contact_info_box}>
            <div className={styles.form_heading}>
              <span className={styles.heading}>Contact us</span>
            </div>
            <div className={styles.contact_info}>
              <div className={styles.contact_option}>
                <p>
                  <CiLocationOn className={styles.icons} />
                  <strong>Address: </strong> Somewhere in this universe
                </p>
                <p>
                  <FiPhoneCall className={styles.icons} />
                  <strong>Phone: </strong>+91-7754816512
                </p>
                <p>
                  <FaRegPaperPlane className={styles.icons} />
                  <strong>Email: </strong>selfdev22@gmail.com
                </p>
                <p>
                  <ImEarth className={styles.icons} />
                  <strong>Website: </strong>mywebsite.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

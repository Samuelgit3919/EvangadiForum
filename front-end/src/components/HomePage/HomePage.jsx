import React from "react";
import Data from "./data";

import Accordion from "./Accordion/Accordion";
import styles from "./homePage.module.css";
function HomePage() {
  return (
    <section className={styles.Home_Container}>
      <div   className={styles.Inner_container} >
        <div  className={styles.Inner_header}>
          <div className={styles.Inner_profile}>
            <div className={styles.Inner_profile_Right}>
              {/* ask que */}

              <button>Ask Question</button>
            </div>
            
            <div className={styles.Inner_profile_Left}>
              {/* Wellome UserName here */}
              <p> Wellcome:<span  >{"Group 2"} </span> </p>
            </div>
          </div>

          <div className={styles.Inner_input}>
            <input type="text" placeholder="search question" />
          </div>
        </div>
        <div className={styles.Accord_Container}>
          {
            /* 
          
          API
          */
            Data?.map((info, i) => {
              return <Accordion userData={info} key={i} />;
            })
          }
        </div>
      </div>
    </section>
  );
}

export default HomePage;

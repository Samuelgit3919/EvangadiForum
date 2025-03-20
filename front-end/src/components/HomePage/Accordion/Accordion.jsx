import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";
import styles from "./accordion.module.css";

function Accordion({ userData }) {
  const [selected, setSelected] = useState(null);

  const handleSingleView = (currentID) => {
    setSelected(currentID == selected ? null : currentID);
  };
  console.log(selected);
  return (
    <section onClick={() => handleSingleView(userData.id)}>
      <hr />
      <div className={styles.Container}>
        <div className={styles.Accordion_Profile}>
          <div>
          
            <AccountCircleIcon className={styles.Accordion_Icon} />
          </div>

          <div>{userData?.username || "Guest User"}</div>
        </div>

        <div className={styles.questions}>
          <p>{userData.question}</p>
        </div>

        <div>
          <KeyboardArrowRightIcon />
        </div>
      </div>

      {/* Display */}
    <div className={styles.answer}>

      {selected ? <p>{userData.answer}</p> : null}
    </div>
    </section>
  );
}

export default Accordion;

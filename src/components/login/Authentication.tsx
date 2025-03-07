import { useState } from "react";
import { styles } from "../../styles";

const Authentication = () => {
  const [userToggle, setUserToggle] = useState(true);

  return (
    <div className={`${styles.aboutPageTitle} px-4`}>
      <div className="flex flex-row justify-center items-center bg-grey-2 rounded-full">
        <a
          href="#"
          className={`${styles.celesteButton} max-w-[135px] ${userToggle ? "" : "bg-grey-2"}`}
          onClick={() => {
            setUserToggle(!userToggle);
          }}
        >
          User
        </a>
        <a
          href="#"
          className={`${styles.springButton} ${userToggle ? "bg-grey-2" : ""}`}
          onClick={() => {
            setUserToggle(!userToggle);
          }}
        >
          Contributor
        </a>
        {/* USER FORM */}

        {/* CONTRIBUTOR FORM */}
      </div>
    </div>
  );
};

export default Authentication;

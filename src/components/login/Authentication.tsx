import { useState } from "react";
import { styles } from "../../styles";

const Authentication = () => {
  const [userToggle, setUserToggle] = useState(true);

  return (
    <div className={`${styles.aboutPageTitle} px-4`}>
      <div className="flex flex-row justify-center items-center bg-grey-2 rounded-full">
        <a
          href="#user"
          className={`z-20 rounded-l-full bg-[#b2ffff] hover:bg-[#427799] w-[155px] h-[50px] flex justify-center items-center text-neutral-950 font-bold text-xl max-w-[135px] ${userToggle ? "hover:text-white" : "bg-[var(--drwhite)] hover:bg-[var(--celeste)]"}`}
          onClick={() => {
            setUserToggle(true);
          }}
        >
          User
        </a>
        <a
          href="#contibutor"
          className={`z-20 rounded-r-full bg-[#00ef7e] hover:bg-[#007a4a] w-[155px] h-[50px] flex justify-center items-center text-neutral-950 font-bold text-xl ${userToggle ? "bg-[var(--drwhite)] hover:bg-[var(--spring)]" : "hover:text-white"}`}
          onClick={() => {
            setUserToggle(false);
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

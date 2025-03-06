import { styles } from "../../styles";

const Authentication = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row w-[400px] justify-evenly mt-8">
        <a
          href="https://github.com/luhouyang/opengenome.git"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.celesteButton}`}
        >
          User
        </a>
        <a
          href="https://opengenome.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.springButton}`}
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

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { FC } from "react";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { milestones } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils";

interface Milestone {
  title: string;
  sub_title: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface MilestoneCardProps {
  milestone: Milestone;
}

const MilestoneCard: FC<MilestoneCardProps> = ({ milestone }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--dark-blue)",
        color: "var(--smoke)",
      }}
      contentArrowStyle={{
        borderRight: "8px solid var(--smoke)",
      }}
      date={milestone.date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={milestone.icon}
            alt={milestone.sub_title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      iconStyle={{ background: milestone.iconBg }}
    >
      <div>
        <h3 className="text-secondary font-bold">{milestone.title}</h3>
        <p
          className="grey-2 font-semibold"
          style={{ margin: 0 }}
        >
          {milestone.sub_title}
        </p>
      </div>

      <ul className="mt-4 list-disc ml-4 space-y-2">
        {milestone.points.map((point, index) => (
          <li
            key={`milestone-point-${index}`}
            className="text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>OGP progress</p>
        <h2 className={styles.sectionHeadText}>Timeline</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {milestones.map((milestone: Milestone, index: number) => (
            <MilestoneCard
              key={`milestone-${index}`}
              milestone={milestone}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, "timeline");

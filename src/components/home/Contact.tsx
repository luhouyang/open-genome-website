import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { textVariant, slideIn } from "../../utils";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormProps>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bqqrnx9",
        "template_excex52",
        {
          from_name: form.name,
          to_name: "Lu Hou Yang",
          from_email: form.email,
          to_email: "luhouyang@open-genome-project.org",
          message: form.message,
        },
        "Rz9mErchNY4PSp5l0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you I will get back to you as soon as possible!");

          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contact Us</h2>
      </motion.div>

      <div className="bg-[var(--dark-blue)] rounded-md p-4">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75]"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="my-4 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[var(--dark-grey)] py-4 px-6 font-medium rounded-md placeholder:text-secondary text-primary focus:outline-none focus:border-2 focus:ring-0 focus:border-celeste"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[var(--dark-grey)] py-4 px-6 font-medium rounded-md placeholder:text-secondary text-primary focus:outline-none focus:border-2 focus:ring-0 focus:border-celeste"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-4">Your Message</span>
              <textarea
                name="message"
                rows={7}
                value={form.message}
                onChange={handleChangeTextArea}
                placeholder="Your message here . . ."
                className="bg-[var(--dark-grey)] py-4 px-6 font-medium rounded-md placeholder:text-secondary text-primary focus:outline-none focus:border-2 focus:ring-0 focus:border-celeste"
              />
            </label>

            <button
              type="submit"
              className={`${styles.celesteButton} w-full rounded-md mt-4`}
            >
              {loading ? "Sending . . ." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "@tanstack/react-form";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { textVariant, slideIn } from "../../utils";
import SmallLoading from "../common/SmallLoading";
import ErrorCard from "../common/ErrorCard";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: ({ value }) => {
        if (!value.name || !value.email || !value.email.includes("@") || !value.email.includes(".") || !value.message) {
          return "Please fill in all fields";
        }
      },
    },
    onSubmit: ({ value }) => {
      setLoading(true);

      emailjs
        .send(
          "service_bqqrnx9",
          "template_excex52",
          {
            from_name: value.name,
            to_name: "Lu Hou Yang",
            from_email: value.email,
            to_email: "luhouyang@open-genome-project.org",
            message: value.message,
          },
          "Rz9mErchNY4PSp5l0"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you I will get back to you as soon as possible!");
          },
          (error) => {
            setLoading(false);

            console.log(error);

            alert("Something went wrong.");
          }
        );
    },
  });

  const [loading, setLoading] = useState(false);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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
            className="my-4 flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <form.Field
              name="name"
              validators={{
                onChangeAsyncDebounceMs: 400,
                onChangeAsync: ({ value }) => {
                  delay(1000);
                  if (value == "bruh") {
                    return "User name is taken";
                  }
                },
                onChange: ({ value }) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters long";
                  }
                },
              }}
              children={(field) => (
                <div>
                  <label className="flex flex-col">
                    <span className="text-secondary font-medium mb-4">Your Name</span>
                  </label>
                  <div className="relative flex flex-col">
                    <input
                      type="text"
                      name="name"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="What's your name?"
                      className="bg-[var(--dark-grey)] py-4 px-6 font-medium rounded-md placeholder:text-secondary text-primary focus:outline-none focus:border-2 focus:ring-0 focus:border-celeste"
                    />
                    {field.getMeta().isValidating && (
                      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                        <SmallLoading />
                      </div>
                    )}
                  </div>
                  {field.state.meta.errors && <div className={styles.errorText}>{field.state.meta.errors.toString()}</div>}
                </div>
              )}
            />

            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if (!value.includes("@") || !value.includes(".")) {
                    return "Please enter a valid email";
                  }
                },
              }}
              children={(field) => (
                <div>
                  <label className="flex flex-col">
                    <span className="text-secondary font-medium mb-4">Your Email</span>
                  </label>
                  <div className="relative flex flex-col">
                    <input
                      type="email"
                      name="email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="What's your email?"
                      className="bg-[var(--dark-grey)] py-4 px-6 font-medium rounded-md placeholder:text-secondary text-primary focus:outline-none focus:border-2 focus:ring-0 focus:border-celeste"
                    />
                    {field.getMeta().isValidating && (
                      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                        <SmallLoading />
                      </div>
                    )}
                  </div>
                  {field.state.meta.errors && <div className={styles.errorText}>{field.state.meta.errors.toString()}</div>}
                </div>
              )}
            />

            <form.Field
              name="message"
              validators={{
                onChangeAsyncDebounceMs: 400,
                onChangeAsync: ({ value }) => {
                  if (value.length < 10) {
                    return "Message must be at least 10 characters long";
                  }
                },
              }}
              children={(field) => (
                <div>
                  <label className="flex flex-col">
                    <span className="text-secondary font-medium mb-4">Your Message</span>
                  </label>
                  <div className="relative flex flex-col">
                    <textarea
                      name="message"
                      rows={7}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Your message here . . ."
                      className="bg-[var(--dark-grey)] py-4 px-6 font-medium rounded-md placeholder:text-secondary text-primary focus:outline-none focus:border-2 focus:ring-0 focus:border-celeste"
                    />
                    {field.getMeta().isValidating && (
                      <div className="absolute right-7 top-1/7 transform -translate-y-1/2">
                        <SmallLoading />
                      </div>
                    )}
                  </div>

                  {field.state.meta.errors && <div className={styles.errorText}>{field.state.meta.errors.toString()}</div>}
                </div>
              )}
            />

            <form.Subscribe
              selector={(state) => state.errors}
              children={(errors) => errors.length > 0 && <ErrorCard errors={errors.toString()} />}
            />
            <button
              type="submit"
              className={`${styles.celesteButton} w-full rounded-md`}
              onClick={form.handleSubmit}
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

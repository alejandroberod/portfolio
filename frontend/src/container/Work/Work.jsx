import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "motion/react";

import { AppWrap } from "../../wrapper";

import "./Work.scss";
import { div } from "motion/react-client";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  function handleWorkFilter(item) {}

  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio</span> section
        <div className="app__work-filter">
          {["JavaScript", "React.Js", "Node.Js", "AI", "All"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </h2>
    </>
  );
}

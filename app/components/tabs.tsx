"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Winners, Poster } from "../components";
import Tab from "./tab";

interface tab {
  title: string;
  winners: { name: string; photo: string }[];
  poster: PosterProps;
}

interface PosterProps {
  url: string;
  desc: string;
  pdf: string;
}

export default function Tabs({ tabs }: { tabs: tab[] }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(ind: number) {
    setActiveTab(ind);
  }

  const number = tabs[activeTab].winners.length;
  return (
    <div className="max-container ">
      <div
        className="flex justify-center"
        // intial=
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-col md:flex-row justify-center"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
        >
          {number > 0 ? (
            <div className={`w-full ${number > 2 ? "" : "md:w-1/2"}`}>
              <Winners winnerList={tabs[activeTab].winners} />
            </div>
          ) : null}
          {tabs[activeTab].poster.url.length > 0 ? (
            <div className="flex justify-center w-full md:w-1/2 items-center">
              <Poster {...tabs[activeTab].poster} />
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

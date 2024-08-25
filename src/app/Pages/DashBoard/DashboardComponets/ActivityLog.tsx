import React from "react";

const ActivityLog = () => {
  return (
    <div className="max-w-3xl mt-12">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Logs</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            5:11 PM
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Traffic increasing on property.
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non
            in atque culpa reiciendis rem dignissimos consectetur, autem nisi
            ratione!
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            6:20 PM
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            People increasing on property.
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            8:20 PM
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bikes increasing on property.
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non
            quod 
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ActivityLog;

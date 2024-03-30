import Link from "next/link";
import type { ReactElement } from "react";

export type RunningPlanProps = {
  heading: ReactElement;
  motivation: ReactElement;
  prePlan: ReactElement;
  table: ReactElement;
  postPlan: ReactElement;
  prePrePlan: ReactElement;
};
export function RunningPlan({
  prePlan,
  prePrePlan,
  table,
  postPlan,
  motivation,
  heading,
}: RunningPlanProps) {
  return (
    <div className="w-full py-12 md:py-24">
      <Link
        className="flex items-center w-5 justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        href="/"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <title>Go back</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Back</span>
      </Link>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {heading}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {motivation}
            </p>
          </div>
          <p className="text-sm tracking-wide text-gray-500/60 dark:text-gray-400/60">
            {prePrePlan}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">{prePlan}</div>
        <div className="w-full mt-8 overflow-auto rounded-lg border">
          {table}
        </div>
        {postPlan}
      </div>
    </div>
  );
}

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

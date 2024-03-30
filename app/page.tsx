import Link from "next/link";

export default function Home() {
  return (
    <section key="1" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Personalized Coaching
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get the guidance you need to reach your goals. Our experienced
            coaches are here to support you every step of the way.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 items-start justify-center gap-8 md:gap-6 lg:gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight">
              <Link className="underline" href="haakon">
                Håkon - Marathon
              </Link>
            </h3>
            <p className="text-2xl font-bold">$99/month</p>
            <p className="text-gray-500 dark:text-gray-400">
              Personalized training plan for your marathon goals.
            </p>
            <div className="mt-4">
              <Link className="text-base font-medium underline" href="haakon">
                Read more
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight">Sophia - Yoga</h3>
            <p className="text-2xl font-bold">$79/month</p>
            <p className="text-gray-500 dark:text-gray-400">
              Find your inner peace with customized yoga sessions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight">
              David - Leadership
            </h3>
            <p className="text-2xl font-bold">$149/month</p>
            <p className="text-gray-500 dark:text-gray-400">
              Take your leadership skills to the next level with expert
              coaching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

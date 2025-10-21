import { ChartBarIcon, PencilIcon, NewspaperIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { Hero } from "./components/ui/Hero";

const features = [
  {
    name: "SEO Marketing",
    description: "Boost your website's visibility with data-driven SEO strategies that target the right keywords and attract quality traffic.",
    icon: ChartBarIcon,
  },
  {
    name: "Content Strategy",
    description: "Develop compelling content that engages your audience and drives conversions through strategic planning and execution.",
    icon: PencilIcon,
  },
  {
    name: "Digital PR",
    description: "Leverage strategic public relations tactics to gain visibility, build brand authority, and create citable linkable assets that enhance your reputation.",
    icon: NewspaperIcon,
  },
  {
    name: "Educational Publishing",
    description: "Create impactful educational content and curriculum materials that enhance learning experiences.",
    icon: AcademicCapIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-500 dark:text-brand-400">Grow your business</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to succeed online
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From SEO optimization to content creation, we provide comprehensive digital marketing solutions tailored to your business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-brand-500 dark:text-brand-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

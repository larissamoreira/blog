import { useState } from "react";
import { UilAngleRight } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import Image from "next/image";
const name = "Larissa Gusmão";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Umind");

  const tabContent = [
    {
      id: "Umind",
      title: "Frontend Developer @ Umind",
      date: "july 2023 - now",
      listItems: [
        "developing new features and fixing bugs at a startup's Mental Health Care application",
        "created reusable components and features such as Carousel, Table Ordering, Notifications, PDFs, etc, which have improved the code quality and the app's user experience",
      ],
      techStack: ["react", "typescript", "tailwind"],
    },
    {
      id: "Assert",
      title: "Frontend Developer @ Assert",
      date: "jan 2023 - sept 2023",
      listItems: [
        "developed a responsive Vue web page from scratch, with complex features like Dashboard, QR Code, and integration with the MercadoPago payment API",
        "successfully integrated the frontend user interface with the backend API to create a seamless and responsive user experience",
        "collaborated with senior engineers and the product team following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations",
      ],
      techStack: ["vue", "nuxt.js", "vuetify", "postman"],
    },
    {
      id: "ThoughtWorks",
      title: "Software Developer Consultant @ ThoughtWorks",
      date: "may 2021 - jan 2023",
      listItems: [
        "consultant developer to a leading Canadian telecommunications client",
        "collaborated with agile, cross-functional, and distributed teams to develop and deliver end-to-end solutions for their highly trafficked e-commerce platform",
        "my responsibilities included software development, testing, deployment, maintenance, and continuous improvement. additionally, I collaborated on requirement analysis, practiced pair programming, conducted technical investigations, communicated with stakeholders, monitored the applications, and resolved bugs.",
      ],
      techStack: [
        "react",
        "node",
        "jest",
        "react testing library",
        "GCP",
        "postman",
      ],
    },
    {
      id: "Fractal",
      title: "Frontend Developer @ Fractal",
      date: "nov 2020 - may 2021",
      listItems: [
        "I was part of a team entrusted with the development of a platform that supports teachers in the educational process across multiple schools throughout Brazil",
      ],
      techStack: ["react", "bootstrap", "axios", "rest API"],
    },
    {
      id: "IFPB",
      title: "Web Developer @ Instituto Federal da Paraíba",
      date: "sept 2018 - apr 2019",
      listItems: [
        "developed and helped maintain various features in “SUAP”, an ERP system/online portal utilized by all 21 units of the college",
        "implemented a feature that enabled all students to submit their mandatory extracurricular activities through the college's online portal. as a result, the entire workflow was completely automated, streamlining the process and enhancing efficiency for program coordinators and students",
      ],
      techStack: [
        "django",
        "django rest framework",
        "postgreSQL",
        "javascript",
        "HTML5",
        "CSS3",
      ],
    },
  ];

  return (
    <>
      <section className="flex gap-4">
        <div>
          <h1 className="font-mono pb-2">/About me</h1>
          <p>
            I'm a Brazilian Software Developer with 5 years of experience in the
            software industry.
            <br /> I graduated with a Technologist degree in Analysis and
            Development of Computer Systems at{" "}
            <a href="https://www.ifpb.edu.br/" target="_blank">
              Instituto Federal da Paraíba
            </a>
            .
            <br />
          </p>
          <div className="py-4">
            Here are some technologies I've worked with:
            <ul className="flex gap-4">
              <div>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  Javascript ES6+
                </li>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  React.js
                </li>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  Vue.js
                </li>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  Typescript
                </li>
              </div>
              <div>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  Next.js
                </li>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  Tailwind
                </li>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  HTML & CSS
                </li>
                <li className="flex flex-row items-center">
                  <UilAngleRight size="20" color="#A78BFA" />
                  Python & Django
                </li>
              </div>
            </ul>
          </div>
          <div>
            Outside work, I'm interested in{" "}
            <a
              href="https://www.goodreads.com/user/show/48945955-larissa-gusm-o"
              target="/"
            >
              books
            </a>{" "}
            and{" "}
            <a href="https://letterboxd.com/nnothumann/" target="/">
              films
            </a>
            <p>
              <button
                onClick={() => {
                  window.location.href = `mailto:lgusmao1996@gmail.com`;
                }}
                className="flex items-center border p-2 gap-1 hover:bg-slate-100 mt-2"
              >
                <UilEnvelope size="24" color="#A78BFA" /> <span>say hi!</span>
              </button>
            </p>
          </div>
        </div>
        <div>
          <Image
            priority
            src={"/images/profile.jpeg"}
            className="rounded-md"
            height={260}
            width={260}
            alt=""
          />
          <h1 className="text-xl text-center pt-2">{name}</h1>
          <div className="text-violet-400 flex gap-2 justify-center pt-2">
            <a href="https://github.com/larissadotjs" target="_blank">
              <UilGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/larissa-gusmao/"
              target="_blank"
            >
              <UilLinkedin />
            </a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <h1 className="font-mono pb-4">/Experience</h1>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-start w-24">
            {tabContent.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center py-1 ${
                  activeTab === tab.id ? "text-violet-400" : " text-gray-700"
                }`}
              >
                <UilAngleRight size="20" color="#A78BFA" />
                {tab.id}
              </button>
            ))}
          </div>
          <div>
            {tabContent.map((tab) => (
              <div
                key={tab.id}
                style={{ display: activeTab === tab.id ? "block" : "none" }}
              >
                <h1 className="text-lg break-words">{tab.title}</h1>
                <div className="flex flex-row gap-2 items-center text-gray-500">
                  <h2 className="text-sm">{tab.date}</h2>
                  {"|"}
                  <ul className="text-sm flex flex-row gap-3 font-bold">
                    {tab.techStack.join(", ")}
                  </ul>
                </div>

                <ul className="pt-4 pl-4 list-disc">
                  {tab.listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

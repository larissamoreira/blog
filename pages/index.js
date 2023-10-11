import { useState } from "react";

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
      <section>
        <h1 className="text-lg">hey there! Larissa here.</h1>
        <p>
          I'm Software Developer with 5 years of experience in the software
          industry. My focus area for the past few years has been frontend
          development with JavaScript and React, but I also have experience in
          the backend with Django and Node. besides coding, I'm interested in{" "}
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
          .
        </p>
      </section>
      <section className="py-10">
        <h1 className="font-mono pb-4">/Experience</h1>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-start w-24">
            {tabContent.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 py-2 ${
                  activeTab === tab.id ? "text-purple-700" : " text-gray-700"
                }`}
              >
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
                    <li key={index}> {item}</li>
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

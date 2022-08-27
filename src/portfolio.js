const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Johnson Adams | Portfolio",
  description:
    "",
  og: {
    title: "Adams' Portfolio",
    type: "website",
    url: "http://adamsfolio.netlify.app/home/",
  },
};

//Home Page
const greeting = {
  title: "Hello World!",
  sub: "Johnson Adams",
  logo_name: "Johnson Adams",
  resumeLink: "https://drive.google.com/file/d/1Z5p4s36FX3pmLMSbAonW-60umNUXnMaY/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/clearthestars",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://leetcode.com/adams-awesome/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "logos:linkedin-icon",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/johnson-adams/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Optimization & Control",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Tuning classical and modern controllers with various methods to manipulate complex non-linear systems",
        "⚡ Analysing the system behaviour under various assumptions and performing system identification with higher order regression",
        "⚡ Possess good hands-on with Matlab & Simulink tools and python libraries",
        "⚡ Working on high level path-planning algorithms of self driving cars with carla simulator",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        // {
        //   skillName: "NumPy",
        //   fontAwesomeClassname: "logos-numpy",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Matlab",
        //   fontAwesomeClassname: "logos-tableau",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
      ],
    },
    {
      title: "SDE & Coding",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed system-oriented mobile apps ranging from service to strategy based for startups, organisations and competitions",
        "⚡ Proficiency in handling data in json cloud platforms like firebase and APIs",
        "⚡ Worked on impactful projects in C, C++, Java, Python and Lua and UI/UX design and integration from stratch",
      ],
      softwareSkills: [
        // {
        //   skillName: "Android Studio",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "logos-bootstrap",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:Java",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
      ],
    },
    {
      title: "Product Development and IoT",
      fileName: "DesignImg",
      skills: [
        "⚡ Comfortable with designing complex structures in CAD softwares like Fusion 360",
        "⚡ Worked throughout the process from realising idea to developing the final product across multiple domains",
        "⚡ Programming with several micro-controllers to acquire and process data from/to transducers, along with wiring, harnessing and electrical interfacing",
        "⚡ Established IoT architecture ranging from home appliances to formula car applications",
      ],
      softwareSkills: [
        // {
        //   skillName: "Autodesk Fusion 360",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        // {
        //   skillName: "Raspberry pi",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Arduino",
        //   fontAwesomeClassname: "simple-icons:adobephotoshop",
        //   style: {
        //     color: "#2fa3f7",
        //   },
        // },
        // {
        //   skillName: "Autodesk Eagle",
        //   fontAwesomeClassname: "simple-icons:figma",
        //   style: {
        //     color: "#F24E1E",
        //   },
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects enabled me to possess inter-disciplinary exposure and focusses on the goals for the sustainabile world and working with/under diverse class of people-fellow classmates, entrepreneurs and professors to understand their unique prespectives in defining and solving problems. Here are some of them:",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Robotic Meta-Material",
      img_path: "ppi01.gif",
      description:
        "An active system with periodically varying bandgap nature to manipulate the incoming vibrations",
      tags: [
        {
          lang: "",
          color: "",
        },
      ],
      link: "https://docs.google.com/document/d/1fL7o885RzIH1oBm01vyk0_zD_s5TUCVqNPIOeqtn15U/edit?usp=sharing",
      code: "https://docs.google.com/document/d/1fL7o885RzIH1oBm01vyk0_zD_s5TUCVqNPIOeqtn15U/edit?usp=sharing",
      linkcolor: "white",
    },

    {
      title: "MPC based Path Following",
      img_path: "ppi02.png",
      description:
        "A research on MPC performance wrt classical PID and LQR with heading control and path following of a complicated container model.",
      tags: [
        {
          lang: "",
          color: "",
        },
      ],
      link: "https://docs.google.com/document/d/1Obw6KUTjIieU0PA1Lkk-DQSzkOj6PswvhBmS9DvTZMg/edit?usp=sharing",
      code: "https://docs.google.com/document/d/1Obw6KUTjIieU0PA1Lkk-DQSzkOj6PswvhBmS9DvTZMg/edit?usp=sharing",
      linkcolor: "white",
    },
    {
      title: "DAQ in FSAE Car",
      img_path: "ppi03.png",
      description:
        "Encompasses design of entire electrical system of a racecar from scratch and complying with FS rules",
      tags: [
        {
          lang: "",
          color: "",
        },
      ],
      link: "https://docs.google.com/document/d/1OEsNfz_KNf6eV_1XV4FyhH9oDfPZtLa0WZujYy20Sss/edit?usp=sharing",
      code: "https://docs.google.com/document/d/1OEsNfz_KNf6eV_1XV4FyhH9oDfPZtLa0WZujYy20Sss/edit?usp=sharing",
      linkcolor: "white",
    },
    {
      title: "Vehicle Networking in ADAS",
      img_path: "ppi04.png",
      description:
        "Developing Android app and incorporating with the ADAS architecture for more features.",
      tags: [
        {
          lang: "",
          color: "",
        },
      ],
      link: "https://docs.google.com/document/d/1dEWz5YrYHfYE1JmXK0BEaGmo-cfV8EUeXsvRf6gOAOU/edit?usp=sharing",
      code: "https://docs.google.com/document/d/1dEWz5YrYHfYE1JmXK0BEaGmo-cfV8EUeXsvRf6gOAOU/edit?usp=sharing",
      linkcolor: "white",
    },
    {
      title: "Engine Controller of Ethanol-Gasoline Dual Injection",
      img_path: "ppi05.png",
      description:
        "An approach to tackle the problems of fuel blend by precisely controlling the fuel input with dedicated GDIs",
      tags: [
        {
          lang: "",
          color: "",
        },
      ],
      link: "https://docs.google.com/document/d/1bUzHi-1AZ3BsggMpabLzJH3eLpiLtVHosLlRGSY8vb4/edit?usp=sharing",
      code: "https://docs.google.com/document/d/1bUzHi-1AZ3BsggMpabLzJH3eLpiLtVHosLlRGSY8vb4/edit?usp=sharing",
      linkcolor: "white",
    },

    {
      title: "OBD + Mobile Sensors based Vehicle Assessment ",
      img_path: "ppi06.jpg",
      description:
        "Diagnostic protocol and mobile motion sensors as tools to analyse ride performance.",
      tags: [
        {
          lang: "",
          color: "",
        },
      ],
      link: "https://docs.google.com/presentation/d/1FcPOEfOMza4zVJTiFlk4unuijgoFeGan/edit?usp=sharing&ouid=113309634103936631819&rtpof=true&sd=true",
      code: "https://docs.google.com/presentation/d/1FcPOEfOMza4zVJTiFlk4unuijgoFeGan/edit?usp=sharing&ouid=113309634103936631819&rtpof=true&sd=true",
      linkcolor: "white",
    },
    // {
    //   title: "Vehicle Networking in ADAS",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",s
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Research Associate",
        subtitle: "Indian Institute of Science (IISc)",
        date: "Nov 2021 - Jul 2022",
        content: [
          // "Used T5 Transformer Model to build a Question Answering Model which generates questions based on Keywords extracted (WordNet, Sense2Vec) from studyshot notes.",
          // "Built an MCQ Generation model using BERT",
          // "Developed a personalized Chatbot using Rasa (Botfront.io).",
          // "Created an Automatic Thumbnail Generator & Uploader for our youtube videos using Youtube v3 API",
          // "Working on OpenAI's semantic search engine.",
          // "Created a Clean MaterialUI Design for prototyping and design fixing before production-ready of APP",
          // "Created FrontEnd components for StudyShot website",
          // "Working on recommendation system for concept notes and questions based on student's behavior on our Flutter App(tracking)",
        ],
      },
      {
        title: "Undergraduate Researcher",
        subtitle: "Indian Institute of Technology Madras",
        date: "Feb 2021 - Aug 2021",
        content: [
          
        ],
      },
      {
        title: "Powertrain Engineer in FSAE Team",
        subtitle: "Raftar Formula Racing",
        date: "Jan 2019 - May 2020",
        content: [
          
        ],
      },
      {
        title: "Android Developer Intern",
        subtitle: "Planys Tech",
        date: "May 2018 - Aug 2018",
        content: [
          
        ],
      },
      // {
      //   title: "Summer Analytics Participant",
      //   subtitle: "IIT Guwahati",
      //   date: "April 2020 - June 2020",
      //   content: [
          
      //   ],
      // },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "MS in Robotics & Controls",
          subtitle: "Columbia University",
          date: "Aug 2022 - Dec 2023",
          content: [],
        },
        {
          title: "Bachelor of Technology",
          subtitle: "Indian Institute of Technology Madras (IITM)",
          date: "Aug 2017 - Jul 2021",
          content: [],
        },
      ],
    },
    {
      title: ["Achivements"],
      data: [
        // {
        //   title: "Ranks",
        //   content: [
        //     "#135/854 in Summer Analytics Kaggle Competition by IITG",
        //     "#113/5064 in CV-NLP Hackathon by HackerEarth",
        //   ],
        // },
        {
          title: "Featured",
          content: [
            "Winner of Thinkathon'19 by Think42Labs",
            "Overall Champions in Combustion Vehicle Category - Raftar Formula Racing - Formula Bharat 2020",
            "Runner of Bajaj Auto's MACH Challenge 2020",
          ],
        },
      ],
    },
    // {
    //   title: ["Freelance Work"],
    //   data: [
    //     {
    //       title: "Consultancy Website",
    //       subtitle: "kidsworldeducationconsultants.com",
    //       content: [
    //         "Created and hosted a website for consultancy providers in Kids Education Domain",
    //       ],
    //     },
    //     {
    //       title: "Portfolio Website",
    //       subtitle: "pranavphulware.netlify.app",
    //       content: [
    //         "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
    //       ],
    //     },
    //   ],
    // },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    // {
    //   title: "Tableau Analyst",
    //   subtitle: "Tableau",
    //   logo_path: "tabana-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Consumer",
    //   subtitle: "Tableau",
    //   logo_path: "tabcon-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Problem solving",
    //   subtitle: "HackerRank",
    //   logo_path: "problem-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Python",
    //   subtitle: "HackerRank",
    //   logo_path: "python-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Certificate of Merit",
    //   subtitle: "Summer Analytics | IIT Guwahati",
    //   logo_path: "iitg-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "IITG",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Desktop Qualified Associate",
    //   subtitle: "SimpliLearn",
    //   logo_path: "simplilearn-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Simplilearn",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Question Generation using Transformers",
    //   subtitle: "Udemy",
    //   logo_path: "udemy-01.png",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
    //   alt_name: "Udemy",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "Stanford University",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Visualization",
    //   subtitle: "University of Michigan",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "University of Michigan",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Scientist Career Track",
    //   subtitle: "DataCamp",
    //   logo_path: "datacamp-01.png",
    //   certificate_link:
    //     "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
    //   alt_name: "DataCamp",
    //   color_code: "#000000",
    // },
    // {
    //   title: "PowerBI Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "If you feel I can be of any help, please do drop me a message.",
  },
  addressSection: {
    title: "Address",
    subtitle: "1 Convent Ave, NYC-10027",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7339550659",
  },
};

//contact icons
const socialMediaLinks = [
  // {
  //   name: "Github",
  //   link: "https://github.com/rohankokkula",
  //   iconifyClassname: "simple-icons:hackerrank",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adams-s/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:s.adams@columbia.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/adams_awsme/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};

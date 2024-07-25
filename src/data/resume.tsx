import { Icons } from "@/components/icons";

export const DATA = {
  name: "Rupesh sharma",
  initials: "RS",
  url: "https://dillion.io",
  location: "Dhanbad , Jharkhand",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring software developer and passionate web developer. I love building projects and helping others. Very active on Twitter.",
  summary:
    "I’m Rupesh Sharma, an aspiring software developer and currently [student at NIT Agartala, specializing in Electronics and Instrumentation](/#education). I enjoy developing websites and am currently working on myPlacements a platform designed to simplify on-campus placements for both colleges and recruiters.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "MongoDB",
    "Postgresql",
    "Docker",
    "Kubernetes",
    "Tailwind",
    "C++",
  ],
  contact: {
    email: "rksharmagmo@gmail.com",
    tel: "+91-9973370694",
    social: {
      GitHub: {
        url: "https://github.com/rsharma828",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/rksharmagmo/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/Sharma_R_web3",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://youtube.com/c/",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      "company": "Kraffic Media",
  "href": "https://www.kraffic.com/",
  "badges": [],
  "location": "Patna, Bihar",
  "title": "Full Stack Intern",
  "logoUrl": "/kraffic.jpeg",
  "start": "December 2023",
  "end": "February 2024",
  "description": "Optimized and maintained client websites, integrated new functionalities, and interpreted client specifications to enhance website performance and user experience."
    }
  ],
  education: [
    {
      "school": "National Institute of Technology, Agartala",
      "href": "https://www.nita.ac.in/",
      "degree": "Bachelor of Technology in Electronics and Instrumentation",
      "logoUrl": "/nita.jpeg",
      "start": "August 2021",
      "end": "Present",
      "gpa": "8.61"
    },
    {
      "school": "Rajkamal Saraswati Vidyamandir",
      "href": "https://rsvm.in/",  
      "degree": "Senior Secondary Certificate",
      "logoUrl": "/rajkamal.jpeg",
      "start": "April 2018",
      "end": "March 2020",
      "percentage": "95.6"
    },
    {
      "school": "Kendriya Vidyalaya",
      "href": "https://gomoh.kvs.ac.in/", 
      "degree": "Higher Secondary Certificate",
      "logoUrl": "/kv.jpeg",
      "start": "July 2018",
      "end": "March 2020",
      "percentage": "88.6"
    }
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    {
      "title": "MyHoliday-Homes",
      "href": "",
      "dates": "Jan 2024 - March 2024",
      "active": true,
      "description": "Developed a robust hotel booking application using TypeScript, MongoDB for the database, and JWT for secure user authentication. Implemented features including hotel management, image uploads, search/sort/filter functionalities, and booking management. Utilized Tailwind CSS for sleek and responsive styling, enhancing the user interface of the application.",
      "technologies": [
        "TypeScript",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Stripe",
        "React",
        "NodeJs",
        "ExpressJs",
        "Zod"
      ],
      links: [
        {
          type: "Website",
          href: "https://myholiday-homes-1.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rsharma828/myHoliday-homes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      "image": "https://drive.google.com/file/d/1Lao3a9ZfTO1Lz85NAY9GvWvx-oneUe8d/preview",
      "video": ""
    },
    {
      "title": "Pay-Up",
      "href": "",
      "dates": "Dec 2023 - April 2024",
      "active": true,
      "description": "Crafted Pay-Up, a dynamic payment application leveraging the MERN stack to deliver seamless functionality and a user-friendly experience. Features include secure user authentication, real-time payment processing, and intuitive transaction management, empowering users to effortlessly handle their financial transactions.",
      "technologies": [
        "React",
        "NodeJs",
        "expressJs",
        "MongoDB",
        "Zod",
        "JWT"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/rsharma828/Pay-up_webApp",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rsharma828/Pay-up_webApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      "image": "https://drive.google.com/file/d/1TIf-uoRWGVf33kAXf8VpVxzeLeLYtdu7/preview",
      "video": ""
    },  
  ]
} as const;
//   hackathons: [
//     {
//       title: "Hack Western 5",
//       dates: "November 23rd - 25th, 2018",
//       location: "London, Ontario",
//       description:
//         "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 14th - 16th, 2018",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mobile application which delivers university campus wide events in real time to all students.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "FirstNet Public Safety Hackathon",
//       dates: "March 23rd - 24th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
//       icon: "public",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
//       links: [],
//     },
//     {
//       title: "DeveloperWeek Hackathon",
//       dates: "February 3rd - 4th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
//       links: [
//         {
//           title: "Github",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/cryptotrends/cryptotrends",
//         },
//       ],
//     },
//     {
//       title: "HackDavis",
//       dates: "January 20th - 21st, 2018",
//       location: "Davis, California",
//       description:
//         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
//       win: "Best Data Hack",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/my6footprint",
//         },
//         {
//           title: "ML",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/my6footprint-machine-learning",
//         },
//         {
//           title: "iOS",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/CarbonWallet",
//         },
//         {
//           title: "Server",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/wallet6-server",
//         },
//       ],
//     },
//     {
//       title: "ETH Waterloo",
//       dates: "October 13th - 15th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
//       links: [
//         {
//           title: "Organization",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ethdocnet",
//         },
//       ],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 15th - 17th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a virtual reality application allowing users to see themselves in third person.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Streamer Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/htn2017",
//         },
//         {
//           title: "Client Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/RTSPClient",
//         },
//       ],
//     },
//     {
//       title: "Hack The 6ix",
//       dates: "August 26th - 27th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ShareShip/ShareShip",
//         },
//         {
//           title: "Site",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://share-ship.herokuapp.com/",
//         },
//       ],
//     },
//     {
//       title: "Stupid Hack Toronto",
//       dates: "July 23rd, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/nsagirlfriend/nsagirlfriend",
//         },
//       ],
//     },
//     {
//       title: "Global AI Hackathon - Toronto",
//       dates: "June 23rd - 25th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/TinySamosas/",
//         },
//       ],
//     },
//     {
//       title: "McGill AI for Social Innovation Hackathon",
//       dates: "June 17th - 18th, 2017",
//       location: "Montreal, Quebec",
//       description:
//         "Developed realtime facial microexpression analyzer using AI",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
//       links: [],
//     },
//     {
//       title: "Open Source Circular Economy Days Hackathon",
//       dates: "June 10th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/genecis",
//         },
//       ],
//     },
//     {
//       title: "Make School's Student App Competition 2017",
//       dates: "May 19th - 21st, 2017",
//       location: "International",
//       description: "Improved PocketDoc and submitted to online competition",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
//       win: "Top 10 Finalist | Honourable Mention",
//       links: [
//         {
//           title: "Medium Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
//         },
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "HackMining",
//       dates: "May 12th - 14th, 2017",
//       location: "Toronto, Ontario",
//       description: "Developed neural network to optimize a mining process",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
//       links: [],
//     },
//     {
//       title: "Waterloo Equithon",
//       dates: "May 5th - 7th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "SpaceApps Waterloo",
//       dates: "April 28th - 30th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/earthwatch",
//         },
//       ],
//     },
//     {
//       title: "MHacks 9",
//       dates: "March 24th - 26th, 2017",
//       location: "Ann Arbor, Michigan",
//       description:
//         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/threejs-planes",
//         },
//       ],
//     },
//     {
//       title: "StartHacks I",
//       dates: "March 4th - 5th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
//       win: "1st Place Winner",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-ionic",
//         },
//         {
//           title: "Source (Server)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-rails",
//         },
//       ],
//     },
//     {
//       title: "QHacks II",
//       dates: "February 3rd - 5th, 2017",
//       location: "Kingston, Ontario",
//       description:
//         "Developed a mobile game which enables city-wide manhunt with random lobbies",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/human-huntr-react-native",
//         },
//         {
//           title: "Source (API)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/human-huntr-rails",
//         },
//       ],
//     },
//     {
//       title: "Terrible Hacks V",
//       dates: "November 26th, 2016",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mock of Windows 11 with interesting notifications and functionality",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
//         },
//       ],
//     },
//     {
//       title: "Portal Hackathon",
//       dates: "October 29, 2016",
//       location: "Kingston, Ontario",
//       description:
//         "Developed an internal widget for uploading assignments using Waterloo's portal app",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/UWPortalSDK/crowmark",
//         },
//       ],
//     },
//   ],
// } as const;

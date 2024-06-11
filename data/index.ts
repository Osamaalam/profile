export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: `I prioritize client collaboration`,
    //  fostering open communication `,
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "/people.png",
    img: "/w7.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Proven track record of implementing scalable and reliable solutions.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NFTs check during wallet login",
    des: "The goal of the client's project was to check if the user has certain NFTs, If yes then log that user into the SAAS. I used Moralis API and added WalletConnect, Metamask, and Coinbase wallet to log in and checked if the user wallet has certain NFTs.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Osamaalam",
  },
  {
    id: 2,
    title: "SUPERGUCCI - Solidity (NFTs) Development and Research",
    des: "The goal of the project was to analyze data on the Ethereum blockchain of big brands selling NFTs. Calculating sales price, transaction costs, and their impact on the environment. The project was successfully completed and the client was satisfied.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Osamaalam",
  },
  {
    id: 3,
    title: "Better Bookings",
    des: "I was Haired by LUIGI to add different functionalities and mange this website. I displayed dynamic user data of booked fights and worked with taulia api to integrate with better-bookings.com",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Osamaalam",
  },
  {
    id: 4,
    title: "WELLVY - FrontEnd",
    des: "I worked on the Frontend of the website specifically on Navbar similar to the website which i have attached link to with my client Maria",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Osamaalam",
  },
];

export const testimonials = [
  {
    quote:
      "I recently collaborated with Osama, an AI expert whose skills and knowledge were exceptional. He brilliantly applied complex AI concepts to our project, delivering results that exceeded our expectations. His professionalism and innovative approach were outstanding, making him a valuable asset to any team seeking to leverage AI technology.",
    name: "MVP for AI project",
    title: "⭐⭐⭐⭐⭐",
    img: "/upwork.svg",
  },
  {
    quote:
      "Osama has been truly a pleasure to work with. He's highly knowledgable and achieved what we've been looking for. He's been available throughout the day even at late and early hours, and the final output is fantastic. I highly recommend Osama and will work with him again when necessary. Thanks again for great work.",
    name: "Chatbot for E-commerce - ChatGPT API + LangChain",
    title: "⭐⭐⭐⭐⭐",
    img: "/upwork.svg",
  },
  {
    quote:
      "We rehired Osama to do some additional work for us. Osama delivers on time, is friendly, and provides quality work. If required, we would be happy to rehire again.",
    name: "AI Chatbots Research",
    title: "⭐⭐⭐⭐⭐",
    img: "/upwork.svg",
  },
  {
    quote:
      "Very responsive and followed instructions very well. Organized and knows his stuff!",
    name: "Solidity Developer Needed (DAPP)",
    title: "⭐⭐⭐⭐⭐",
    img: "/upwork.svg",
  },
  {
    quote:
      "Osama is a proficient developer with great knowledge in web3 and blockchain fields. During our meetings he was truly resourceful and able to communicate technical topics with complete efficiency and openness. As a result, I gained new perspectives and a much better understanding about our project's technical requirements. I highly recommend working with Osama.",
    name: "Simple Smart Contract - Solidity",
    title: "⭐⭐⭐⭐⭐",
    img: "/upwork.svg",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   img: "/profile1.jpg",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    desc: "From pixel to database, I orchestrate the symphony of digital creation as a senior full stack developer.",
    className: "md:col-span-2",
    thumbnail: "/w3.png",
  },
  {
    id: 2,
    title: "AI Chatbot Specialist",
    desc: "Designing AI chatbots that not only converse but also intuitively understand and cater to user needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/w4.png",
  },
  {
    id: 3,
    title: "Development and Training",
    // title: "Freelance App Dev Project",
    desc: "Shaped the intelligence of tomorrow by meticulously curating and refining machine learning models.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/w5.png",
  },
  {
    id: 4,
    title: "Senior ML Engineer",
    desc: "Spearheaded the development of transformative solutions by leveraging advanced algorithms and data insights",
    className: "md:col-span-2",
    thumbnail: "/w6.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Osamaalam",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/osama-alam-68135b254/",
  },
];

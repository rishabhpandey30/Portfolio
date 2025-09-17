export const generatePDFCV = () => {
  const cvData = {
    name: "RISHABH PANDEY",
    title: "Aspiring Software Developer",
    contact: {
      email: "rishabhpandey3011@gmail.com",
      phone: "8864902606",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    summary:
      "Highly motivated MERN Developer skilled in building scalable full-stack applications using React and Node.js. Passionate about building effective, user-friendly solutions and continuously expanding skills in Data Science and Machine Learning. Quick learner with strong problem-solving and debugging skills.",
    skills: {
      professional: ["Design Understanding", "Team Collaboration", "Problem Solving"],
      technical: [
        "C/C++",
        "Python",
        "Java",
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "REST APIs",
        "Git",
        "MS Excel",
        "Tableau",
      ],
    },
    projects: [
      {
        name: "Secure File Management System",
        date: "April 2025",
        description: [
          "Created a file storage system with secure user login",
          "Enabled file upload, download, delete and share",
          "Integrated Two-Factor authentication using OTP via email",
        ],
      },
      {
        name: "YouTube Trending Video Prediction",
        date: "Dec 2024",
        description: [
          "Analyze and predict YouTube videos Trend",
          "Performed in-depth data analysis and visualization",
          "Built and evaluated supervised learning models to predict video trending potential",
        ],
      },
      {
        name: "AI Workout Planner",
        date: "Feb 2025",
        description: [
          "Developed an interactive fitness chatbot using React and Gemini API",
          "Delivers the personalized workout plans based on user need",
          "Integrated dynamic UI components and handles real-time user inputs",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Lovely Professional University, Punjab, India",
        period: "2023-2027",
        grade: "CGPA: 8.47",
        note: "Active participant in technical clubs and coding contests.",
      },
      {
        degree: "CBSE (Class XII)",
        institution: "ST. Joseph Sr. Sec. School, India",
        period: "2022-2023",
        grade: "Percentage: 83.40%",
      },
    ],
    additional: {
      languages: ["English", "Hindi"],
      responsibility: "Worked with NGO (NSRDS) and helped in vocational training",
      certifications: [
        "NPTEL Cloud Computing",
        "The Bits and Bytes of CN",
        "Data Analytics Job Simulation",
        "C++ Programming Coursera",
      ],
    },
  }

  return cvData
}

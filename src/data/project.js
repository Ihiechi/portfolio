import hrDashboardImg from "../assets/hrdashboard.png";
import weatherAppImg from "../assets/weatherapp.png";
import passwordGenImg from "../assets/passwordgenerator.png";
import taskManagerImg from "../assets/taskmanager.png";
export const projects = [
  {
    id: 1,
    title: "HR Dashboard",
    description: "A full HR management system for employee and leave tracking.",
    features: [
      "Employee management system",
      "Leave approval workflow",
      "Dynamic leave calculations",
      "Global state with Context API",
    ],
    tech: ["React", "Context API", "React Router"],
    github: "https://github.com/Ihiechi/hr-dashboard",
    live: "https://hr-dashboard-three-gamma.vercel.app/",
    image: hrDashboardImg,
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather app with API integration.",
    features: ["City search", "Live weather data", "Dynamic UI updates"],
    tech: ["React", "API", "JavaScript"],
    github: "https://github.com/Ihiechi/react-weather",
    live: "https://react-weather-xi3t.vercel.app/",
    image: weatherAppImg,
  },
  {
    id: 3,
    title: "Password Generator",
    description: "Customizable secure password generator.",
    features: [
      "Adjustable length",
      "Include/exclude characters",
      "Copy to clipboard",
    ],
    tech: ["React", "JavaScript"],
    github: "https://github.com/Ihiechi/password-generator",
    live: "https://password-generator-kohl-omega-70.vercel.app/",
    image: passwordGenImg,
  },
  {
    id: 4,
    title: "Task Manager App",
    description: " Task management tool",
    features: [
      "Built with React and Firebase",
      "User authentication (login/signup)",
      "CRUD operations with Firestore",
      "Task filtering and priority system",
      "Responsive UI using Tailwind CSS",
    ],
    tech: ["React", "JavaScript", "Tailwind", "Firebase"],
    github: "",
    live: "https://react-taskmanager-blue.vercel.app/",
    image: taskManagerImg,
  },
];


import { useState } from "react";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { ModuleCard as ModuleCardType, Course } from "@/types";

const Dashboard = () => {
  const [enrolledCourses] = useState<Course[]>([
    {
      id: "1",
      title: "Introduction to Computer Science",
      description: "Learn the basics of programming, algorithms, and data structures.",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1515879128891-407e95bc2196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      modules: 10,
      completed: 6
    },
    {
      id: "2",
      title: "English Communication Skills",
      description: "Improve your spoken and written English skills for academic and professional success.",
      progress: 30,
      thumbnail: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      modules: 8,
      completed: 2
    },
    {
      id: "3",
      title: "Mathematics for Class X",
      description: "Comprehensive preparation for Class X mathematics with practice problems.",
      progress: 45,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      modules: 12,
      completed: 5
    }
  ]);

  const [modules] = useState<ModuleCardType[]>([
    {
      id: "lms",
      title: "Learning Management",
      description: "Access your courses and track your learning journey",
      icon: "lms",
      color: "blue",
      path: "/lms"
    },
    {
      id: "communication",
      title: "Communication Skills",
      description: "Improve your speaking and pronunciation",
      icon: "communication",
      color: "green",
      path: "/communication"
    },
    {
      id: "assessments",
      title: "Assessments",
      description: "Take tests and quizzes to evaluate your progress",
      icon: "assessments",
      color: "yellow",
      path: "/assessments"
    },
    {
      id: "results",
      title: "Results & Analytics",
      description: "Check your performance and improvement areas",
      icon: "results",
      color: "yellow",
      path: "/results"
    },
    {
      id: "liveClasses",
      title: "Live Classes",
      description: "Join scheduled live sessions with mentors",
      icon: "liveClasses",
      color: "yellow",
      path: "/live-classes"
    },
    {
      id: "doubtSystem",
      title: "Doubt System",
      description: "Post your questions and get answers from mentors",
      icon: "doubtSystem",
      color: "yellow",
      path: "/doubts"
    },
    {
      id: "skillDevelopment",
      title: "Skill Development",
      description: "Build practical skills for future career success",
      icon: "skillDevelopment",
      color: "red",
      path: "/skills"
    },
    {
      id: "leaderboard",
      title: "Leaderboard",
      description: "See where you stand among your peers",
      icon: "leaderboard",
      color: "purple",
      path: "/leaderboard"
    },
    {
      id: "rewards",
      title: "Rewards & Achievements",
      description: "Earn badges and certificates for your hard work",
      icon: "rewards",
      color: "red",
      path: "/rewards"
    },
    {
      id: "studyMaterial",
      title: "Study Materials",
      description: "Access textbooks, notes, and past papers",
      icon: "studyMaterial",
      color: "green",
      path: "/study-materials"
    },
    {
      id: "research",
      title: "Research & Development",
      description: "Explore scientific research updates and projects",
      icon: "research",
      color: "green",
      path: "/research"
    },
    {
      id: "employment",
      title: "Employment",
      description: "Find internship and job opportunities",
      icon: "employment",
      color: "green",
      path: "/employment"
    },
    {
      id: "scholarships",
      title: "Scholarships",
      description: "Discover scholarship and grant opportunities",
      icon: "scholarships",
      color: "green",
      path: "/scholarships"
    },
    {
      id: "workspace",
      title: "Personal Workspace",
      description: "Your unified space for all learning activities",
      icon: "workspace",
      color: "red",
      path: "/workspace"
    }
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">My Learning Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">EduBridge Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

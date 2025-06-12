
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, CheckCircle, Clock, Smartphone, Heart, Users, Globe, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("in-progress");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  const inProgressSkills = [
    {
      id: 1,
      title: "Digital Literacy",
      description: "Master essential computer skills for the digital age",
      progress: 65,
      timeRemaining: "3 hours",
      category: "Technology",
      icon: Smartphone
    },
    {
      id: 2,
      title: "Public Speaking",
      description: "Build confidence and clarity in verbal communication",
      progress: 40,
      timeRemaining: "5 hours",
      category: "Communication",
      icon: Users
    },
    {
      id: 3,
      title: "Time Management",
      description: "Learn to prioritize tasks and manage your schedule effectively",
      progress: 25,
      timeRemaining: "6 hours",
      category: "Productivity",
      icon: Clock
    }
  ];

  const completedSkills = [
    {
      id: 4,
      title: "Critical Thinking",
      description: "Analytical problem solving and reasoning",
      completedDate: "March 25, 2025",
      category: "Cognitive",
      icon: BookOpen
    },
    {
      id: 5,
      title: "Basic HTML",
      description: "Fundamentals of web page structure",
      completedDate: "March 10, 2025",
      category: "Technology",
      icon: Globe
    }
  ];

  const recommendedSkills = [
    {
      id: 6,
      title: "Emotional Intelligence",
      description: "Understand and manage emotions effectively",
      duration: "8 hours",
      enrolled: 245,
      category: "Social",
      icon: Heart
    },
    {
      id: 7,
      title: "Microsoft Office Basics",
      description: "Learn to use Word, Excel, and PowerPoint",
      duration: "10 hours",
      enrolled: 312,
      category: "Technology",
      icon: Smartphone
    },
    {
      id: 8,
      title: "Team Collaboration",
      description: "Work effectively in groups and team projects",
      duration: "6 hours",
      enrolled: 187,
      category: "Social",
      icon: Users
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Skill Development</h1>
            <p className="text-muted-foreground">Build practical skills for future success</p>
          </div>
          <Button className="bg-edubridge-purple">
            <Award className="mr-2 h-4 w-4" />
            View My Certificates
          </Button>
        </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:w-[500px]">
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {inProgressSkills.map((skill) => (
              <motion.div key={skill.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                        {skill.category}
                      </Badge>
                      <skill.icon className="h-5 w-5 text-edubridge-purple/70" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-lg">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{skill.timeRemaining} remaining</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Continue Learning</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="completed">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {completedSkills.map((skill) => (
              <motion.div key={skill.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                        {skill.category}
                      </Badge>
                      <skill.icon className="h-5 w-5 text-green-600/70" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-lg">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Completed: {skill.completedDate}</span>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Certificate</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="recommended">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {recommendedSkills.map((skill) => (
              <motion.div key={skill.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
                        {skill.category}
                      </Badge>
                      <skill.icon className="h-5 w-5 text-yellow-600/70" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-lg">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Duration: {skill.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{skill.enrolled} students enrolled</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Enroll Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Skills;

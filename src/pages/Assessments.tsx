
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Clock, Calendar, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Assessments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
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

  const upcomingTests = [
    {
      id: 1,
      title: "Mathematics - Algebra",
      description: "Chapter 5: Quadratic Equations",
      dueDate: "Tomorrow, 2:00 PM",
      timeLimit: "45 minutes",
      questions: 20
    },
    {
      id: 2,
      title: "Science - Physics",
      description: "Chapter 3: Motion and Forces",
      dueDate: "April 10, 10:00 AM",
      timeLimit: "60 minutes",
      questions: 25
    },
    {
      id: 3,
      title: "English",
      description: "Comprehension & Vocabulary Quiz",
      dueDate: "April 12, 3:30 PM",
      timeLimit: "30 minutes",
      questions: 15
    }
  ];
  
  const completedTests = [
    {
      id: 4,
      title: "Computer Science",
      description: "Introduction to Programming",
      completedDate: "April 2, 2025",
      score: 85,
      outOf: 100
    },
    {
      id: 5,
      title: "Mathematics - Geometry",
      description: "Chapter 4: Triangles and Circles",
      completedDate: "March 29, 2025",
      score: 92,
      outOf: 100
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Assessments</h1>
          <p className="text-muted-foreground">Track your upcoming and completed tests</p>
        </div>
        <Button className="bg-edubridge-blue">
          <FileText className="mr-2 h-4 w-4" />
          Take Practice Test
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:w-[400px]">
          <TabsTrigger value="upcoming">Upcoming Tests</TabsTrigger>
          <TabsTrigger value="completed">Completed Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {upcomingTests.map((test) => (
              <motion.div key={test.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                        {test.title}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium">{test.description}</h3>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Due: {test.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Time limit: {test.timeLimit}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>{test.questions} questions</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Test</Button>
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
            {completedTests.map((test) => (
              <motion.div key={test.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                        {test.title}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium">{test.description}</h3>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Completed: {test.completedDate}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>Score: {test.score}/{test.outOf}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Results</Button>
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

export default Assessments;

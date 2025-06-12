
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Video, Calendar, Clock, Users, PlayCircle, Link } from "lucide-react";
import { motion } from "framer-motion";

const LiveClasses = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingClasses = [
    {
      id: 1,
      title: "Mathematics - Quadratic Equations",
      mentor: "Mrs. Sharma",
      date: "Today",
      time: "2:00 PM - 3:00 PM",
      participants: 25,
      status: "Scheduled"
    },
    {
      id: 2,
      title: "Physics - Laws of Motion",
      mentor: "Mr. Patel",
      date: "Tomorrow",
      time: "10:00 AM - 11:30 AM",
      participants: 18,
      status: "Scheduled"
    },
    {
      id: 3,
      title: "English - Essay Writing",
      mentor: "Ms. Gupta",
      date: "April 10, 2025",
      time: "3:00 PM - 4:00 PM",
      participants: 22,
      status: "Scheduled"
    }
  ];

  const recordedClasses = [
    {
      id: 4,
      title: "Chemistry - Periodic Table",
      mentor: "Dr. Singh",
      date: "April 1, 2025",
      duration: "55 minutes",
      views: 120
    },
    {
      id: 5,
      title: "Biology - Cell Structure",
      mentor: "Mrs. Reddy",
      date: "March 28, 2025",
      duration: "62 minutes",
      views: 85
    },
    {
      id: 6,
      title: "Computer Science - Basic Programming",
      mentor: "Mr. Kumar",
      date: "March 25, 2025",
      duration: "48 minutes",
      views: 142
    }
  ];

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
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Live Classes</h1>
          <p className="text-muted-foreground">Join interactive sessions with mentors</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            View Calendar
          </Button>
          <Button className="bg-edubridge-purple">
            <Link className="mr-2 h-4 w-4" />
            Share Class Link
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full md:w-[400px]">
              <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
              <TabsTrigger value="recorded">Recorded Sessions</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {upcomingClasses.map((session) => (
                  <motion.div key={session.id} variants={itemVariants}>
                    <Card className="module-card card-hover">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                            {session.status}
                          </Badge>
                          <Badge variant="outline" className="bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                            {session.mentor}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-medium text-lg">{session.title}</h3>
                        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{session.participants} students enrolled</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" disabled={session.date !== "Today"}>
                          <Video className="mr-2 h-4 w-4" />
                          {session.date === "Today" ? "Join Now" : "Remind Me"}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="recorded">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {recordedClasses.map((session) => (
                  <motion.div key={session.id} variants={itemVariants}>
                    <Card className="module-card card-hover">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                            Recorded
                          </Badge>
                          <Badge variant="outline" className="bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                            {session.mentor}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-medium text-lg">{session.title}</h3>
                        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>Recorded on {session.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Duration: {session.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{session.views} views</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Today's Schedule</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingClasses.filter(c => c.date === "Today").map((session) => (
                <div key={session.id} className="p-3 rounded-md bg-edubridge-blue/10 border border-edubridge-blue/20">
                  <div className="font-medium">{session.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{session.time}</div>
                  <Button size="sm" className="mt-2 w-full">Join</Button>
                </div>
              ))}
              {upcomingClasses.filter(c => c.date === "Today").length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="mx-auto h-8 w-8 mb-2 opacity-50" />
                  <p>No classes scheduled for today</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Full Schedule
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;

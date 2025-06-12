
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Course } from "@/types";
import { BookOpen, Calendar, Clock, Trophy } from "lucide-react";

const LMS = () => {
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Learning Management System</h2>
        <p className="text-muted-foreground">Track your course progress and manage your learning</p>
      </div>
      
      <Tabs defaultValue="my-courses" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-4">
          <TabsTrigger value="my-courses">My Courses</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-courses" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden h-full">
                <div className="h-40 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                    <Badge variant="outline">{course.completed}/{course.modules}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center p-2 bg-muted/30 rounded">
                      <BookOpen className="h-4 w-4 mx-auto" />
                      <span className="text-xs block mt-1">{course.modules} Modules</span>
                    </div>
                    <div className="text-center p-2 bg-muted/30 rounded">
                      <Clock className="h-4 w-4 mx-auto" />
                      <span className="text-xs block mt-1">20 Hours</span>
                    </div>
                    <div className="text-center p-2 bg-muted/30 rounded">
                      <Trophy className="h-4 w-4 mx-auto" />
                      <span className="text-xs block mt-1">Certificate</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-edubridge-purple hover:bg-edubridge-purple-secondary">
                    Continue Learning
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <h3 className="font-medium">This Week's Schedule</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                  <div key={day} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <span className="font-medium">{day}</span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="font-medium">{["Mathematics", "Computer Science", "English", "Science", "Social Studies"][i]}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{["10:00 AM", "2:00 PM", "11:30 AM", "3:15 PM", "9:45 AM"][i]} - {["11:30 AM", "3:30 PM", "1:00 PM", "4:45 PM", "11:15 AM"][i]}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{["Equations & Formulas", "Programming Basics", "Speaking Practice", "Chemistry Lab", "World History"][i]}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Join</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <h3 className="font-medium">Performance Summary</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg text-center">
                  <div className="text-4xl font-bold text-edubridge-purple">85%</div>
                  <div className="text-sm text-muted-foreground mt-1">Average Score</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg text-center">
                  <div className="text-4xl font-bold text-edubridge-blue">18</div>
                  <div className="text-sm text-muted-foreground mt-1">Tests Completed</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-muted-foreground mt-1">Attendance</div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Subject Breakdown</h4>
                <div className="space-y-4">
                  {["Mathematics", "English", "Science", "Computer Science"].map((subject, i) => (
                    <div key={subject} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{subject}</span>
                        <span className="font-medium">{[78, 92, 85, 90][i]}%</span>
                      </div>
                      <Progress value={[78, 92, 85, 90][i]} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LMS;


import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Notebook, FileText, Calendar, CheckSquare, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Workspace = () => {
  const [activeTab, setActiveTab] = useState("notes");

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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Workspace</h1>
        <Button>
          <Calendar className="mr-2 h-4 w-4" /> Schedule
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 md:w-[400px]">
          <TabsTrigger value="notes">
            <Notebook className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">Notes</span>
          </TabsTrigger>
          <TabsTrigger value="tasks">
            <CheckSquare className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">Tasks</span>
          </TabsTrigger>
          <TabsTrigger value="docs">
            <FileText className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">Docs</span>
          </TabsTrigger>
          <TabsTrigger value="resources">
            <BookOpen className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">Resources</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notes">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {["Math Notes", "Physics Formulas", "English Vocabulary", "Computer Science Algorithms"].map((note, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-48 module-card card-hover cursor-pointer bg-edubridge-blue/10 border-edubridge-blue/30">
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="text-lg font-medium mb-2">{note}</div>
                    <p className="text-muted-foreground text-sm flex-grow">
                      Last edited: {new Date().toLocaleDateString()}
                    </p>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm">Open</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Card className="h-48 module-card border-dashed border-2 flex items-center justify-center">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Button variant="ghost" size="lg">
                    + New Note
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="tasks">
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-medium text-lg mb-4">My Tasks</h3>
              <ul className="space-y-2">
                {["Complete Physics Assignment", "Review Math Chapter 5", "Practice English Speech", "Submit Computer Project"].map((task, index) => (
                  <li key={index} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <input type="checkbox" className="mr-3" />
                    <span>{task}</span>
                    <span className="ml-auto text-xs text-muted-foreground">Due tomorrow</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button className="w-full">
              + Add New Task
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="docs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Card className="h-[400px] overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-medium">Research Paper Draft</h3>
                  </div>
                  <div className="p-4 h-[330px] overflow-auto">
                    <p>This is a placeholder for a document editor interface. In a full implementation, this would be an editable text area with rich formatting options.</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl.</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-[400px]">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-4">Recent Documents</h3>
                  <ul className="space-y-2">
                    {["Science Project", "History Notes", "Literature Review", "Math Homework"].map((doc, index) => (
                      <li key={index} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                        <FileText className="inline-block mr-2 h-4 w-4" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["NCERT Textbooks", "Previous Year Papers", "Video Lectures", "Online Courses", "Quizzes", "Flashcards"].map((resource, index) => (
              <Card key={index} className="module-card card-hover cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium">{resource}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Access educational materials to enhance your learning journey
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Workspace;

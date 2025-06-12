
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Clock, CheckCircle, Upload, Filter, Search, PlusCircle } from "lucide-react";

const Doubts = () => {
  const [activeTab, setActiveTab] = useState("my-doubts");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for doubts
  const myDoubts = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Differentiation Problem",
      question: "How do I solve the derivative of f(x) = e^(sin x)?",
      status: "answered",
      date: "2023-08-15",
      answers: 2,
      mentor: {
        name: "Dr. Patel",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: 2,
      subject: "Physics",
      title: "Projectile Motion Calculation",
      question: "What is the formula to calculate the maximum height of a projectile?",
      status: "pending",
      date: "2023-08-20",
      answers: 0
    },
    {
      id: 3,
      subject: "Chemistry",
      title: "Balancing Chemical Equations",
      question: "How do I balance this chemical equation: H₂ + O₂ → H₂O?",
      status: "answered",
      date: "2023-08-10",
      answers: 3,
      mentor: {
        name: "Prof. Singh",
        avatar: "/placeholder.svg"
      }
    }
  ];

  const communityDoubts = [
    {
      id: 101,
      subject: "Biology",
      title: "Photosynthesis Process",
      question: "Can someone explain the light-dependent reactions in photosynthesis?",
      status: "answered",
      date: "2023-08-18",
      answers: 4,
      student: {
        name: "Meera K.",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: 102,
      subject: "History",
      title: "Gupta Dynasty Timeline",
      question: "What were the major achievements during the Gupta Empire?",
      status: "answered",
      date: "2023-08-17",
      answers: 2,
      student: {
        name: "Rahul S.",
        avatar: "/placeholder.svg"
      }
    },
    {
      id: 103,
      subject: "Geography",
      title: "Monsoon Patterns",
      question: "Why does the monsoon arrive at different times across India?",
      status: "pending",
      date: "2023-08-22",
      answers: 0,
      student: {
        name: "Priya D.",
        avatar: "/placeholder.svg"
      }
    }
  ];

  // Filter doubts based on search query
  const filteredMyDoubts = myDoubts.filter(doubt => 
    doubt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doubt.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doubt.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCommunityDoubts = communityDoubts.filter(doubt => 
    doubt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doubt.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doubt.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status badge styling
  const getStatusBadge = (status) => {
    if (status === "answered") {
      return <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Answered</Badge>;
    } else {
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Pending</Badge>;
    }
  };

  return (
    <div className="container max-w-6xl mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Doubts & Questions</h1>
          <p className="text-gray-500 dark:text-gray-400">Ask questions, get answers from mentors and peers</p>
        </div>
        <Button onClick={() => {}} className="bg-edubridge-purple hover:bg-edubridge-purple-secondary">
          <PlusCircle className="mr-2 h-4 w-4" /> Ask a New Question
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search questions or subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <Tabs defaultValue="my-doubts" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-doubts">My Questions</TabsTrigger>
          <TabsTrigger value="community">Community Questions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-doubts" className="space-y-4 mt-4">
          {filteredMyDoubts.length === 0 ? (
            <Card className="text-center p-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No questions found. Try adjusting your search.</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </Card>
          ) : (
            filteredMyDoubts.map(doubt => (
              <Card key={doubt.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Badge variant="outline" className="mb-2">{doubt.subject}</Badge>
                        <h3 className="text-xl font-semibold">{doubt.title}</h3>
                      </div>
                      {getStatusBadge(doubt.status)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{doubt.question}</p>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{doubt.date}</span>
                        <Separator orientation="vertical" className="mx-2 h-4" />
                        <MessageCircle className="mr-1 h-4 w-4" />
                        <span>{doubt.answers} answers</span>
                      </div>
                      
                      {doubt.status === "answered" && doubt.mentor && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Answered by:</span>
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={doubt.mentor.avatar} alt={doubt.mentor.name} />
                            <AvatarFallback>{doubt.mentor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{doubt.mentor.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
        
        <TabsContent value="community" className="space-y-4 mt-4">
          {filteredCommunityDoubts.length === 0 ? (
            <Card className="text-center p-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No community questions found. Try adjusting your search.</p>
              <Button 
                variant="outline"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </Card>
          ) : (
            filteredCommunityDoubts.map(doubt => (
              <Card key={doubt.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Badge variant="outline" className="mb-2">{doubt.subject}</Badge>
                        <h3 className="text-xl font-semibold">{doubt.title}</h3>
                      </div>
                      {getStatusBadge(doubt.status)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{doubt.question}</p>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{doubt.date}</span>
                        <Separator orientation="vertical" className="mx-2 h-4" />
                        <MessageCircle className="mr-1 h-4 w-4" />
                        <span>{doubt.answers} answers</span>
                      </div>
                      
                      {doubt.student && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Asked by:</span>
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={doubt.student.avatar} alt={doubt.student.name} />
                            <AvatarFallback>{doubt.student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{doubt.student.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Ask a New Question</h3>
        <form className="space-y-4">
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Select subject" />
          </div>
          <div>
            <Label htmlFor="title">Question Title</Label>
            <Input id="title" placeholder="Enter a clear, concise title" />
          </div>
          <div>
            <Label htmlFor="question">Your Question in Detail</Label>
            <Textarea id="question" placeholder="Describe your question in detail..." className="min-h-32" />
          </div>
          <div>
            <Label htmlFor="attachment" className="block mb-2">Attachment (Optional)</Label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <Upload className="h-6 w-6 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Click to upload or drag & drop</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">PNG, JPG, PDF or Word (Max 5MB)</p>
            </div>
          </div>
          <Button type="submit" className="bg-edubridge-purple hover:bg-edubridge-purple-secondary w-full sm:w-auto">
            Submit Question
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Doubts;

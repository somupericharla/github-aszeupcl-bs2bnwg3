
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart, LineChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { motion } from "framer-motion";

const Results = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  const performance = [
    { subject: "Mathematics", score: 85, average: 75 },
    { subject: "Science", score: 92, average: 78 },
    { subject: "English", score: 78, average: 72 },
    { subject: "Social Studies", score: 88, average: 70 },
    { subject: "Computer", score: 95, average: 82 }
  ];

  const progressData = [
    { month: "Jan", score: 72 },
    { month: "Feb", score: 75 },
    { month: "Mar", score: 80 },
    { month: "Apr", score: 85 },
    { month: "May", score: 82 },
    { month: "Jun", score: 88 },
    { month: "Jul", score: 90 }
  ];

  const subjectPerformance = {
    Mathematics: [
      { topic: "Algebra", score: 85 },
      { topic: "Geometry", score: 78 },
      { topic: "Statistics", score: 92 },
      { topic: "Calculus", score: 70 }
    ],
    Science: [
      { topic: "Physics", score: 88 },
      { topic: "Chemistry", score: 92 },
      { topic: "Biology", score: 85 },
      { topic: "Environmental Science", score: 90 }
    ],
    English: [
      { topic: "Grammar", score: 80 },
      { topic: "Vocabulary", score: 75 },
      { topic: "Comprehension", score: 82 },
      { topic: "Writing", score: 78 }
    ]
  };

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Results & Analytics</h1>
            <p className="text-muted-foreground">Track your performance across subjects and topics</p>
          </div>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Performance by Subject</h2>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={performance}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" name="Your Score" fill="#8884d8" />
                  <Bar dataKey="average" name="Class Average" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Progress Over Time</h2>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={progressData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Topic-wise Performance</h2>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="Mathematics">
              <TabsList className="mb-4">
                {Object.keys(subjectPerformance).map((subject) => (
                  <TabsTrigger key={subject} value={subject}>
                    {subject}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.keys(subjectPerformance).map((subject) => (
                <TabsContent key={subject} value={subject}>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={subjectPerformance[subject]}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="topic" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="score" name="Score" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Results;


import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, ArrowUp, ArrowDown, Minus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Leaderboard = () => {
  const [period, setPeriod] = useState("weekly");
  const [scope, setScope] = useState("school");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  const leaderboardData = {
    weekly: [
      { id: 1, name: "Priya Singh", avatar: null, points: 950, change: "up", badge: "gold", school: "Delhi Public School, Bangalore" },
      { id: 2, name: "Rahul Verma", avatar: null, points: 875, change: "up", badge: "silver", school: "Delhi Public School, Bangalore" },
      { id: 3, name: "Neha Gupta", avatar: null, points: 830, change: "down", badge: "bronze", school: "Kendriya Vidyalaya, Chennai" },
      { id: 4, name: "Arjun Patel", avatar: null, points: 780, change: "same", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 5, name: "Sneha Reddy", avatar: null, points: 765, change: "up", badge: null, school: "Army Public School, Pune" },
      { id: 6, name: "Karthik Iyer", avatar: null, points: 720, change: "down", badge: null, school: "St. Mary's School, Dehradun" },
      { id: 7, name: "Ananya Sharma", avatar: null, points: 690, change: "up", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 8, name: "Vivek Kumar", avatar: null, points: 650, change: "same", badge: null, school: "Kendriya Vidyalaya, Chennai" },
      { id: 9, name: "Divya Shetty", avatar: null, points: 620, change: "down", badge: null, school: "Ryan International, Mumbai" },
      { id: 10, name: "Raj Malhotra", avatar: null, points: 590, change: "up", badge: null, school: "Delhi Public School, Bangalore" }
    ],
    monthly: [
      { id: 2, name: "Rahul Verma", avatar: null, points: 3600, change: "up", badge: "gold", school: "Delhi Public School, Bangalore" },
      { id: 1, name: "Priya Singh", avatar: null, points: 3400, change: "down", badge: "silver", school: "Delhi Public School, Bangalore" },
      { id: 5, name: "Sneha Reddy", avatar: null, points: 3100, change: "up", badge: "bronze", school: "Army Public School, Pune" },
      { id: 3, name: "Neha Gupta", avatar: null, points: 2950, change: "down", badge: null, school: "Kendriya Vidyalaya, Chennai" },
      { id: 7, name: "Ananya Sharma", avatar: null, points: 2700, change: "up", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 4, name: "Arjun Patel", avatar: null, points: 2650, change: "down", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 10, name: "Raj Malhotra", avatar: null, points: 2400, change: "up", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 6, name: "Karthik Iyer", avatar: null, points: 2300, change: "down", badge: null, school: "St. Mary's School, Dehradun" },
      { id: 8, name: "Vivek Kumar", avatar: null, points: 2150, change: "same", badge: null, school: "Kendriya Vidyalaya, Chennai" },
      { id: 9, name: "Divya Shetty", avatar: null, points: 2000, change: "down", badge: null, school: "Ryan International, Mumbai" }
    ],
    allTime: [
      { id: 5, name: "Sneha Reddy", avatar: null, points: 15800, change: "up", badge: "gold", school: "Army Public School, Pune" },
      { id: 1, name: "Priya Singh", avatar: null, points: 14500, change: "same", badge: "silver", school: "Delhi Public School, Bangalore" },
      { id: 2, name: "Rahul Verma", avatar: null, points: 13200, change: "down", badge: "bronze", school: "Delhi Public School, Bangalore" },
      { id: 7, name: "Ananya Sharma", avatar: null, points: 11900, change: "up", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 3, name: "Neha Gupta", avatar: null, points: 10800, change: "down", badge: null, school: "Kendriya Vidyalaya, Chennai" },
      { id: 10, name: "Raj Malhotra", avatar: null, points: 9700, change: "up", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 8, name: "Vivek Kumar", avatar: null, points: 9200, change: "up", badge: null, school: "Kendriya Vidyalaya, Chennai" },
      { id: 4, name: "Arjun Patel", avatar: null, points: 8900, change: "down", badge: null, school: "Delhi Public School, Bangalore" },
      { id: 6, name: "Karthik Iyer", avatar: null, points: 8400, change: "same", badge: null, school: "St. Mary's School, Dehradun" },
      { id: 9, name: "Divya Shetty", avatar: null, points: 7500, change: "down", badge: null, school: "Ryan International, Mumbai" }
    ]
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  const getBadgeIcon = (badge: string | null) => {
    if (!badge) return null;
    
    switch (badge) {
      case 'gold':
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 'silver':
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 'bronze':
        return <Medal className="h-5 w-5 text-amber-700" />;
      default:
        return null;
    }
  };

  const myRank = {
    weekly: 4, // Index in the array
    monthly: 5,
    allTime: 7
  };

  const currentData = leaderboardData[period];
  const filteredData = scope === "school" 
    ? currentData.filter(user => user.school === "Delhi Public School, Bangalore")
    : currentData;

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Leaderboard</h1>
            <p className="text-muted-foreground">See where you rank among your peers</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Select value={scope} onValueChange={setScope}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select scope" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="district">District</SelectItem>
                <SelectItem value="national">National</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Top Students</h2>
                <Tabs value={period} onValueChange={setPeriod} className="w-[300px]">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="allTime">All Time</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                {filteredData.map((student, index) => (
                  <motion.div 
                    key={student.id} 
                    variants={itemVariants}
                    className={`flex items-center p-3 rounded-lg ${myRank[period] === index ? 'bg-edubridge-purple/10 border border-edubridge-purple/30' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <div className="flex items-center justify-center w-8 font-semibold text-muted-foreground">
                      {index + 1}
                    </div>
                    
                    <div className="flex items-center flex-grow gap-3 ml-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={student.avatar || undefined} alt={student.name} />
                        <AvatarFallback className={
                          student.badge === 'gold' 
                            ? 'bg-yellow-500/20 text-yellow-700'
                            : student.badge === 'silver'
                              ? 'bg-gray-300/30 text-gray-700'
                              : student.badge === 'bronze'
                                ? 'bg-amber-600/20 text-amber-800'
                                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }>{getInitials(student.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium flex items-center">
                          {student.name}
                          {student.badge && (
                            <span className="ml-2">
                              {getBadgeIcon(student.badge)}
                            </span>
                          )}
                          {myRank[period] === index && (
                            <Badge className="ml-2 bg-edubridge-purple text-white">You</Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{student.school}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{student.points} pts</div>
                      <div>{getChangeIcon(student.change)}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Your Achievements</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-edubridge-blue/10 rounded-lg border border-edubridge-blue/20">
                <div className="text-sm text-muted-foreground mb-1">Current Rank</div>
                <div className="text-4xl font-bold text-edubridge-blue">{myRank[period] + 1}</div>
                <div className="flex items-center justify-center mt-1 text-sm">
                  {getChangeIcon("up")}
                  <span className="ml-1 text-green-600">+2 this week</span>
                </div>
              </div>
              
              <div>
                <div className="font-medium mb-2">Recent Badges</div>
                <div className="grid grid-cols-3 gap-2">
                  {['Perfect Attendance', 'Fast Learner', 'Problem Solver'].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center p-2 text-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Sparkles className="h-6 w-6 mb-1 text-yellow-500" />
                      <div className="text-xs">{badge}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button variant="outline" className="w-full">View All Achievements</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

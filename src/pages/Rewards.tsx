
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Gift, Award, Star, Sparkles, Calendar, Trophy, Medal, Clock, Download } from "lucide-react";
import { motion } from "framer-motion";

const Rewards = () => {
  const [activeTab, setActiveTab] = useState("badges");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedReward, setSelectedReward] = useState<any>(null);
  
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
  
  const badgesData = [
    {
      id: 1,
      name: "Perfect Attendance",
      description: "Attend 30 consecutive days of classes",
      icon: Calendar,
      progress: 80,
      unlocked: true,
      color: "bg-green-100 text-green-700 border-green-300"
    },
    {
      id: 2,
      name: "Fast Learner",
      description: "Complete 5 courses within a month",
      icon: Sparkles,
      progress: 100,
      unlocked: true,
      color: "bg-purple-100 text-purple-700 border-purple-300"
    },
    {
      id: 3,
      name: "Problem Solver",
      description: "Solve 50 practice problems correctly",
      icon: Star,
      progress: 100,
      unlocked: true,
      color: "bg-blue-100 text-blue-700 border-blue-300"
    },
    {
      id: 4,
      name: "Science Whiz",
      description: "Score 90% or higher in all science tests",
      icon: Sparkles,
      progress: 60,
      unlocked: false,
      color: "bg-amber-100 text-amber-700 border-amber-300"
    },
    {
      id: 5,
      name: "Math Champion",
      description: "Complete the advanced mathematics module",
      icon: Trophy,
      progress: 40,
      unlocked: false,
      color: "bg-red-100 text-red-700 border-red-300"
    },
    {
      id: 6,
      name: "Communication Pro",
      description: "Achieve fluency score of 9/10 in pronunciation",
      icon: Award,
      progress: 70,
      unlocked: false,
      color: "bg-indigo-100 text-indigo-700 border-indigo-300"
    }
  ];

  const certificatesData = [
    {
      id: 1,
      name: "Digital Literacy",
      description: "Successfully completed the Digital Literacy course",
      date: "March 15, 2025",
      issuer: "EduBridge Academy",
      icon: Award
    },
    {
      id: 2,
      name: "Public Speaking",
      description: "Demonstrated excellence in public speaking skills",
      date: "February 20, 2025",
      issuer: "EduBridge Academy",
      icon: Award
    },
    {
      id: 3,
      name: "Introduction to Coding",
      description: "Successfully completed the Introduction to Coding course",
      date: "January 10, 2025",
      issuer: "EduBridge Academy",
      icon: Award
    }
  ];

  const streaksData = {
    currentStreak: 15,
    longestStreak: 28,
    thisWeek: [true, true, true, true, false, false, true], // Mon to Sun
    milestones: [
      { days: 7, reward: "50 points", achieved: true },
      { days: 14, reward: "100 points", achieved: true },
      { days: 30, reward: "Star Learner Badge", achieved: false },
      { days: 60, reward: "Learning Champion Certificate", achieved: false }
    ]
  };

  const handleRewardClick = (reward: any) => {
    setSelectedReward(reward);
    setShowDialog(true);
  };

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Rewards & Achievements</h1>
            <p className="text-muted-foreground">Track your progress and earn recognition</p>
          </div>
          <Button variant="outline">
            <Gift className="mr-2 h-4 w-4" />
            Share Achievements
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="streaks">Learning Streaks</TabsTrigger>
            </TabsList>

            <TabsContent value="badges">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
              >
                {badgesData.map((badge) => (
                  <motion.div key={badge.id} variants={itemVariants}>
                    <Card 
                      className={`module-card card-hover cursor-pointer ${badge.unlocked ? 'border-green-300' : ''}`}
                      onClick={() => handleRewardClick(badge)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <Badge variant="outline" className={badge.color}>
                            {badge.unlocked ? 'Unlocked' : 'In Progress'}
                          </Badge>
                          <badge.icon className={`h-5 w-5 ${badge.unlocked ? 'text-yellow-500' : 'text-gray-400'}`} />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-medium text-lg">{badge.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                        
                        {!badge.unlocked && (
                          <div className="mt-4 space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{badge.progress}%</span>
                            </div>
                            <Progress value={badge.progress} className="h-2" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="certificates">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
              >
                {certificatesData.map((certificate) => (
                  <motion.div key={certificate.id} variants={itemVariants}>
                    <Card 
                      className="module-card card-hover cursor-pointer"
                      onClick={() => handleRewardClick(certificate)}
                    >
                      <CardContent className="p-6 flex gap-4">
                        <div className="bg-edubridge-purple/10 rounded-full p-3 h-fit">
                          <certificate.icon className="h-6 w-6 text-edubridge-purple" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-lg">{certificate.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{certificate.description}</p>
                          <div className="mt-2 text-sm">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span className="text-muted-foreground">Issued: {certificate.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="streaks">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">Your Learning Streak</h2>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-6">
                      <div className="text-center p-4 bg-edubridge-blue/10 rounded-lg border border-edubridge-blue/20 flex-1">
                        <div className="text-sm text-muted-foreground mb-1">Current Streak</div>
                        <div className="text-4xl font-bold text-edubridge-blue">{streaksData.currentStreak}</div>
                        <div className="text-sm text-muted-foreground mt-1">Days</div>
                      </div>
                      <div className="text-center p-4 bg-edubridge-purple/10 rounded-lg border border-edubridge-purple/20 flex-1">
                        <div className="text-sm text-muted-foreground mb-1">Longest Streak</div>
                        <div className="text-4xl font-bold text-edubridge-purple">{streaksData.longestStreak}</div>
                        <div className="text-sm text-muted-foreground mt-1">Days</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium mb-2">This Week</div>
                      <div className="flex justify-between">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="text-xs text-muted-foreground mb-1">{day}</div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              streaksData.thisWeek[index] 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-200 text-gray-400 dark:bg-gray-700'
                            }`}>
                              {streaksData.thisWeek[index] ? '✓' : ''}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">Streak Milestones</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {streaksData.milestones.map((milestone, index) => (
                        <div 
                          key={index} 
                          className={`p-3 rounded-lg border ${
                            milestone.achieved ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">{milestone.days}-Day Streak</div>
                              <div className="text-sm text-muted-foreground">Reward: {milestone.reward}</div>
                            </div>
                            <div>
                              {milestone.achieved ? (
                                <Badge className="bg-green-500">Achieved</Badge>
                              ) : (
                                <Badge variant="outline" className="border-dashed">{milestone.days - streaksData.currentStreak} days left</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Your Stats</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Badge className="mr-2 bg-yellow-500" variant="secondary">
                    <Trophy className="h-3 w-3 mr-1" />
                    <span>Badges</span>
                  </Badge>
                </div>
                <span className="font-medium">{badgesData.filter(b => b.unlocked).length}/{badgesData.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Badge className="mr-2 bg-green-500" variant="secondary">
                    <Award className="h-3 w-3 mr-1" />
                    <span>Certificates</span>
                  </Badge>
                </div>
                <span className="font-medium">{certificatesData.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Badge className="mr-2 bg-edubridge-blue" variant="secondary">
                    <Medal className="h-3 w-3 mr-1" />
                    <span>Achievements</span>
                  </Badge>
                </div>
                <span className="font-medium">15</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Badge className="mr-2 bg-edubridge-purple" variant="secondary">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Study Hours</span>
                  </Badge>
                </div>
                <span className="font-medium">42</span>
              </div>

              <div className="pt-2 border-t">
                <div className="text-sm font-medium mb-2">Next Badge</div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="font-medium">Math Champion</div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Progress</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2 mt-1" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Stats
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedReward?.name}</DialogTitle>
            <DialogDescription>{selectedReward?.description}</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center p-6">
            {selectedReward?.icon && (
              <div className="p-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                <selectedReward.icon className="h-16 w-16 text-yellow-500" />
              </div>
            )}
          </div>
          {selectedReward?.date && (
            <div className="text-center text-sm text-muted-foreground">
              Issued on {selectedReward.date} by {selectedReward.issuer}
            </div>
          )}
          <DialogFooter>
            {selectedReward?.unlocked !== false && (
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rewards;

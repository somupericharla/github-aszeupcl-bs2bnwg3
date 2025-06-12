
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Lightbulb, Search, ExternalLink, Calendar, Eye, Bookmark, ThumbsUp, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Research = () => {
  const [activeTab, setActiveTab] = useState("articles");
  const [searchQuery, setSearchQuery] = useState("");
  
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
  
  const articles = [
    {
      id: 1,
      title: "ISRO's New Earth Observation Satellite Can Help Farmers",
      description: "India's space agency launches a satellite that will help farmers predict weather patterns and crop yields with unprecedented accuracy.",
      category: "Space Technology",
      date: "April 2, 2025",
      source: "Indian Science Journal",
      views: 1240,
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=3272&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Indian Scientists Develop New Water Purification Method",
      description: "A team from IIT Madras has developed a cost-effective method for removing heavy metals from water using locally available materials.",
      category: "Environmental Science",
      date: "March 28, 2025",
      source: "Tech India Today",
      views: 980,
      image: "https://images.unsplash.com/photo-1540009318339-40a52d924511?q=80&w=3258&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "New AI Algorithm by Indian Researchers Helps Early Disease Detection",
      description: "Researchers at AIIMS and IIT Delhi have developed an AI system that can detect early signs of diseases from routine blood tests.",
      category: "Medical Technology",
      date: "March 20, 2025",
      source: "Health & Tech Review",
      views: 1550,
      image: "https://images.unsplash.com/photo-1588779246248-ee2d86066a3c?q=80&w=3348&auto=format&fit=crop"
    }
  ];
  
  const projects = [
    {
      id: 4,
      title: "Solar-Powered Water Purifier",
      description: "Design a low-cost, solar-powered water purification system for rural areas without reliable electricity.",
      difficulty: "Medium",
      duration: "4 weeks",
      materials: ["Solar panel", "Filter membranes", "Plastic containers", "Basic tools"],
      category: "Environmental Engineering",
      likes: 245
    },
    {
      id: 5,
      title: "Smart Irrigation System",
      description: "Create an automated irrigation system that uses soil moisture sensors to optimize water usage for crops.",
      difficulty: "Advanced",
      duration: "6 weeks",
      materials: ["Arduino/Raspberry Pi", "Soil moisture sensors", "Pumps", "Basic electronics"],
      category: "Agricultural Technology",
      likes: 312
    },
    {
      id: 6,
      title: "Air Quality Monitor",
      description: "Build a simple air quality monitoring device that can detect pollutants and display readings on a mobile app.",
      difficulty: "Medium",
      duration: "3 weeks",
      materials: ["Air quality sensors", "Microcontroller", "Display", "Basic electronics"],
      category: "Environmental Science",
      likes: 187
    }
  ];
  
  const innovations = [
    {
      id: 7,
      title: "Bamboo Laptop Stand",
      description: "Eco-friendly laptop stand made from sustainably harvested bamboo, created by students of Delhi Public School.",
      creator: "Class X students, Delhi Public School",
      category: "Sustainable Design",
      achievements: "Winner of National Innovation Challenge 2025",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=3387&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Village News App",
      description: "Mobile application that connects rural communities with news, government schemes, and agricultural information in local languages.",
      creator: "Tech Club, Kendriya Vidyalaya, Pune",
      category: "Software Development",
      achievements: "Featured in Digital India Showcase",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=3270&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "Biodegradable Seed Pots",
      description: "Eco-friendly seed pots made from waste paper and organic materials that decompose naturally when planted.",
      creator: "Environment Club, St. Mary's School, Chennai",
      category: "Environmental Science",
      achievements: "Patent pending",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=3270&auto=format&fit=crop"
    }
  ];
  
  const getCurrentData = () => {
    switch (activeTab) {
      case "articles":
        return articles;
      case "projects":
        return projects;
      case "innovations":
        return innovations;
      default:
        return articles;
    }
  };
  
  const filteredData = getCurrentData().filter(item => 
    searchQuery === "" || 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Research & Development</h1>
            <p className="text-muted-foreground">Explore scientific discoveries and innovation</p>
          </div>
          <Button className="bg-edubridge-purple">
            <Lightbulb className="mr-2 h-4 w-4" />
            Submit Your Idea
          </Button>
        </div>
      </motion.div>
      
      <div className="relative">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search articles, projects or innovations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8"
        />
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[500px]">
          <TabsTrigger value="articles">Latest Articles</TabsTrigger>
          <TabsTrigger value="projects">Project Ideas</TabsTrigger>
          <TabsTrigger value="innovations">Student Innovations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 mt-6"
          >
            {filteredData.map((article: any) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                        </div>
                        <h3 className="font-semibold text-xl mt-2">{article.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{article.description}</p>
                        <div className="flex items-center mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {article.views} views
                          </div>
                          <span className="mx-2">•</span>
                          <div>{article.source}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Bookmark className="h-4 w-4 mr-1" />
                            Save
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                        </div>
                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Read More
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="projects">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
          >
            {filteredData.map((project: any) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="module-card card-hover h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={
                        project.difficulty === "Easy" 
                          ? "bg-green-500/10 text-green-600 border-green-500/30"
                          : project.difficulty === "Medium"
                            ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                            : "bg-red-500/10 text-red-600 border-red-500/30"
                      }>
                        {project.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    <div className="mt-4">
                      <div className="text-sm font-medium">Materials needed:</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.materials.map((material: string, index: number) => (
                          <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Duration: {project.duration}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center text-sm">
                      <ThumbsUp className="h-4 w-4 mr-1 text-edubridge-blue" />
                      {project.likes} students like this
                    </div>
                    <Button size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="innovations">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          >
            {filteredData.map((innovation: any) => (
              <motion.div key={innovation.id} variants={itemVariants}>
                <Card className="module-card card-hover overflow-hidden">
                  <div className="h-48">
                    <img 
                      src={innovation.image} 
                      alt={innovation.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                        {innovation.category}
                      </Badge>
                      <Sparkles className="h-5 w-5 text-yellow-500" />
                    </div>
                    <h3 className="font-medium text-lg mt-2">{innovation.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{innovation.description}</p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="font-medium">Created by:</div>
                      <div className="text-muted-foreground">{innovation.creator}</div>
                      <div className="font-medium mt-2">Achievement:</div>
                      <div className="text-edubridge-purple">{innovation.achievements}</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Learn More
                    </Button>
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

export default Research;

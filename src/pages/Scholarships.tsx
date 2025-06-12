
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Coins, Calendar, Clock, School, Users, ExternalLink, Filter, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Scholarships = () => {
  const [activeTab, setActiveTab] = useState("scholarships");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState<any>(null);
  
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
  
  const scholarships = [
    {
      id: 1,
      title: "National Scholarship Portal - Pre-Matric",
      provider: "Ministry of Minority Affairs",
      category: "Government",
      eligibility: "Class 1-10 students from minority communities",
      amount: "₹1,000 per month",
      lastDate: "April 30, 2025",
      description: "Financial assistance for pre-matric students belonging to minority communities to improve educational empowerment."
    },
    {
      id: 2,
      title: "National Scholarship Portal - Post-Matric",
      provider: "Ministry of Minority Affairs",
      category: "Government",
      eligibility: "Class 11-12 and college students from minority communities",
      amount: "₹3,000 per month",
      lastDate: "May 15, 2025",
      description: "Financial assistance for post-matric education of students belonging to minority communities."
    },
    {
      id: 3,
      title: "Central Sector Scheme of Scholarships",
      provider: "Ministry of Education",
      category: "Government",
      eligibility: "Students who scored 80% or above in Class 12",
      amount: "₹12,000 per annum",
      lastDate: "June 30, 2025",
      description: "Scholarship for meritorious students from low income families to pursue higher education."
    },
    {
      id: 4,
      title: "Tata Scholarship for Cornell University",
      provider: "Tata Education Trust",
      category: "Private",
      eligibility: "Indian students admitted to Cornell University",
      amount: "Full tuition fees",
      lastDate: "May 31, 2025",
      description: "Financial aid for Indian students with academic excellence admitted to Cornell University."
    }
  ];
  
  const grants = [
    {
      id: 5,
      title: "Innovation Grant for School Students",
      provider: "Department of Science and Technology",
      category: "Government",
      eligibility: "School students with innovative project ideas",
      amount: "Up to ₹50,000",
      lastDate: "Ongoing",
      description: "Financial support for school students to develop innovative science and technology projects."
    },
    {
      id: 6,
      title: "Research Grant for Young Scientists",
      provider: "Indian Council of Scientific Research",
      category: "Government",
      eligibility: "Students pursuing research in science fields",
      amount: "Up to ₹2,00,000",
      lastDate: "July 15, 2025",
      description: "Grants to support young minds engaged in scientific research and development."
    },
    {
      id: 7,
      title: "Rural Development Project Grant",
      provider: "Ministry of Rural Development",
      category: "Government",
      eligibility: "Students with projects focused on rural development",
      amount: "₹25,000 - ₹1,00,000",
      lastDate: "August 31, 2025",
      description: "Financial assistance for students working on projects aimed at rural development and innovation."
    }
  ];
  
  const competitions = [
    {
      id: 8,
      title: "National Science Olympiad",
      provider: "Science Olympiad Foundation",
      category: "Academic",
      eligibility: "Students from Class 1 to 12",
      prizes: "Medals, certificates, scholarships up to ₹50,000",
      lastDate: "September 15, 2025",
      description: "Annual science competition to identify and encourage scientific talent among school students."
    },
    {
      id: 9,
      title: "NITI Aayog Atal Tinkering Labs Challenge",
      provider: "NITI Aayog",
      category: "Innovation",
      eligibility: "School students with access to Atal Tinkering Labs",
      prizes: "Recognition, mentorship, grants up to ₹2,00,000",
      lastDate: "October 31, 2025",
      description: "Challenge for students to solve community problems through technology innovation."
    },
    {
      id: 10,
      title: "National Rural IT Quiz",
      provider: "Ministry of Electronics and IT",
      category: "Technology",
      eligibility: "Rural school students",
      prizes: "Laptops, scholarships, certificates",
      lastDate: "August 10, 2025",
      description: "National level quiz competition to promote IT literacy and awareness among rural students."
    }
  ];
  
  const myApplications = [
    {
      id: 101,
      title: "National Scholarship Portal - Post-Matric",
      provider: "Ministry of Minority Affairs",
      appliedDate: "March 15, 2025",
      status: "Under Review",
      statusColor: "yellow"
    },
    {
      id: 102,
      title: "Innovation Grant for School Students",
      provider: "Department of Science and Technology",
      appliedDate: "February 28, 2025",
      status: "Approved",
      statusColor: "green"
    },
    {
      id: 103,
      title: "National Science Olympiad",
      provider: "Science Olympiad Foundation",
      appliedDate: "January 10, 2025",
      status: "Rejected",
      statusColor: "red"
    }
  ];
  
  const getCurrentData = () => {
    switch (activeTab) {
      case "scholarships":
        return scholarships;
      case "grants":
        return grants;
      case "competitions":
        return competitions;
      case "my-applications":
        return myApplications;
      default:
        return scholarships;
    }
  };
  
  const filterData = (data: any[]) => {
    return data.filter(item => 
      (searchQuery === "" || 
       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
       (item.provider && item.provider.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (categoryFilter === "all" || item.category === categoryFilter)
    );
  };
  
  const filteredData = filterData(getCurrentData());
  
  const handleViewClick = (item: any) => {
    setSelectedScholarship(item);
    setShowDialog(true);
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Rejected":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };
  
  const getStatusBackground = (color: string) => {
    switch(color) {
      case "green":
        return "bg-green-500/10 text-green-600 border-green-500/30";
      case "red":
        return "bg-red-500/10 text-red-600 border-red-500/30";
      default:
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/30";
    }
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
            <h1 className="text-3xl font-bold">Scholarships & Grants</h1>
            <p className="text-muted-foreground">Find financial support for your education</p>
          </div>
          <Button className="bg-edubridge-blue">
            <Coins className="mr-2 h-4 w-4" />
            Financial Aid Advisor
          </Button>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              <TabsTrigger value="grants">Grants</TabsTrigger>
              <TabsTrigger value="competitions">Competitions</TabsTrigger>
              <TabsTrigger value="my-applications">My Applications</TabsTrigger>
            </TabsList>
            
            {activeTab !== "my-applications" && (
              <div className="my-4 flex flex-col md:flex-row gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Government">Government</SelectItem>
                    <SelectItem value="Private">Private</SelectItem>
                    <SelectItem value="Academic">Academic</SelectItem>
                    <SelectItem value="Innovation">Innovation</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  variant="outline" 
                  className="md:ml-auto"
                  onClick={() => {
                    setCategoryFilter("all");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
            
            <TabsContent value="scholarships">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <School className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">No scholarships found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredData.map((scholarship) => (
                    <motion.div key={scholarship.id} variants={itemVariants}>
                      <Card className="module-card card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-lg">{scholarship.title}</h3>
                            <Badge variant="outline" className="bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                              {scholarship.category}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Users className="h-4 w-4 mr-1" />
                            {scholarship.provider}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                              <div className="space-y-1">
                                <div className="font-medium">Eligibility</div>
                                <div className="text-muted-foreground">{scholarship.eligibility}</div>
                              </div>
                              <div className="space-y-1">
                                <div className="font-medium">Amount</div>
                                <div className="text-muted-foreground">{scholarship.amount}</div>
                              </div>
                              <div className="space-y-1 col-span-full">
                                <div className="font-medium">Last Date to Apply</div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                  <span className="text-muted-foreground">{scholarship.lastDate}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewClick(scholarship)}
                          >
                            View Details
                          </Button>
                          <Button size="sm">
                            Apply Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="grants">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <School className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">No grants found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredData.map((grant) => (
                    <motion.div key={grant.id} variants={itemVariants}>
                      <Card className="module-card card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-lg">{grant.title}</h3>
                            <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                              {grant.category}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Users className="h-4 w-4 mr-1" />
                            {grant.provider}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">{grant.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                              <div className="space-y-1">
                                <div className="font-medium">Eligibility</div>
                                <div className="text-muted-foreground">{grant.eligibility}</div>
                              </div>
                              <div className="space-y-1">
                                <div className="font-medium">Amount</div>
                                <div className="text-muted-foreground">{grant.amount}</div>
                              </div>
                              <div className="space-y-1 col-span-full">
                                <div className="font-medium">Last Date to Apply</div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                  <span className="text-muted-foreground">{grant.lastDate}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewClick(grant)}
                          >
                            View Details
                          </Button>
                          <Button size="sm">
                            Apply Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="competitions">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <School className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">No competitions found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredData.map((competition) => (
                    <motion.div key={competition.id} variants={itemVariants}>
                      <Card className="module-card card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-lg">{competition.title}</h3>
                            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                              {competition.category}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Users className="h-4 w-4 mr-1" />
                            {competition.provider}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">{competition.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                              <div className="space-y-1">
                                <div className="font-medium">Eligibility</div>
                                <div className="text-muted-foreground">{competition.eligibility}</div>
                              </div>
                              <div className="space-y-1">
                                <div className="font-medium">Prizes</div>
                                <div className="text-muted-foreground">{competition.prizes}</div>
                              </div>
                              <div className="space-y-1 col-span-full">
                                <div className="font-medium">Last Date to Register</div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                  <span className="text-muted-foreground">{competition.lastDate}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewClick(competition)}
                          >
                            View Details
                          </Button>
                          <Button size="sm">
                            Register Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="my-applications">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <School className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">No applications found</h3>
                    <p className="text-muted-foreground">You haven't applied to any scholarships yet</p>
                  </div>
                ) : (
                  filteredData.map((application) => (
                    <motion.div key={application.id} variants={itemVariants}>
                      <Card className="module-card card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-lg">{application.title}</h3>
                            <Badge variant="outline" className={getStatusBackground(application.statusColor)}>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(application.status)}
                                {application.status}
                              </div>
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Users className="h-4 w-4 mr-1" />
                            {application.provider}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Applied on: {application.appliedDate}</span>
                            </div>
                            
                            {application.status === "Approved" && (
                              <div className="p-2 bg-green-50 text-green-700 border border-green-200 rounded-md dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
                                <p>Congratulations! Your application has been approved.</p>
                              </div>
                            )}
                            
                            {application.status === "Rejected" && (
                              <div className="p-2 bg-red-50 text-red-700 border border-red-200 rounded-md dark:bg-red-900/20 dark:text-red-300 dark:border-red-800">
                                <p>Unfortunately, your application was not selected.</p>
                              </div>
                            )}
                            
                            {application.status === "Under Review" && (
                              <div className="p-2 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-md dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800">
                                <p>Your application is currently under review. You will be notified once a decision is made.</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            View Application
                          </Button>
                          {application.status === "Rejected" && (
                            <Button size="sm">
                              Apply Again
                            </Button>
                          )}
                          {application.status === "Approved" && (
                            <Button size="sm">
                              View Details
                            </Button>
                          )}
                          {application.status === "Under Review" && (
                            <Button variant="outline" size="sm">
                              Check Status
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Eligibility Check</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm">
                <p>Find scholarships that match your profile by answering a few questions</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Education Level</label>
                  <Select defaultValue="class10">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class10">Class 10</SelectItem>
                      <SelectItem value="class12">Class 12</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select defaultValue="general">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="minority">Minority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Annual Family Income</label>
                  <Select defaultValue="below1">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below1">Below ₹1,00,000</SelectItem>
                      <SelectItem value="1to2.5">₹1,00,000 - ₹2,50,000</SelectItem>
                      <SelectItem value="2.5to5">₹2,50,000 - ₹5,00,000</SelectItem>
                      <SelectItem value="5to8">₹5,00,000 - ₹8,00,000</SelectItem>
                      <SelectItem value="above8">Above ₹8,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Find Matching Scholarships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-4">
            <CardHeader>
              <h2 className="text-lg font-semibold">Important Dates</h2>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-edubridge-blue" />
                  <span>National Post-Matric</span>
                </div>
                <span className="font-medium">May 15, 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-edubridge-purple" />
                  <span>Innovation Grant</span>
                </div>
                <span className="font-medium">Ongoing</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-green-600" />
                  <span>Science Olympiad</span>
                </div>
                <span className="font-medium">Sept 15, 2025</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Scholarship Details Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedScholarship?.title}</DialogTitle>
            <DialogDescription>
              Provided by {selectedScholarship?.provider}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <Badge variant="outline" className="mr-2 bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                  {selectedScholarship?.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  Last Date: {selectedScholarship?.lastDate}
                </div>
              </div>
              
              <p className="text-sm mt-4">{selectedScholarship?.description}</p>
              
              <div className="rounded-md border p-4 mt-4">
                <div className="font-medium mb-2">Eligibility Requirements</div>
                <p className="text-sm">{selectedScholarship?.eligibility}</p>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="font-medium mb-2">Award Details</div>
                <p className="text-sm">{selectedScholarship?.amount || selectedScholarship?.prizes}</p>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="font-medium mb-2">Required Documents</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Academic marksheets</li>
                  <li>Income certificate</li>
                  <li>Category certificate (if applicable)</li>
                  <li>Bank account details</li>
                  <li>Aadhaar card</li>
                </ul>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Close
            </Button>
            <Button onClick={() => setShowDialog(false)}>
              Apply Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Scholarships;

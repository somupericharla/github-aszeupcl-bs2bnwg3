
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Briefcase,
  MapPin,
  Search,
  Building,
  Calendar,
  GraduationCap,
  BookOpen,
  Filter,
  ChevronDown,
  Clock,
  Download,
  FileText as FileTextIcon,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type JobType = "internship" | "full-time" | "part-time";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  salary?: string;
  description: string;
  requirements: string[];
  posted: string; // ISO date string
  deadline?: string; // ISO date string
}

interface Workshop {
  id: string;
  title: string;
  organizer: string;
  date: string; // ISO date string
  duration: string;
  type: "online" | "offline";
  location?: string;
  description: string;
  skillsTaught: string[];
  registration?: {
    deadline: string; // ISO date string
    url: string;
    fee?: string;
  };
}

interface Course {
  id: string;
  title: string;
  provider: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  duration: string;
  certificate: boolean;
  skills: string[];
  description: string;
  enrolled: number;
  rating: number;
}

interface ResumeTemplate {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  downloadUrl: string;
  format: string;
}

const Employment = () => {
  const [jobSearchQuery, setJobSearchQuery] = useState("");
  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [workshopSearchQuery, setWorkshopSearchQuery] = useState("");
  const [selectedWorkshopType, setSelectedWorkshopType] = useState<string | null>(null);
  const [courseSearchQuery, setCourseSearchQuery] = useState("");
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string | null>(null);

  // Sample data
  const jobs: Job[] = [
    {
      id: "j1",
      title: "Junior Web Developer",
      company: "TechSolutions India",
      location: "Bangalore",
      type: "full-time",
      salary: "₹4,00,000 - ₹6,00,000 per year",
      description:
        "We are looking for a Junior Web Developer to join our growing team. You'll work on exciting projects for various clients while learning from senior developers.",
      requirements: [
        "Basic knowledge of HTML, CSS, and JavaScript",
        "Understanding of responsive design principles",
        "Knowledge of any one frontend framework (React, Angular, Vue)",
        "Good communication skills",
      ],
      posted: "2023-11-15",
      deadline: "2023-12-31",
    },
    {
      id: "j2",
      title: "Data Entry Specialist",
      company: "InfoProcess Services",
      location: "Remote",
      type: "part-time",
      salary: "₹15,000 - ₹20,000 per month",
      description:
        "Looking for detail-oriented individuals for data entry work. Flexible hours and work-from-home opportunity.",
      requirements: [
        "Strong attention to detail",
        "Fast typing speed (min. 40 wpm)",
        "Basic computer skills",
        "Reliable internet connection",
      ],
      posted: "2023-11-20",
    },
    {
      id: "j3",
      title: "Marketing Intern",
      company: "GrowthMarketing Co.",
      location: "Delhi",
      type: "internship",
      salary: "₹10,000 per month + incentives",
      description:
        "Join our marketing team as an intern and gain hands-on experience in digital marketing, content creation, and campaign management.",
      requirements: [
        "Currently pursuing a degree in Marketing, Communications, or related field",
        "Interest in digital marketing",
        "Good writing skills",
        "Basic knowledge of social media platforms",
      ],
      posted: "2023-11-25",
      deadline: "2023-12-15",
    },
    {
      id: "j4",
      title: "Customer Support Representative",
      company: "ServiceFirst Solutions",
      location: "Mumbai",
      type: "full-time",
      salary: "₹2,50,000 - ₹3,50,000 per year",
      description:
        "Join our customer support team to help customers resolve issues and provide excellent service through phone, email, and chat.",
      requirements: [
        "Excellent communication skills",
        "Empathetic and patient attitude",
        "Problem-solving ability",
        "Fluent in English and Hindi",
      ],
      posted: "2023-11-18",
    },
    {
      id: "j5",
      title: "Graphic Design Assistant",
      company: "CreativeStrokes Media",
      location: "Hyderabad",
      type: "part-time",
      salary: "₹18,000 - ₹25,000 per month",
      description:
        "Assist our senior designers in creating visual content for various clients, including social media graphics, branding materials, and more.",
      requirements: [
        "Basic knowledge of Adobe Photoshop and Illustrator",
        "Good understanding of design principles",
        "Ability to follow brand guidelines",
        "Portfolio demonstrating your skills",
      ],
      posted: "2023-11-22",
    },
  ];

  const workshops: Workshop[] = [
    {
      id: "w1",
      title: "Introduction to Web Development",
      organizer: "CodeCamp India",
      date: "2023-12-15",
      duration: "3 days",
      type: "online",
      description:
        "Learn the basics of web development including HTML, CSS, and JavaScript in this hands-on workshop led by industry professionals.",
      skillsTaught: ["HTML5", "CSS3", "JavaScript Basics", "Responsive Design"],
      registration: {
        deadline: "2023-12-10",
        url: "https://example.com/webdev-workshop",
        fee: "₹999",
      },
    },
    {
      id: "w2",
      title: "Resume Building and Interview Skills",
      organizer: "Career Connect",
      date: "2023-12-05",
      duration: "1 day",
      type: "offline",
      location: "Delhi Community Center",
      description:
        "A comprehensive workshop on crafting an effective resume and preparing for job interviews, including mock interviews and feedback sessions.",
      skillsTaught: [
        "Resume Writing",
        "Interview Techniques",
        "Personal Branding",
        "Communication Skills",
      ],
      registration: {
        deadline: "2023-12-01",
        url: "https://example.com/resume-workshop",
        fee: "₹499",
      },
    },
    {
      id: "w3",
      title: "Digital Marketing Essentials",
      organizer: "DigiGrowth Academy",
      date: "2023-12-18",
      duration: "2 days",
      type: "online",
      description:
        "Dive into the world of digital marketing and learn strategies for social media, SEO, email marketing, and content creation.",
      skillsTaught: [
        "Social Media Marketing",
        "SEO Basics",
        "Email Campaigns",
        "Content Strategy",
      ],
      registration: {
        deadline: "2023-12-15",
        url: "https://example.com/digital-marketing-workshop",
        fee: "₹1,499",
      },
    },
    {
      id: "w4",
      title: "Financial Literacy for Young Adults",
      organizer: "MoneyWise Foundation",
      date: "2023-12-10",
      duration: "4 hours",
      type: "offline",
      location: "Mumbai Community Hall",
      description:
        "Learn essential financial skills including budgeting, saving, investments, and understanding credit in this practical workshop.",
      skillsTaught: [
        "Budgeting",
        "Savings Strategies",
        "Investment Basics",
        "Credit Management",
      ],
      registration: {
        deadline: "2023-12-08",
        url: "https://example.com/financial-literacy-workshop",
        fee: "₹299",
      },
    },
    {
      id: "w5",
      title: "Mobile App Development with Flutter",
      organizer: "TechSkills Academy",
      date: "2023-12-20",
      duration: "4 days",
      type: "online",
      description:
        "A comprehensive workshop on building cross-platform mobile apps using Flutter framework. Build your first app by the end of the workshop!",
      skillsTaught: [
        "Dart Programming",
        "Flutter Basics",
        "UI Design",
        "App Deployment",
      ],
      registration: {
        deadline: "2023-12-18",
        url: "https://example.com/flutter-workshop",
        fee: "₹2,499",
      },
    },
  ];

  const courses: Course[] = [
    {
      id: "c1",
      title: "Complete Web Development Bootcamp",
      provider: "TechLearn Academy",
      skillLevel: "beginner",
      duration: "8 weeks",
      certificate: true,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      description:
        "A comprehensive course that takes you from zero to full-stack web developer with hands-on projects and real-world applications.",
      enrolled: 2456,
      rating: 4.8,
    },
    {
      id: "c2",
      title: "Advanced Data Analysis with Python",
      provider: "DataScience Pro",
      skillLevel: "intermediate",
      duration: "6 weeks",
      certificate: true,
      skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Statistical Analysis"],
      description:
        "Master data analysis techniques using Python libraries and tools. Learn to extract insights from real-world datasets and create compelling visualizations.",
      enrolled: 1872,
      rating: 4.7,
    },
    {
      id: "c3",
      title: "Professional Communication Skills",
      provider: "CareerBoost Education",
      skillLevel: "beginner",
      duration: "4 weeks",
      certificate: true,
      skills: [
        "Public Speaking",
        "Business Writing",
        "Presentation Skills",
        "Interpersonal Communication",
      ],
      description:
        "Enhance your professional communication skills for workplace success. Perfect for students and early career professionals.",
      enrolled: 3201,
      rating: 4.6,
    },
    {
      id: "c4",
      title: "Mobile App UI/UX Design",
      provider: "DesignMasters",
      skillLevel: "intermediate",
      duration: "5 weeks",
      certificate: true,
      skills: ["UI Design", "UX Principles", "Figma", "Prototyping", "User Testing"],
      description:
        "Learn to create beautiful, user-friendly mobile app interfaces. From wireframing to high-fidelity prototypes, master the complete design process.",
      enrolled: 1453,
      rating: 4.9,
    },
    {
      id: "c5",
      title: "Digital Marketing Specialist",
      provider: "MarketingPro Academy",
      skillLevel: "beginner",
      duration: "7 weeks",
      certificate: true,
      skills: [
        "SEO",
        "Social Media Marketing",
        "Content Marketing",
        "Google Analytics",
        "PPC Advertising",
      ],
      description:
        "Become a well-rounded digital marketer with this comprehensive course covering all essential aspects of online marketing strategies.",
      enrolled: 2789,
      rating: 4.5,
    },
    {
      id: "c6",
      title: "Artificial Intelligence Fundamentals",
      provider: "TechLearn Academy",
      skillLevel: "advanced",
      duration: "10 weeks",
      certificate: true,
      skills: ["Machine Learning", "Neural Networks", "Python", "TensorFlow", "Data Modeling"],
      description:
        "Dive into the world of AI with this advanced course covering machine learning algorithms, neural networks, and practical AI applications.",
      enrolled: 1256,
      rating: 4.7,
    },
  ];

  const resumeTemplates: ResumeTemplate[] = [
    {
      id: "r1",
      name: "Professional Classic",
      category: "General",
      imageUrl: "/placeholder.svg",
      downloadUrl: "#",
      format: "DOCX"
    },
    {
      id: "r2",
      name: "Creative Portfolio",
      category: "Design",
      imageUrl: "/placeholder.svg",
      downloadUrl: "#",
      format: "DOCX"
    },
    {
      id: "r3",
      name: "Technical Specialist",
      category: "IT/Tech",
      imageUrl: "/placeholder.svg",
      downloadUrl: "#",
      format: "DOCX"
    },
    {
      id: "r4",
      name: "Fresh Graduate",
      category: "Entry Level",
      imageUrl: "/placeholder.svg",
      downloadUrl: "#",
      format: "DOCX"
    }
  ];

  // Filter functions
  const filteredJobs = jobs.filter((job) => {
    return (
      (job.title.toLowerCase().includes(jobSearchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(jobSearchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(jobSearchQuery.toLowerCase())) &&
      (!selectedJobType || job.type === selectedJobType) &&
      (!selectedLocation || job.location.toLowerCase() === selectedLocation.toLowerCase())
    );
  });

  const filteredWorkshops = workshops.filter((workshop) => {
    return (
      (workshop.title.toLowerCase().includes(workshopSearchQuery.toLowerCase()) ||
        workshop.organizer.toLowerCase().includes(workshopSearchQuery.toLowerCase()) ||
        workshop.description.toLowerCase().includes(workshopSearchQuery.toLowerCase())) &&
      (!selectedWorkshopType || workshop.type === selectedWorkshopType)
    );
  });

  const filteredCourses = courses.filter((course) => {
    return (
      (course.title.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
        course.provider.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
        course.skills.some(skill => skill.toLowerCase().includes(courseSearchQuery.toLowerCase()))) &&
      (!selectedSkillLevel || course.skillLevel === selectedSkillLevel)
    );
  });

  // Extract unique locations
  const locations = Array.from(new Set(jobs.map(job => job.location)));

  // Calculate days remaining
  const getDaysRemaining = (deadline?: string) => {
    if (!deadline) return null;
    
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Employment Center</h1>
            <p className="text-muted-foreground">Find jobs, workshops, and career resources</p>
          </div>
        </div>

        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important notice</AlertTitle>
          <AlertDescription>
            Register for an upcoming virtual career fair on December 20, 2023.
            <Button variant="link" className="p-0 h-auto ml-2">
              Learn more
            </Button>
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="jobs">Jobs & Internships</TabsTrigger>
            <TabsTrigger value="workshops">Skill Workshops</TabsTrigger>
            <TabsTrigger value="courses">Career Courses</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Jobs Tab */}
          <TabsContent value="jobs">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for jobs by title, company, or keywords..."
                  value={jobSearchQuery}
                  onChange={(e) => setJobSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex gap-2">
                      <Filter className="h-4 w-4" />
                      Job Type
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedJobType(null)}>
                      All Types
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedJobType("full-time")}>
                      Full-Time
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedJobType("part-time")}>
                      Part-Time
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedJobType("internship")}>
                      Internship
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedLocation(null)}>
                      All Locations
                    </DropdownMenuItem>
                    {locations.map(location => (
                      <DropdownMenuItem 
                        key={location}
                        onClick={() => setSelectedLocation(location)}
                      >
                        {location}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="text-center py-10">
                <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No jobs found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Building className="h-4 w-4 mr-1" /> {job.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">
                            <MapPin className="h-3 w-3 mr-1" /> {job.location}
                          </Badge>
                          <Badge variant={
                            job.type === "full-time" ? "default" :
                            job.type === "part-time" ? "secondary" : "outline"
                          }>
                            {job.type === "full-time" ? "Full-Time" :
                             job.type === "part-time" ? "Part-Time" : "Internship"}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{job.description}</p>
                      
                      {job.salary && (
                        <p className="text-sm font-medium mb-2">
                          Salary: {job.salary}
                        </p>
                      )}
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="text-sm">{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Posted: {formatDate(job.posted)}
                        </div>
                        
                        {job.deadline && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {getDaysRemaining(job.deadline) !== null ? (
                              <>Deadline: {getDaysRemaining(job.deadline)} days left</>
                            ) : (
                              <>Deadline: {formatDate(job.deadline)}</>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">View Details</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{job.title}</DialogTitle>
                            <DialogDescription className="flex items-center">
                              <Building className="h-4 w-4 mr-1" /> {job.company}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">
                                <MapPin className="h-3 w-3 mr-1" /> {job.location}
                              </Badge>
                              <Badge variant={
                                job.type === "full-time" ? "default" :
                                job.type === "part-time" ? "secondary" : "outline"
                              }>
                                {job.type === "full-time" ? "Full-Time" :
                                job.type === "part-time" ? "Part-Time" : "Internship"}
                              </Badge>
                              {job.salary && (
                                <Badge variant="outline">{job.salary}</Badge>
                              )}
                            </div>
                            
                            <div>
                              <h3 className="text-md font-medium mb-2">Job Description</h3>
                              <p>{job.description}</p>
                            </div>
                            
                            <div>
                              <h3 className="text-md font-medium mb-2">Requirements</h3>
                              <ul className="list-disc pl-5 space-y-1">
                                {job.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Posted: {formatDate(job.posted)}
                              </div>
                              
                              {job.deadline && (
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  Deadline: {formatDate(job.deadline)}
                                </div>
                              )}
                            </div>
                            
                            {job.deadline && getDaysRemaining(job.deadline) !== null && (
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Application Window</span>
                                  <span>{getDaysRemaining(job.deadline)} days remaining</span>
                                </div>
                                <Progress value={100 - (getDaysRemaining(job.deadline)! / 30) * 100} className="h-2" />
                              </div>
                            )}
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Save Job</Button>
                            <Button>Apply Now</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Button>Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Workshops Tab */}
          <TabsContent value="workshops">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for workshops..."
                  value={workshopSearchQuery}
                  onChange={(e) => setWorkshopSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex gap-2">
                      <Filter className="h-4 w-4" />
                      Type
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedWorkshopType(null)}>
                      All Types
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedWorkshopType("online")}>
                      Online
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedWorkshopType("offline")}>
                      Offline
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {filteredWorkshops.length === 0 ? (
              <div className="text-center py-10">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No workshops found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{workshop.title}</CardTitle>
                        <Badge variant={workshop.type === "online" ? "secondary" : "default"}>
                          {workshop.type === "online" ? "Online" : "Offline"}
                        </Badge>
                      </div>
                      <CardDescription>{workshop.organizer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">{formatDate(workshop.date)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{workshop.duration}</span>
                        </div>
                        {workshop.type === "offline" && workshop.location && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span className="font-medium">{workshop.location}</span>
                          </div>
                        )}
                        {workshop.registration && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Registration Fee:</span>
                            <span className="font-medium">{workshop.registration.fee || "Free"}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="mt-4 mb-4">{workshop.description}</p>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Skills You'll Learn:</h4>
                        <div className="flex flex-wrap gap-2">
                          {workshop.skillsTaught.map((skill, index) => (
                            <Badge key={index} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      {workshop.registration && workshop.registration.deadline && (
                        <div className="mt-4 text-sm">
                          <div className="flex justify-between mb-1">
                            <span className="text-muted-foreground">Registration Deadline:</span>
                            <span>{formatDate(workshop.registration.deadline)}</span>
                          </div>
                          {getDaysRemaining(workshop.registration.deadline) !== null && (
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Time Remaining</span>
                                <span>{getDaysRemaining(workshop.registration.deadline)} days left</span>
                              </div>
                              <Progress value={100 - (getDaysRemaining(workshop.registration.deadline)! / 14) * 100} className="h-1" />
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={() => window.open(workshop.registration?.url, "_blank")}>
                        Register Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for courses or skills..."
                  value={courseSearchQuery}
                  onChange={(e) => setCourseSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex gap-2">
                      <Filter className="h-4 w-4" />
                      Skill Level
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedSkillLevel(null)}>
                      All Levels
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedSkillLevel("beginner")}>
                      Beginner
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedSkillLevel("intermediate")}>
                      Intermediate
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedSkillLevel("advanced")}>
                      Advanced
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {filteredCourses.length === 0 ? (
              <div className="text-center py-10">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No courses found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <Badge variant={
                          course.skillLevel === "beginner" ? "outline" :
                          course.skillLevel === "intermediate" ? "secondary" : "default"
                        }>
                          {course.skillLevel.charAt(0).toUpperCase() + course.skillLevel.slice(1)}
                        </Badge>
                      </div>
                      <CardDescription>{course.provider}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{course.description}</p>
                      
                      <div className="flex flex-col space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Certificate:</span>
                          <span className="font-medium">{course.certificate ? "Yes" : "No"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Students Enrolled:</span>
                          <span className="font-medium">{course.enrolled.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rating:</span>
                          <span className="font-medium">{course.rating}/5.0</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill, index) => (
                            <Badge key={index} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button className="w-full">Enroll Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileTextIcon className="h-5 w-5 mr-2" />
                    Resume Templates
                  </CardTitle>
                  <CardDescription>
                    Professional resume templates to help you land your dream job
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {resumeTemplates.map(template => (
                      <div key={template.id} className="border rounded-lg overflow-hidden hover:border-primary transition-colors">
                        <div className="h-40 bg-muted flex items-center justify-center">
                          <FileTextIcon className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium">{template.name}</h4>
                          <p className="text-xs text-muted-foreground">{template.category} • {template.format}</p>
                          <Button variant="outline" size="sm" className="w-full mt-2">
                            <Download className="h-3 w-3 mr-1" /> Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="ml-auto">
                    View All Templates
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Career Guides
                  </CardTitle>
                  <CardDescription>
                    Helpful resources for career planning and skill development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium mb-1">Interview Preparation Guide</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Comprehensive guide to ace your next job interview
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" /> Download PDF
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium mb-1">Networking Tips for Students</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Learn how to build professional connections while studying
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" /> Download PDF
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium mb-1">Salary Negotiation Handbook</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tips and strategies to negotiate your compensation
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" /> Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="ml-auto">
                    View All Guides
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Career Assessment Tools
                  </CardTitle>
                  <CardDescription>
                    Discover your strengths, interests, and ideal career path
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full">Take Skills Assessment</Button>
                    <Button variant="outline" className="w-full">Career Aptitude Test</Button>
                    <Button variant="outline" className="w-full">Personal Strength Finder</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Useful Links
                  </CardTitle>
                  <CardDescription>
                    Additional resources to help your career journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                      <div className="ml-2">
                        <h4 className="font-medium">Government Employment Portal</h4>
                        <p className="text-xs text-muted-foreground">
                          Official job listings from government sectors
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </div>
                    
                    <div className="flex items-center p-2 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                      <div className="ml-2">
                        <h4 className="font-medium">National Apprenticeship Program</h4>
                        <p className="text-xs text-muted-foreground">
                          Find apprenticeship opportunities across industries
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </div>
                    
                    <div className="flex items-center p-2 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                      <div className="ml-2">
                        <h4 className="font-medium">Rural Skills Development Initiative</h4>
                        <p className="text-xs text-muted-foreground">
                          Programs focused on rural employment opportunities
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </div>
                    
                    <div className="flex items-center p-2 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                      <div className="ml-2">
                        <h4 className="font-medium">Scholarship & Financial Aid Resources</h4>
                        <p className="text-xs text-muted-foreground">
                          Find financial support for your education and training
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Employment;

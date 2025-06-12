
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  FileText, 
  Search, 
  Download, 
  BookOpen, 
  ChevronDown,
  Filter,
  Book
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type StudyMaterial = {
  id: number;
  title: string;
  description: string;
  subject: string;
  fileSize: string;
  format: string;
} & (
  | { type: 'textbook'; className: string; source: string }
  | { type: 'paper'; className: string; year: string }
  | { type: 'reference'; category: string }
);

const StudyMaterials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  // Sample data for study materials
  const studyMaterials: StudyMaterial[] = [
    // Textbooks
    {
      id: 1,
      type: 'textbook',
      title: "Mathematics Grade 10",
      description: "Complete mathematics textbook for grade 10 including algebra, geometry, and trigonometry",
      subject: "Mathematics",
      className: "10",
      source: "NCERT",
      fileSize: "15 MB",
      format: "PDF"
    },
    {
      id: 2,
      type: 'textbook',
      title: "Science for Elementary Students",
      description: "Comprehensive guide to basic science for elementary education",
      subject: "Science",
      className: "5",
      source: "State Board",
      fileSize: "12 MB",
      format: "PDF"
    },
    {
      id: 3,
      type: 'textbook',
      title: "English Grammar Handbook",
      description: "Complete guide to English grammar rules with examples",
      subject: "English",
      className: "8",
      source: "Oxford",
      fileSize: "8 MB",
      format: "PDF"
    },
    {
      id: 4,
      type: 'textbook',
      title: "Introduction to Geography",
      description: "Explore landforms, climate patterns, and human geography concepts",
      subject: "Geography",
      className: "9",
      source: "NCERT",
      fileSize: "10 MB",
      format: "EPUB"
    },
    // Previous year papers
    {
      id: 5,
      type: 'paper',
      title: "Mathematics Annual Exam 2022",
      description: "Previous year mathematics examination paper with solution key",
      subject: "Mathematics",
      className: "12",
      year: "2022",
      fileSize: "2 MB",
      format: "PDF"
    },
    {
      id: 6,
      type: 'paper',
      title: "Science Half-Yearly Exam 2023",
      description: "Mid-term science examination questions from 2023",
      subject: "Science",
      className: "10",
      year: "2023",
      fileSize: "3 MB",
      format: "PDF"
    },
    {
      id: 7,
      type: 'paper',
      title: "English Language Assessment 2021",
      description: "Previous year English language examination with marking scheme",
      subject: "English",
      className: "8",
      year: "2021",
      fileSize: "1.5 MB",
      format: "PDF"
    },
    // Reference materials
    {
      id: 8,
      type: 'reference',
      title: "Science Project Ideas",
      description: "Collection of science project ideas suitable for school exhibitions",
      subject: "Science",
      category: "Projects",
      fileSize: "5 MB",
      format: "PDF"
    },
    {
      id: 9,
      type: 'reference',
      title: "Mathematical Formulas Handbook",
      description: "Complete collection of mathematical formulas for all grades",
      subject: "Mathematics",
      category: "Reference",
      fileSize: "4 MB",
      format: "PDF"
    },
    {
      id: 10,
      type: 'reference',
      title: "English Writing Styles Guide",
      description: "Guide to different writing styles and essay formats",
      subject: "English",
      category: "Guide",
      fileSize: "3 MB",
      format: "DOCX"
    },
  ];

  // Filter logic
  const filteredMaterials = studyMaterials.filter(material => {
    // Search query filter
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchQuery.toLowerCase());

    // Subject filter
    const matchesSubject = !selectedSubject || material.subject === selectedSubject;
    
    // Format filter
    const matchesFormat = !selectedFormat || material.format === selectedFormat;
    
    return matchesSearch && matchesSubject && matchesFormat;
  });

  // Extract unique subjects and formats for filters
  const subjects = Array.from(new Set(studyMaterials.map(material => material.subject)));
  const formats = Array.from(new Set(studyMaterials.map(material => material.format)));

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Study Materials</h1>
            <p className="text-muted-foreground">Access textbooks, previous year papers, and reference materials</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 my-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for study materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  Subject
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedSubject(null)}>
                  All Subjects
                </DropdownMenuItem>
                {subjects.map(subject => (
                  <DropdownMenuItem key={subject} onClick={() => setSelectedSubject(subject)}>
                    {subject}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  Format
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedFormat(null)}>
                  All Formats
                </DropdownMenuItem>
                {formats.map(format => (
                  <DropdownMenuItem key={format} onClick={() => setSelectedFormat(format)}>
                    {format}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {selectedSubject && (
          <Badge variant="outline" className="mb-4 p-2">
            Subject: {selectedSubject}
            <Button variant="ghost" className="h-4 w-4 p-0 ml-2" onClick={() => setSelectedSubject(null)}>
              ×
            </Button>
          </Badge>
        )}

        {selectedFormat && (
          <Badge variant="outline" className="mb-4 ml-2 p-2">
            Format: {selectedFormat}
            <Button variant="ghost" className="h-4 w-4 p-0 ml-2" onClick={() => setSelectedFormat(null)}>
              ×
            </Button>
          </Badge>
        )}

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Materials</TabsTrigger>
            <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
            <TabsTrigger value="papers">Previous Year Papers</TabsTrigger>
            <TabsTrigger value="reference">Reference Materials</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredMaterials.length === 0 ? (
              <div className="text-center py-10">
                <Book className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No study materials found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMaterials.map((material) => (
                  <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <Badge>{material.format}</Badge>
                      </div>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subject:</span>
                          <span className="font-medium">{material.subject}</span>
                        </div>
                        {material.type === 'textbook' && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Class:</span>
                              <span className="font-medium">{material.className}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Source:</span>
                              <span className="font-medium">{material.source}</span>
                            </div>
                          </>
                        )}
                        {material.type === 'paper' && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Class:</span>
                              <span className="font-medium">{material.className}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Year:</span>
                              <span className="font-medium">{material.year}</span>
                            </div>
                          </>
                        )}
                        {material.type === 'reference' && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Category:</span>
                            <span className="font-medium">{material.category}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{material.fileSize}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="textbooks" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials
                .filter(material => material.type === 'textbook')
                .map(material => (
                  // Render textbook card (same structure as above)
                  <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <Badge>{material.format}</Badge>
                      </div>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subject:</span>
                          <span className="font-medium">{material.subject}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Class:</span>
                          <span className="font-medium">{material.className}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Source:</span>
                          <span className="font-medium">{material.source}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{material.fileSize}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="papers" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials
                .filter(material => material.type === 'paper')
                .map(material => (
                  // Render papers card
                  <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <Badge>{material.format}</Badge>
                      </div>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subject:</span>
                          <span className="font-medium">{material.subject}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Class:</span>
                          <span className="font-medium">{material.className}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Year:</span>
                          <span className="font-medium">{material.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{material.fileSize}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reference" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials
                .filter(material => material.type === 'reference')
                .map(material => (
                  // Render reference materials card
                  <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <Badge>{material.format}</Badge>
                      </div>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subject:</span>
                          <span className="font-medium">{material.subject}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category:</span>
                          <span className="font-medium">{material.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{material.fileSize}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default StudyMaterials;

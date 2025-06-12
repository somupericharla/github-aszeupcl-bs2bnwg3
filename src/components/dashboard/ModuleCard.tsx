
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModuleCard as ModuleCardType } from "@/types";
import { LucideIcon } from "lucide-react";
import { 
  Book, 
  MessageCircle, 
  FileText, 
  BarChart2, 
  Video, 
  HelpCircle, 
  Award, 
  Trophy, 
  Gift, 
  BookOpen, 
  Lightbulb, 
  Briefcase, 
  Coins, 
  Layout 
} from "lucide-react";
import { Link } from "react-router-dom";

// Map of module IDs to Lucide icons
const moduleIcons: Record<string, LucideIcon> = {
  lms: Book,
  communication: MessageCircle,
  assessments: FileText,
  results: BarChart2,
  liveClasses: Video,
  doubtSystem: HelpCircle,
  skillDevelopment: Award,
  leaderboard: Trophy,
  rewards: Gift,
  studyMaterial: BookOpen,
  research: Lightbulb,
  employment: Briefcase,
  scholarships: Coins,
  workspace: Layout
};

interface ModuleCardProps {
  module: ModuleCardType;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const IconComponent = moduleIcons[module.icon] || Book;
  
  const cardColorClasses: Record<string, string> = {
    blue: 'bg-edubridge-blue/10 border-edubridge-blue/30',
    purple: 'bg-edubridge-purple/10 border-edubridge-purple/30',
    green: 'bg-green-500/10 border-green-500/30',
    yellow: 'bg-yellow-500/10 border-yellow-500/30',
    red: 'bg-red-500/10 border-red-500/30'
  };
  
  const textColorClasses: Record<string, string> = {
    blue: 'text-edubridge-blue',
    purple: 'text-edubridge-purple',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600'
  };
  
  const bgColor = cardColorClasses[module.color] || cardColorClasses.blue;
  const textColor = textColorClasses[module.color] || textColorClasses.blue;
  
  return (
    <Link to={module.path}>
      <Card className={`h-full module-card card-hover ${bgColor}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className={`p-2 rounded-full ${bgColor} ${textColor}`}>
              <IconComponent className="h-6 w-6" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="font-medium text-lg">{module.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className={textColor}>
            Explore
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}

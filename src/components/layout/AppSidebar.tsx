
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  BookOpen, 
  MessageCircle, 
  FileText, 
  BarChart2, 
  Video, 
  HelpCircle, 
  Award, 
  Trophy, 
  Gift, 
  Book, 
  Lightbulb, 
  Briefcase, 
  Coins, 
  Layout,
  LayoutDashboard,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

export function AppSidebar() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  // Different menu items based on user role
  const getMenuItems = () => {
    const baseItems = [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      }
    ];

    const studentItems = [
      {
        title: "Learning System",
        url: "/lms",
        icon: Book,
      },
      {
        title: "Communication",
        url: "/communication",
        icon: MessageCircle,
      },
      {
        title: "Assessments",
        url: "/assessments",
        icon: FileText,
      },
      {
        title: "Results",
        url: "/results",
        icon: BarChart2,
      },
      {
        title: "Live Classes",
        url: "/live-classes",
        icon: Video,
      },
      {
        title: "Doubt System",
        url: "/doubts",
        icon: HelpCircle,
      },
      {
        title: "Skills",
        url: "/skills",
        icon: Award,
      },
      {
        title: "Leaderboard",
        url: "/leaderboard",
        icon: Trophy,
      }
    ];
    
    const mentorItems = [
      {
        title: "Students",
        url: "/students",
        icon: BookOpen,
      },
      {
        title: "Create Content",
        url: "/create-content",
        icon: FileText,
      },
      {
        title: "Live Sessions",
        url: "/live-sessions",
        icon: Video,
      },
      {
        title: "Answer Doubts",
        url: "/answer-doubts",
        icon: HelpCircle,
      }
    ];
    
    const parentItems = [
      {
        title: "Child Progress",
        url: "/child-progress",
        icon: BarChart2,
      },
      {
        title: "Reports",
        url: "/reports",
        icon: FileText,
      },
      {
        title: "Mentor Connect",
        url: "/mentor-connect",
        icon: MessageCircle,
      }
    ];
    
    const adminItems = [
      {
        title: "Users",
        url: "/users",
        icon: Book,
      },
      {
        title: "Content",
        url: "/content",
        icon: FileText,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart2,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      }
    ];
    
    const resourceItems = [
      {
        title: "Study Materials",
        url: "/study-materials",
        icon: BookOpen,
      },
      {
        title: "Research Center",
        url: "/research",
        icon: Lightbulb,
      },
      {
        title: "Employment",
        url: "/employment",
        icon: Briefcase,
      },
      {
        title: "Scholarships",
        url: "/scholarships",
        icon: Coins,
      },
      {
        title: "Workspace",
        url: "/workspace",
        icon: Layout,
      }
    ];

    switch (user.role) {
      case 'student':
        return { main: [...baseItems, ...studentItems], resources: resourceItems };
      case 'mentor':
        return { main: [...baseItems, ...mentorItems], resources: [] };
      case 'parent':
        return { main: [...baseItems, ...parentItems], resources: [] };
      case 'admin':
        return { main: [...baseItems, ...adminItems], resources: [] };
      default:
        return { main: baseItems, resources: [] };
    }
  };

  const { main, resources } = getMenuItems();
  const roleLabels: Record<UserRole, string> = {
    student: 'Student',
    mentor: 'Mentor',
    parent: 'Parent',
    admin: 'Admin',
  };

  return (
    <Sidebar>
      <div className="py-4 px-2">
        <div className="flex items-center justify-center mb-6">
          <div className="text-2xl font-bold text-edubridge-purple">AI Saathi</div>
        </div>
      </div>
      <SidebarContent className="px-2">
        <div className="px-3 py-2">
          <div className="text-xs font-medium text-muted-foreground">
            Logged in as {roleLabels[user.role]}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {resources.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Resources</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {resources.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}

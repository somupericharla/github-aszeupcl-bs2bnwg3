
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full module-card">
      <CardHeader className="p-0">
        <div className="h-32 w-full overflow-hidden rounded-t-xl">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="font-medium text-lg">{course.title}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
        
        <div className="mt-4 space-y-1">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
          
          <div className="text-sm text-muted-foreground">
            {course.completed} of {course.modules} modules completed
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <button className="text-sm font-medium text-edubridge-blue hover:text-edubridge-blue-bright">
          Continue Learning
        </button>
      </CardFooter>
    </Card>
  );
}

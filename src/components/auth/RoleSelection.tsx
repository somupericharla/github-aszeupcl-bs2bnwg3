import { useState } from 'react';
import { UserRole } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Users, User, ShieldCheck } from 'lucide-react';

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void;
}

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  
  const roles: { id: UserRole; title: string; icon: React.ReactNode; description: string }[] = [
    {
      id: 'student',
      title: 'Student',
      icon: <GraduationCap className="h-8 w-8 text-edubridge-purple" />,
      description: 'Access courses, tests, and learning resources'
    },
    {
      id: 'mentor',
      title: 'Mentor',
      icon: <Users className="h-8 w-8 text-edubridge-blue" />,
      description: 'Guide students, create content, and track progress'
    },
    {
      id: 'parent',
      title: 'Parent',
      icon: <User className="h-8 w-8 text-edubridge-purple-secondary" />,
      description: 'Monitor your child\'s performance and achievements'
    },
    {
      id: 'admin',
      title: 'Admin',
      icon: <ShieldCheck className="h-8 w-8 text-edubridge-blue-bright" />,
      description: 'Manage platform content, users, and analytics'
    },
    {
      id: 'organization',
      title: 'Organization',
      description: 'Manage and oversee educational activities for your institution'
    }
  ];

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Select Your Role</h2>
        <p className="text-muted-foreground">Choose how you'll use AI Saathi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles.map((role) => (
          <Card 
            key={role.id}
            className={`p-4 cursor-pointer card-hover ${
              selectedRole === role.id 
                ? 'border-2 border-edubridge-purple ring-2 ring-edubridge-purple ring-opacity-50' 
                : ''
            }`}
            onClick={() => setSelectedRole(role.id)}
          >
            <div className="flex flex-col items-center text-center p-2">
              {role.icon}
              <h3 className="font-medium mt-2">{role.title}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <Button 
        className="w-full mt-6 bg-edubridge-purple hover:bg-edubridge-purple-secondary"
        disabled={!selectedRole}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}

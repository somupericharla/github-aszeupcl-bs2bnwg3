
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserRole } from '@/types';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

interface LoginFormProps {
  selectedRole: UserRole;
  onBack: () => void;
  onSignupClick: () => void;
}

export function LoginForm({ selectedRole, onBack, onSignupClick }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    try {
      await login(data.email, data.password, selectedRole);
      toast({
        title: 'Login successful',
        description: `Welcome back! You've logged in as a ${selectedRole}.`,
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const roleLabels: Record<UserRole, string> = {
    student: 'Student',
    mentor: 'Mentor',
    parent: 'Parent',
    admin: 'Admin',
  };

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Login as {roleLabels[selectedRole]}</h2>
        <p className="text-muted-foreground">Enter your credentials to continue</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      {...field} 
                    />
                    <button 
                      type="button" 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3 pt-2">
            <Button 
              type="submit" 
              className="bg-edubridge-blue hover:bg-edubridge-blue-bright w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
            
            <div className="flex items-center justify-between">
              <Button 
                type="button" 
                variant="ghost"
                onClick={onBack}
                disabled={isLoading}
                className="text-sm"
              >
                Back
              </Button>
              <Button 
                type="button" 
                variant="link"
                onClick={onSignupClick}
                disabled={isLoading}
                className="text-sm text-edubridge-purple"
              >
                Don't have an account? Sign up
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { RoleSelection } from '@/components/auth/RoleSelection';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import { UserRole } from '@/types';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface LocationState {
  selectedRole?: UserRole;
}

const Auth = () => {
  const [step, setStep] = useState<'role' | 'login' | 'signup'>('role');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const { user } = useAuth();
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  
  // Effect to check if a role was passed from the home page
  useEffect(() => {
    if (state?.selectedRole) {
      setSelectedRole(state.selectedRole as UserRole);
      setStep('login');
    }
  }, [state]);
  
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  
  const handleRoleSelect = (role: UserRole) => {
    if (role === 'organization') {
      console.log('Organization role selected');
    }
    setSelectedRole(role);
    setStep('login');
  };
  
  const handleBack = () => {
    setStep('role');
    setSelectedRole(null);
  };

  const switchToLogin = () => {
    setStep('login');
  };

  const switchToSignup = () => {
    setStep('signup');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100 
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { 
        ease: "easeInOut", 
        duration: 0.3 
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md px-4 py-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-edubridge-blue to-edubridge-purple p-3 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-white">AI Saathi</div>
            </div>
          </div>
          <p className="text-muted-foreground">Empowering rural education in India</p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-6 bg-white dark:bg-gray-800">
              {step === 'role' ? (
                <RoleSelection onRoleSelect={handleRoleSelect} />
              ) : step === 'login' && selectedRole ? (
                <LoginForm 
                  selectedRole={selectedRole} 
                  onBack={handleBack} 
                  onSignupClick={switchToSignup}
                />
              ) : step === 'signup' && selectedRole ? (
                <SignupForm 
                  selectedRole={selectedRole} 
                  onBack={handleBack}
                  onLoginClick={switchToLogin}
                />
              ) : (
                <Navigate to="/" />
              )}
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.p 
          className="text-center text-sm text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          By using AI Saathi, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </div>
    </div>
  );
};

export default Auth;

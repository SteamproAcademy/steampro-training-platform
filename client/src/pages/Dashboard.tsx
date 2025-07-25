import { useEffect } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import ModuleCard from '../components/ModuleCard';
import ProgressBar from '../components/ProgressBar';
import { getCurrentUser } from '../lib/auth';
import { trainingData } from '../data/trainingData';
import { getTrackProgress, areAllTracksCompleted, isModuleUnlocked } from '../lib/progress';

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) {
      setLocation('/');
    }
  }, [user, setLocation]);

  if (!user) return null;

  const coreModules = trainingData.core;
  const departmentalModules = trainingData.departmental[user.department] || [];
  const hrModules = trainingData.hr;

  const coreProgress = getTrackProgress(coreModules.map(m => m.id));
  const departmentalProgress = getTrackProgress(departmentalModules.map(m => m.id));
  const hrProgress = getTrackProgress(hrModules.map(m => m.id));

  const allCompleted = areAllTracksCompleted(
    coreModules.map(m => m.id),
    departmentalModules.map(m => m.id),
    hrModules.map(m => m.id)
  );

  const totalModules = coreModules.length + departmentalModules.length + hrModules.length;
  const completedModules = coreProgress.completed + departmentalProgress.completed + hrProgress.completed;
  const overallProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  // Calculate estimated study hours (rough estimate)
  const totalHours = Math.round(completedModules * 0.7); // Assuming ~40min average per module

  const getDepartmentTitle = (dept: string) => {
    const titles = {
      sales: 'Sales Training',
      ops: 'Operations Training',
      marketing: 'Marketing Training',
      finance: 'Finance Training',
      manufacturing: 'Manufacturing Training'
    };
    return titles[dept as keyof typeof titles] || 'Departmental Training';
  };

  const getDepartmentGradient = (dept: string) => {
    const gradients = {
      sales: 'from-orange-500 to-red-500',
      ops: 'from-blue-500 to-indigo-500',
      marketing: 'from-purple-500 to-pink-500',
      finance: 'from-green-500 to-emerald-500',
      manufacturing: 'from-yellow-500 to-orange-500'
    };
    return gradients[dept as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };

  const getDepartmentIcon = (dept: string) => {
    const icons = {
      sales: 'fa-chart-line',
      ops: 'fa-cogs',
      marketing: 'fa-bullhorn',
      finance: 'fa-calculator',
      manufacturing: 'fa-industry'
    };
    return icons[dept as keyof typeof icons] || 'fa-briefcase';
  };

  return (
    <div className="min-h-screen bg-steampro-light">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-steampro-dark mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-600 capitalize">Department: {user.department}</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-steampro-dark mb-4">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-check text-green-600 text-xl"></i>
              </div>
              <p className="font-medium text-steampro-dark">{completedModules}</p>
              <p className="text-sm text-gray-500">Modules Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-clock text-blue-600 text-xl"></i>
              </div>
              <p className="font-medium text-steampro-dark">{totalHours}</p>
              <p className="text-sm text-gray-500">Hours Studied</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-trophy text-purple-600 text-xl"></i>
              </div>
              <p className="font-medium text-steampro-dark">{overallProgress}%</p>
              <p className="text-sm text-gray-500">Overall Progress</p>
            </div>
          </div>
        </div>

        {/* Training Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Core Training Track */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-steampro-blue to-blue-600 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Core Training</h3>
                <i className="fas fa-star text-yellow-300 text-xl"></i>
              </div>
              <p className="text-white/90 text-sm">Essential knowledge for all employees</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2 text-white">
                  <span>Progress</span>
                  <span>{coreProgress.percentage}%</span>
                </div>
                <ProgressBar 
                  current={coreProgress.completed} 
                  total={coreProgress.total} 
                  color="bg-white" 
                />
              </div>
            </div>
            <div className="p-6">
              {coreModules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isUnlocked={isModuleUnlocked(module.id, coreModules.map(m => m.id))}
                  allModuleIds={coreModules.map(m => m.id)}
                />
              ))}
            </div>
          </div>

          {/* Departmental Training Track */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className={`bg-gradient-to-r ${getDepartmentGradient(user.department)} p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{getDepartmentTitle(user.department)}</h3>
                <i className={`fas ${getDepartmentIcon(user.department)} text-white/70 text-xl`}></i>
              </div>
              <p className="text-white/80 text-sm">Specialized training for your department</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{departmentalProgress.percentage}%</span>
                </div>
                <ProgressBar 
                  current={departmentalProgress.completed} 
                  total={departmentalProgress.total} 
                  color="bg-white" 
                />
              </div>
            </div>
            <div className="p-6">
              {departmentalModules.length > 0 ? (
                departmentalModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    isUnlocked={isModuleUnlocked(module.id, departmentalModules.map(m => m.id))}
                    allModuleIds={departmentalModules.map(m => m.id)}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-info-circle text-2xl mb-2"></i>
                  <p>No departmental training available yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* HR Training Track */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">HR Training</h3>
                <i className="fas fa-users text-white/80 text-xl"></i>
              </div>
              <p className="text-white/90 text-sm">Policies, compliance, and workplace culture</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2 text-white">
                  <span>Progress</span>
                  <span>{hrProgress.percentage}%</span>
                </div>
                <ProgressBar 
                  current={hrProgress.completed} 
                  total={hrProgress.total} 
                  color="bg-white" 
                />
              </div>
            </div>
            <div className="p-6">
              {hrModules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isUnlocked={isModuleUnlocked(module.id, hrModules.map(m => m.id))}
                  allModuleIds={hrModules.map(m => m.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-certificate text-green-600 text-xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-steampro-dark">Training Certificate</h3>
              <p className="text-green-700 text-sm">
                {allCompleted 
                  ? 'Congratulations! You can now view your certificate.' 
                  : 'Complete all modules to earn your certificate'
                }
              </p>
            </div>
            <button 
              onClick={() => allCompleted && setLocation('/certificate')}
              disabled={!allCompleted}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                allCompleted 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

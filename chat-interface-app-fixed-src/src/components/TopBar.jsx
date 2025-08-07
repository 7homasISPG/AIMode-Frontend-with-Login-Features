import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Grid3X3,
    BookOpen,
    GraduationCap,
    Info,
    Shield,
    Briefcase,
    LogIn,
    MapPin,
    MessageSquare
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const TopBar = ({
    isAuthenticated,
    onToggleThreadSidebar,
    showThreadSidebar
}) => {
    const { user } = useAuth();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [startInLoginMode, setStartInLoginMode] = useState(true);

    const openLogin = () => {
        setStartInLoginMode(true);
        setShowLoginModal(true);
    };

    const openSignup = () => {
        setStartInLoginMode(false);
        setShowLoginModal(true);
    };

    const closeLoginForm = () => {
        setShowLoginModal(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left section with logo and optional sidebar toggle */}
                        <div className="flex items-center space-x-4">
                            {/* Logo */}
                            <div className="flex items-center">
                                <img
                                    src="/First_Drive_logo.png"
                                    alt="First_Drive Centre Logo"
                                    className="h-10 w-auto"
                                />
                            </div>

                            {/* Sidebar toggle for authenticated users */}
                            {isAuthenticated && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={onToggleThreadSidebar}
                                    className="lg:hidden"
                                    title="Toggle chat history"
                                >
                                    <MessageSquare className="h-4 w-4" />
                                </Button>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <nav className={`hidden ${isAuthenticated ? 'lg:flex' : 'md:flex'} items-center space-x-1`}>
                            <Button variant="ghost" size="sm" className="text-blue-600 font-medium hover:bg-blue-50">
                                <Grid3X3 className="h-4 w-4 mr-2" />
                                AI Assistance
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <BookOpen className="h-4 w-4 mr-2" />
                                All Courses
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <GraduationCap className="h-4 w-4 mr-2" />
                                Training Courses
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <Info className="h-4 w-4 mr-2" />
                                About us
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <Shield className="h-4 w-4 mr-2" />
                                Safety & Awareness
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <Briefcase className="h-4 w-4 mr-2" />
                                Careers
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <LogIn className="h-4 w-4 mr-2" />
                                Student Login
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <MapPin className="h-4 w-4 mr-2" />
                                Find Us
                            </Button>
                        </nav>

                        {/* Right section */}
                        <div className="flex items-center space-x-3">
                            {isAuthenticated ? (
                                <UserProfile compact={true} />
                            ) : (
                                <>
                                    <Button
                                        size="sm"
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                                        onClick={openLogin}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-6 hidden sm:inline-flex"
                                        onClick={openSignup}
                                    >
                                        Sign up
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* LoginForm Modal */}
            {showLoginModal && (
                <LoginForm
                    onClose={closeLoginForm}
                    initialMode={startInLoginMode ? 'login' : 'signup'}
                />
            )}
        </>
    );
};

export default TopBar;


import React, { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function HomeNavbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Roles", href: "#roles" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-edubridge-blue to-edubridge-purple rounded-lg p-2 mr-2">
            <span className="text-white font-bold text-xl">AI</span>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-edubridge-blue to-edubridge-purple">
            Saathi
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-edubridge-purple cursor-pointer",
                      scrolled 
                        ? "text-gray-900 dark:text-gray-100" 
                        : "text-gray-700 dark:text-gray-200"
                    )}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            onClick={() => navigate("/auth")}
            className="hidden md:flex bg-edubridge-purple hover:bg-edubridge-purple-secondary text-white"
          >
            Get Started
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4 border-b">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-edubridge-blue to-edubridge-purple rounded-lg p-1 mr-2">
                        <span className="text-white font-bold text-lg">AI</span>
                      </div>
                      <span className="font-bold text-xl">Saathi</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-4 py-6">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          document.querySelector('[data-radix-collection-item]')?.click(); // Close sheet
                          setTimeout(() => scrollToSection(item.href), 300);
                        }}
                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-auto pb-6">
                    <Button
                      onClick={() => navigate("/auth")}
                      className="w-full bg-edubridge-purple hover:bg-edubridge-purple-secondary"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Award,
  Calendar,
  Building,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Rocket,
  Target,
  Menu,
  X,
  Sun,
  Moon,
  Download,
  Github,
} from "lucide-react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  // Calculate dynamic experience
  useEffect(() => {
    const startDate = new Date("2022-12-01"); // Start date from Coderootz
    const calculateExperience = () => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365);
      const months = Math.floor((diffDays % 365) / 30);
      setExperience({ years, months });
    };
    calculateExperience();
    const interval = setInterval(calculateExperience, 86400000); // Update daily
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    bg: isDarkMode ? "bg-slate-900" : "bg-gray-50",
    bgAlt: isDarkMode ? "bg-slate-800" : "bg-white",
    card: isDarkMode ? "bg-slate-800" : "bg-white",
    cardAlt: isDarkMode ? "bg-slate-900" : "bg-gray-50",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textMuted: isDarkMode ? "text-slate-400" : "text-gray-600",
    border: isDarkMode ? "border-slate-700" : "border-gray-200",
    hover: isDarkMode ? "hover:bg-slate-750" : "hover:bg-gray-100",
    button: isDarkMode
      ? "bg-slate-700 hover:bg-slate-600"
      : "bg-gray-800 hover:bg-gray-700",
    progress: isDarkMode ? "bg-slate-700" : "bg-gray-200",
  };

  const skills = [
    { name: "PHP", level: 92, category: "Language" },
    { name: "Laravel", level: 95, category: "Framework" },
    { name: "Node.js", level: 90, category: "Framework" },
    { name: "Express.js", level: 88, category: "Framework" },
    { name: "React", level: 85, category: "Framework" },
    { name: "Next.js", level: 85, category: "Framework" },
    { name: "JavaScript (ES6+)", level: 90, category: "Language" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "SQL", level: 88, category: "Database" },
    { name: "Git", level: 90, category: "DevOps" },
    { name: "AWS (S3)", level: 75, category: "DevOps" },
    { name: "CI/CD Workflows", level: 80, category: "DevOps" },
    { name: "Server Setup (Apache/Nginx)", level: 78, category: "DevOps" },
    { name: "OpenAI APIs", level: 85, category: "AI Tools" },
  ];

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Weballures Technologies",
      location: "Mohali, India",
      period: "Jun 2024 - Present",
      current: true,
      achievements: [
        "Developed AI-powered automation using OpenAI GPT APIs and Node.js, reducing manual processing time by 70%",
        "Built custom AI agents capable of running specific tasks and providing recommendations for marketing campaigns",
        "Integrated AI features for content generation and personalized ad copy with 85% approval rate",
        "Built scalable eCommerce solutions with Laravel and ModernNest, handling 1000+ daily transactions for U.S. luxury lighting market",
        "Integrated Facebook, Instagram, Twitter, and LinkedIn Marketing APIs for automated multi-platform ad campaigns",
        "Implemented automated ad creation workflows with Facebook Business SDK and Google Ads API, reducing campaign deployment time by 60%",
        "Developed server-side applications with Node.js, Express.js, and MongoDB for real-time data processing",
      ],
      metrics: { automation: 70, transactions: 1000, deployment: 60 },
    },
    {
      title: "Full Stack Web Developer",
      company: "Coderootz",
      location: "Shimla, India",
      period: "Dec 2022 - May 2024",
      current: false,
      achievements: [
        "Developed enterprise-level logistics software using Laravel, serving 10,000+ daily active users",
        "Architected 'Holi Health' warehouse management system with role-based access control and AI integrations",
        "Implemented custom AI agents for task automation and recommendations in warehouse health monitoring",
        "Integrated AI for predictive analytics and automated reporting, enhancing decision-making processes",
        "Added microservices to fetch sites and zones of Holisol, improving system scalability",
        "Enhanced application performance by 40% through database optimization and caching",
        "Delivered 15+ new features including inventory tracking and real-time analytics",
        "Integrated third-party APIs and RESTful web services for seamless data flow",
      ],
      metrics: { users: 10000, performance: 40, features: 15 },
    },
  ];

  const projects = [
    {
      title: "Advark",
      description:
        "Fully developed AI-integrated platform using Next.js and Node.js (currently in development phase). Features OpenAI integration for growing customer businesses via social media. Users can link Meta, Snapchat, Facebook, Instagram, and Google accounts to post and boost ads (currently active for Meta and Google ads). Includes custom AI chat agents built with OpenAI for ad creation and posting recommendations. Secure backend powered by MongoDB.",
      url: "https://advarkai.com/",
      tech: [
        "Next.js",
        "Node.js",
        "OpenAI",
        "MongoDB",
        "Meta API",
        "Google Ads API",
      ],
      impact: "AI Marketing Platform",
      status: "In Development",
      users: "N/A",
    },
    {
      title: "Holihealth",
      description:
        "Built on Laravel for Holisol Organization. Developed web version and all mobile APIs with secure systems. This is a healthcare system for warehouses across India, site and zone-based with mapping integration. Features 10+ roles (e.g., Supervisor, Assistant Manager, Security) with different access levels. Admin can add multiple roles with specified permissions. Tasks are frequency-based (daily, monthly, weekly) with mobile and email notifications. Integrated custom AI agents for running specific tasks and recommendations. Added microservices to fetch sites and zones. Serves 50K+ daily active users.",
      url: "https://holihealth.holisollogistics.com/",
      tech: ["Laravel", "AI Integration", "Microservices", "Mobile APIs"],
      impact: "Warehouse Health System",
      status: "Live",
      users: "50K+ Daily",
    },
    {
      title: "Modernnest",
      description:
        "Independently developed luxury lighting eCommerce platform using Laravel 11 for U.S. market with premium brands (Akari, Artemide). Features dual payment gateways (Stripe, PayPal), product catalog, and trackable order management system. Reached 10 Million+ users.",
      url: "https://modernnest.com/",
      tech: ["Laravel", "Stripe", "PayPal", "eCommerce"],
      impact: "eCommerce Platform",
      status: "Live",
      users: "10M+",
    },
    {
      title: "Faddishcms",
      description:
        "Contributed to SaaS-based multi-tenant CMS platform using Laravel, React, and Node.js microservices. Integrated GrapesJS editor and dynamic multi-payment gateways (Stripe, PayPal, WiPay) with Cloudflare R2 for asset management.",
      url: "https://faddishcms.com/",
      tech: ["Laravel", "React", "Node.js", "Cloudflare R2"],
      impact: "SaaS Platform",
      status: "Live",
      users: "500+",
    },
  ];

  const certifications = [
    {
      name: "Problem Solving (Basic)",
      issuedBy: "HackerRank",
      url: "https://www.hackerrank.com/certificates/8c1f8d164b3d",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/8c1f8d164b3d",
    },
    {
      name: "Node (Basic)",
      issuedBy: "HackerRank",
      url: "https://www.hackerrank.com/certificates/2016049fb760",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/2016049fb760",
    },
    {
      name: "Node.js (Intermediate)",
      issuedBy: "HackerRank",
      url: "https://www.hackerrank.com/certificates/fb84d2c6d4f5",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/fb84d2c6d4f5",
    },
    {
      name: "JavaScript",
      issuedBy: "HackerRank",
      url: "https://www.hackerrank.com/certificates/acb4e84cb974",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/acb4e84cb974",
    },
    {
      name: "Rest API (Intermediate)",
      issuedBy: "HackerRank",
      url: "https://www.hackerrank.com/certificates/9b08dfe360c8",
      iframeUrl: "https://www.hackerrank.com/certificates/iframe/9b08dfe360c8",
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      value: "75%",
      label: "Automation Achieved",
      color: "text-emerald-400",
    },
    {
      icon: Users,
      value: "10M+",
      label: "Users Reached",
      color: "text-blue-400",
    },
    {
      icon: Rocket,
      value: "15+",
      label: "Features Delivered",
      color: "text-purple-400",
    },
    {
      icon: Clock,
      value: `${experience.years}y ${experience.months}m`,
      label: "Experience",
      color: "text-orange-400",
    },
  ];

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-300`}>
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${theme.bg}/95 backdrop-blur-sm border-b ${theme.border}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full ${
                  isDarkMode ? "bg-slate-700" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                <Code
                  className={`w-5 h-5 ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <h1 className={`text-lg font-bold ${theme.text}`}>
                  Sahil Chauhan
                </h1>
                <p className={`text-xs ${theme.textMuted}`}>
                  Full Stack Web Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={toggleTheme}
                size="sm"
                variant="ghost"
                className={theme.textMuted}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              <nav className="hidden md:flex items-center gap-6">
                {[
                  "about",
                  "experience",
                  "projects",
                  "skills",
                  "education",
                  "certifications",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`${theme.textMuted} hover:${theme.text} transition-colors duration-300 capitalize`}
                  >
                    {section}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className={theme.button}
                >
                  Contact
                </Button>
              </nav>

              <button
                className={`md:hidden ${theme.textMuted}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className={`md:hidden py-4 border-t ${theme.border}`}>
              <nav className="flex flex-col gap-4">
                {[
                  "about",
                  "experience",
                  "projects",
                  "skills",
                  "education",
                  "certifications",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`${theme.textMuted} hover:${theme.text} transition-colors text-left capitalize`}
                  >
                    {section}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-slate-800 to-slate-900"
              : "bg-gradient-to-br from-gray-100 to-gray-200"
          }`}
        />

        <div
          className={`container mx-auto text-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12 mt-4">
            {/* <div
              className={`w-48 h-48 mx-auto rounded-full overflow-hidden border-4 ${
                isDarkMode ? "border-slate-700" : "border-gray-300"
              } shadow-2xl mb-8 hover:border-slate-600 transition-colors duration-300`}
            >
              <div
                className={`w-full h-full flex items-center justify-center ${
                  isDarkMode ? "bg-slate-700" : "bg-gray-300"
                }`}
              >
                <User
                  className={`w-24 h-24 ${
                    isDarkMode ? "text-slate-500" : "text-gray-500"
                  }`}
                />
              </div>
            </div> */}
            <div
              className={`w-48 h-48 mx-auto rounded-full overflow-hidden border-4 ${
                isDarkMode ? "border-slate-700" : "border-gray-300"
              } shadow-2xl mb-8 hover:border-slate-600 transition-colors duration-300`}
            >
              <Image
                src="/images/profile.jpg"
                alt="Sahil Chauhan"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold ${theme.text} mb-6`}>
              SAHIL CHAUHAN
            </h1>

            <p
              className={`text-xl md:text-2xl ${theme.textMuted} mb-8 max-w-3xl mx-auto`}
            >
              Full Stack Web Developer with {experience.years}+ years of
              experience building scalable web applications and integrating AI
              solutions
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "Laravel Expert",
                "Node Expert",
                "AI Integration",
                "DevOps Enthusiast",
              ].map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className={`text-base px-4 py-2 ${
                    isDarkMode
                      ? "bg-slate-800 text-slate-300 border-slate-600"
                      : "bg-gray-200 text-gray-700 border-gray-300"
                  }`}
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`${theme.card} ${theme.border} ${theme.hover} transition-colors duration-300`}
                >
                  <CardContent className="p-6 text-center">
                    <achievement.icon
                      className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`}
                    />
                    <div className={`text-2xl font-bold ${theme.text} mb-1`}>
                      {achievement.value}
                    </div>
                    <div className={`text-sm ${theme.textMuted}`}>
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className={`${theme.button} px-8 py-3 text-lg font-medium`}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className={`${theme.button} px-8 py-3 text-lg font-medium`}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1HHnBmJF5mVG0cLbJwmCss0MJsndJBrQ-/view",
                    "_blank"
                  )
                }
                size="lg"
                variant="outline"
                className={`${theme.border} ${theme.textMuted} px-8 py-3 text-lg font-medium`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className={`py-20 px-4 ${theme.bgAlt}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4 flex items-center justify-center gap-4`}
            >
              <User className={`w-10 h-10 ${theme.textMuted}`} />
              About Me
            </h2>
            <div
              className={`w-24 h-1 ${
                isDarkMode ? "bg-slate-600" : "bg-gray-300"
              } mx-auto`}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className={`${theme.cardAlt} ${theme.border}`}>
              <CardContent className="p-8">
                <p
                  className={`text-lg ${theme.textMuted} leading-relaxed mb-6`}
                >
                  I'm a passionate Full Stack Web Developer with over{" "}
                  {experience.years} years and {experience.months} months of
                  experience specializing in Laravel, Node.js, and AI-powered
                  solutions. My journey in web development is driven by a
                  commitment to building scalable, efficient, and innovative
                  applications that deliver real business value, with a strong
                  focus on AI integrations.
                </p>
                <p
                  className={`text-lg ${theme.textMuted} leading-relaxed mb-6`}
                >
                  I have a strong foundation in full-stack development, with
                  expertise in PHP, JavaScript, and modern frameworks like
                  Laravel, Next.js, and React. I've optimized application
                  performance by up to 70% through AI automation and database
                  enhancements. Skilled in creating custom AI agents using
                  OpenAI for task automation, recommendations, and integrations.
                  Experienced in microservices architecture for scalable
                  systems. I'm also proficient in DevOps practices like CI/CD
                  workflows and server management with Apache/Nginx.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      {experience.years}+ years
                    </div>
                    <div className={theme.textMuted}>Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      15+
                    </div>
                    <div className={theme.textMuted}>Features Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      10M+
                    </div>
                    <div className={theme.textMuted}>Users Reached</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${theme.bg}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4 flex items-center justify-center gap-4`}
            >
              <Briefcase className={`w-10 h-10 ${theme.textMuted}`} />
              Experience
            </h2>
            <div
              className={`w-24 h-1 ${
                isDarkMode ? "bg-slate-600" : "bg-gray-300"
              } mx-auto`}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div
                  className={`absolute left-0 top-0 w-1 h-full ${
                    isDarkMode ? "bg-slate-600" : "bg-gray-300"
                  } hidden md:block`}
                ></div>
                <Card
                  className={`md:ml-8 ${theme.card} ${theme.border} ${theme.hover} transition-colors duration-300`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className={`text-2xl ${theme.text} mb-2`}>
                          {exp.title}
                        </CardTitle>
                        <CardDescription
                          className={`text-lg ${theme.textMuted} flex items-center gap-2`}
                        >
                          <Building className="w-4 h-4" />
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge
                          variant="outline"
                          className={`${theme.border} ${
                            theme.textMuted
                          } flex items-center gap-2 w-fit ${
                            exp.current
                              ? "bg-emerald-900/20 border-emerald-600 text-emerald-300"
                              : ""
                          }`}
                        >
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </Badge>
                        {exp.current && (
                          <Badge className="bg-emerald-600 text-white">
                            Current Role
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className={`${theme.textMuted} flex items-start gap-3`}
                            >
                              <div
                                className={`w-2 h-2 ${
                                  isDarkMode ? "bg-slate-500" : "bg-gray-400"
                                } rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4
                          className={`text-lg font-semibold ${theme.text} mb-3`}
                        >
                          Key Metrics
                        </h4>
                        {Object.entries(exp.metrics).map(([key, value]) => (
                          <div key={key} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className={`${theme.textMuted} capitalize`}>
                                {key}
                              </span>
                              <span className={`${theme.text} font-semibold`}>
                                {value}
                                {key !== "transactions" &&
                                key !== "users" &&
                                key !== "features"
                                  ? "%"
                                  : ""}
                              </span>
                            </div>
                            <Progress
                              value={
                                typeof value === "number" && value <= 100
                                  ? value
                                  : 100
                              }
                              className={`h-2 ${theme.progress}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${theme.bgAlt}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4 flex items-center justify-center gap-4`}
            >
              <Code className={`w-10 h-10 ${theme.textMuted}`} />
              Featured Projects
            </h2>
            <div
              className={`w-24 h-1 ${
                isDarkMode ? "bg-slate-600" : "bg-gray-300"
              } mx-auto`}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${theme.cardAlt} ${theme.border} ${theme.hover} transition-colors duration-300`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className={`text-2xl ${theme.text}`}>
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge className="bg-emerald-600 text-white">
                        {project.status}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`${theme.border} ${theme.textMuted}`}
                      >
                        {project.users}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription
                    className={`${theme.textMuted} leading-relaxed`}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className={`${
                            isDarkMode
                              ? "bg-slate-800 text-slate-300 border-slate-600"
                              : "bg-gray-200 text-gray-700 border-gray-300"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div
                        className={`flex items-center gap-2 text-sm ${theme.textMuted}`}
                      >
                        <Target className="w-4 h-4" />
                        <span>{project.impact}</span>
                      </div>
                      <Button
                        variant="outline"
                        className={`${theme.border} ${theme.textMuted} ${theme.hover} bg-transparent`}
                        onClick={() => window.open(project.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${theme.bg}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4 flex items-center justify-center gap-4`}
            >
              <Award className={`w-10 h-10 ${theme.textMuted}`} />
              Skills & Technologies
            </h2>
            <div
              className={`w-24 h-1 ${
                isDarkMode ? "bg-slate-600" : "bg-gray-300"
              } mx-auto`}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className={`${theme.card} ${theme.border}`}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`${theme.text} font-medium`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${theme.border} ${theme.textMuted}`}
                          >
                            {skill.category}
                          </Badge>
                          <span className={`${theme.text} font-semibold`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <Progress
                        value={skill.level}
                        className={`h-2 ${theme.progress}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-4 ${theme.bgAlt}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4 flex items-center justify-center gap-4`}
            >
              <GraduationCap className={`w-10 h-10 ${theme.textMuted}`} />
              Education
            </h2>
            <div
              className={`w-24 h-1 ${
                isDarkMode ? "bg-slate-600" : "bg-gray-300"
              } mx-auto`}
            ></div>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <Card className={`${theme.cardAlt} ${theme.border}`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${theme.text}`}>
                  Master of Computer Applications
                </CardTitle>
                <CardDescription className={`text-lg ${theme.textMuted}`}>
                  Himachal Pradesh University • Shimla, India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge
                  variant="outline"
                  className={`${theme.border} ${theme.textMuted}`}
                >
                  Aug 2020 - Sep 2023
                </Badge>
                <p className={`${theme.textMuted} mt-2`}>
                  Score: 79% (Percentage)
                </p>
              </CardContent>
            </Card>
            <Card className={`${theme.cardAlt} ${theme.border}`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${theme.text}`}>
                  Bachelor of Science in Mathematics
                </CardTitle>
                <CardDescription className={`text-lg ${theme.textMuted}`}>
                  Himachal Pradesh University • Baijnath, India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge
                  variant="outline"
                  className={`${theme.border} ${theme.textMuted}`}
                >
                  Jul 2017 - Jul 2020
                </Badge>
                <p className={`${theme.textMuted} mt-2`}>Score: 7.8 (CGPA)</p>
              </CardContent>
            </Card>
            <Card className={`${theme.cardAlt} ${theme.border}`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${theme.text}`}>
                  Secondary Education (Non Medical)
                </CardTitle>
                <CardDescription className={`text-lg ${theme.textMuted}`}>
                  HPBOSE • Baijnath, India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge
                  variant="outline"
                  className={`${theme.border} ${theme.textMuted}`}
                >
                  Apr 2016 - Mar 2017
                </Badge>
                <p className={`${theme.textMuted} mt-2`}>
                  Score: 89% (Percentage)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-4 ${theme.bg}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4 flex items-center justify-center gap-4`}
            >
              <Award className={`w-10 h-10 ${theme.textMuted}`} />
              Certifications
            </h2>
            <div
              className={`w-24 h-1 ${
                isDarkMode ? "bg-slate-600" : "bg-gray-300"
              } mx-auto`}
            ></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className={`${theme.card} ${theme.border}`}>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className={`${theme.text} font-medium`}>
                          {cert.name}
                        </p>
                        <p className={`${theme.textMuted} text-sm`}>
                          {cert.issuedBy}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className={`${theme.border} ${theme.textMuted} ${theme.hover} bg-transparent`}
                          onClick={() => window.open(cert.url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className={`${theme.border} ${theme.textMuted} ${theme.hover} bg-transparent`}
                              onClick={() =>
                                setSelectedCertificate(cert.iframeUrl)
                              }
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent
                            className={`max-w-4xl ${theme.card} ${theme.border}`}
                          >
                            <DialogHeader>
                              <DialogTitle className={theme.text}>
                                {cert.name}
                              </DialogTitle>
                            </DialogHeader>
                            {selectedCertificate && (
                              <iframe
                                src={selectedCertificate}
                                className="w-full h-[600px] border-none"
                                title={cert.name}
                              />
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${theme.bgAlt}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4 flex items-center justify-center gap-4`}
            >
              <Mail className={`w-10 h-10 ${theme.textMuted}`} />
              Get In Touch
            </h2>
            <div
              className={`w-24 h-1 ${
                isDarkMode ? "bg-slate-600" : "bg-gray-300"
              } mx-auto`}
            ></div>
            <p className={`text-xl ${theme.textMuted} mt-6 max-w-2xl mx-auto`}>
              Ready to build innovative web solutions with AI integrations?
              Let's discuss how I can contribute to your next project with my
              full-stack, AI, and DevOps expertise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={`${theme.card} ${theme.border}`}>
                <CardHeader>
                  <CardTitle className={`text-2xl ${theme.text} mb-4`}>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${
                        isDarkMode ? "bg-slate-700" : "bg-gray-200"
                      } rounded-full flex items-center justify-center`}
                    >
                      <Mail
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-slate-300" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p className={theme.textMuted}>Email</p>
                      <p className={theme.text}>sahilchauhancs07@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${
                        isDarkMode ? "bg-slate-700" : "bg-gray-200"
                      } rounded-full flex items-center justify-center`}
                    >
                      <Phone
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-slate-300" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p className={theme.textMuted}>Phone</p>
                      <p className={theme.text}>+91 9816927854</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${
                        isDarkMode ? "bg-slate-700" : "bg-gray-200"
                      } rounded-full flex items-center justify-center`}
                    >
                      <MapPin
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-slate-300" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p className={theme.textMuted}>Location</p>
                      <p className={theme.text}>
                        Lahla Po Kudail Lad Bharol Mandi, Himachal Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${
                        isDarkMode ? "bg-slate-700" : "bg-gray-200"
                      } rounded-full flex items-center justify-center`}
                    >
                      <Linkedin
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-slate-300" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p className={theme.textMuted}>LinkedIn</p>
                      <Button
                        variant="link"
                        className={`${theme.textMuted} hover:${theme.text} p-0 h-auto`}
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/sahil-chauhan-77a86b252",
                            "_blank"
                          )
                        }
                      >
                        Connect with me
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${theme.card} ${theme.border}`}>
                <CardHeader>
                  <CardTitle className={`text-2xl ${theme.text} mb-4`}>
                    Let's Work Together
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
                    I'm excited about new opportunities to create scalable web
                    applications with advanced AI features, custom agents, and
                    microservices. Whether you need a Laravel/Node expert, AI
                    integration specialist, or someone to optimize your
                    development processes, I'd love to collaborate.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div
                      className={`text-center p-4 ${theme.cardAlt} rounded-lg border ${theme.border}`}
                    >
                      <Clock
                        className={`w-6 h-6 ${theme.textMuted} mx-auto mb-2`}
                      />
                      <div className={`text-sm ${theme.textMuted}`}>
                        Response Time
                      </div>
                      <div className={`${theme.text} font-semibold`}>
                        Within 24hrs
                      </div>
                    </div>
                    <div
                      className={`text-center p-4 ${theme.cardAlt} rounded-lg border ${theme.border}`}
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                      <div className={`text-sm ${theme.textMuted}`}>
                        Availability
                      </div>
                      <div className={`${theme.text} font-semibold`}>
                        Open to Work
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      className={`w-full ${theme.button} py-3 text-lg font-medium`}
                      onClick={() =>
                        window.open(
                          "mailto:sahilchauhancs07@gmail.com",
                          "_blank"
                        )
                      }
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      className={`w-full ${theme.border} ${theme.textMuted} ${theme.hover} py-3 text-lg font-medium bg-transparent`}
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/sahil-chauhan-77a86b252",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${theme.card} border-t ${theme.border}`}>
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
              Sahil Chauhan
            </h3>
            <p className={theme.textMuted}>
              Full Stack Web Developer & AI Specialist
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              className={theme.textMuted}
              onClick={() => window.open("mailto:sahilchauhancs07@gmail.com")}
            >
              <Mail className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={theme.textMuted}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sahil-chauhan-77a86b252",
                  "_blank"
                )
              }
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={theme.textMuted}
              onClick={() =>
                window.open("https://github.com/sahilkappu", "_blank")
              }
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={theme.textMuted}
              onClick={() =>
                window.open(
                  "https://www.hackerrank.com/profile/sahilchauhancs07",
                  "_blank"
                )
              }
            >
              <Award className="w-4 h-4" />
            </Button>
          </div>
          <p className={`${theme.textMuted} text-sm`}>
            © 2025 Sahil Chauhan. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

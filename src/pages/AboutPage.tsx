import type React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: "Security First",
      description:
        "Our wallets and data are protected with enterprise-grade bank-level security, multi-factor authentication, and secure wallet integrations.",
      icon: "🔒",
    },
    {
      title: "Accuracy & Precision",
      description:
        "Our AI models are trained on comprehensive market data to provide precise predictions and market trading recommendations.",
      icon: "🎯",
    },
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in crypto trading with cutting-edge AI and machine learning technologies.",
      icon: "💡",
    },
    {
      title: "User-Centric",
      description:
        "Every feature is designed with our users in mind, from intuitive interfaces to personalized AI assistance.",
      icon: "👥",
    },
    {
      title: "Accessibility",
      description:
        "Making professional-grade trading tools available to everyone, regardless of experience or background.",
      icon: "♿",
    },
    {
      title: "Transparency",
      description:
        "Clear insights into our AI decision-making process and complete transparency in all trading operations.",
      icon: "📊",
    },
  ];

  const teamMembers = [
    {
      name: "Team Leader",
      role: "Full-Stack Developer & AI Specialist",
      description:
        "Experienced blockchain developer and AI integration specialist with expertise in algorithmic trading systems.",
      skills: ["React", "Node.js", "Python"],
      avatar: "/professional-developer-avatar.png",
    },
    {
      name: "Frontend Developer",
      role: "UI/UX Designer & React Specialist",
      description:
        "Focused on creating beautiful, intuitive user interfaces and seamless user experiences for all users.",
      skills: ["React", "TypeScript", "Figma"],
      avatar: "/frontend-developer-avatar.jpg",
    },
    {
      name: "Backend Developer",
      role: "Cloud Architecture & API Specialist",
      description:
        "Expert in scalable cloud infrastructure and API development, ensuring robust and secure trading operations.",
      skills: ["Node.js", "Express", "AWS"],
      avatar: "/backend-developer-avatar.jpg",
    },
    {
      name: "Blockchain Developer",
      role: "Smart Contract & Web3 Integration",
      description:
        "Specializes in DeFi integrations and Web3 integrations, bringing decentralized trading capabilities to our platform.",
      skills: ["Solidity", "Ethereum", "Web3"],
      avatar: "/blockchain-developer-avatar.jpg",
    },
    {
      name: "Frontend Developer",
      role: "UI/UX Designer & React Specialist",
      description:
        "Focused on creating beautiful, intuitive user interfaces and seamless user experiences for all users.",
      skills: ["React", "TypeScript", "Figma"],
      avatar: "/ui-designer-avatar.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-400 to-orange-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            About CryptoTrader Pro
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
            We're revolutionizing crypto portfolio management with cutting-edge
            AI technology, making professional trading accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  To democratize cryptocurrency trading by providing AI-powered
                  tools that level the playing field between retail and
                  institutional investors.
                </p>
                <p>
                  We believe that everyone deserves access to sophisticated
                  trading insights and portfolio management tools, regardless of
                  their experience level or capital size.
                </p>
                <p>
                  Our platform combines the power of AI with real-time market
                  data to deliver personalized recommendations that help users
                  make smarter investment decisions.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                    ✓ Built for HD Bank Hackathon 2025
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      AI
                    </div>
                    <div className="text-sm text-gray-600">Powered Trading</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Market Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our development and shape our platform's
              future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developers and crypto enthusiasts building the future
              of portfolio management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-orange-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                CryptoTrader Pro
              </h3>
              <p className="text-gray-600 text-sm">
                AI-powered crypto portfolio management platform designed for
                both beginners and professional traders.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/about" className="hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-4">
                Support
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-orange-500">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

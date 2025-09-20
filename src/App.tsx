import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <HomePage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <Header />
                  <AboutPage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trading"
              element={
                <ProtectedRoute>
                  <div className="flex h-screen bg-gray-50">
                    <Sidebar />
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                          Trading
                        </h1>
                        <p className="text-gray-600">
                          Trading page coming soon...
                        </p>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/banking"
              element={
                <ProtectedRoute>
                  <div className="flex h-screen bg-gray-50">
                    <Sidebar />
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                          Banking
                        </h1>
                        <p className="text-gray-600">
                          Banking page coming soon...
                        </p>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <div className="flex h-screen bg-gray-50">
                    <Sidebar />
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                          Analytics
                        </h1>
                        <p className="text-gray-600">
                          Analytics page coming soon...
                        </p>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/portfolio"
              element={
                <ProtectedRoute>
                  <div className="flex h-screen bg-gray-50">
                    <Sidebar />
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                          Portfolio
                        </h1>
                        <p className="text-gray-600">
                          Portfolio page coming soon...
                        </p>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <div className="flex h-screen bg-gray-50">
                    <Sidebar />
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                          Settings
                        </h1>
                        <p className="text-gray-600">
                          Settings page coming soon...
                        </p>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                      404
                    </h1>
                    <p className="text-gray-600 mb-8">Page not found</p>
                    <Link
                      to="/"
                      className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                      Go back home
                    </Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

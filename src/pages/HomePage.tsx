import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function HomePage() {
  const features = [
    {
      title: "AI Trading Assistant",
      description:
        "Real-time market analysis, risk assessment, and personalized trading recommendations.",
      icon: "🤖",
    },
    {
      title: "Portfolio Analytics",
      description:
        "Advanced charts, performance metrics, and detailed insights about your investments.",
      icon: "📊",
    },
    {
      title: "Multi-Wallet Support",
      description:
        "Connect multiple wallets and exchanges to get a unified view of your entire crypto portfolio.",
      icon: "💼",
    },
    {
      title: "Real-time Trading",
      description:
        "Real-time market analysis, risk assessment, and personalized trading recommendations.",
      icon: "⚡",
    },
    {
      title: "Smart Alerts",
      description:
        "Get notified about market movements, portfolio changes, and trading opportunities.",
      icon: "🔔",
    },
    {
      title: "Market News",
      description:
        "Stay updated with the latest crypto news, trends, and market analysis from trusted sources.",
      icon: "📰",
    },
  ];

  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "49,645 Inr",
      change: "+14.04%",
      changeColor: "text-green-500",
      icon: "₿",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "36,675 Inr",
      change: "+43.04%",
      changeColor: "text-green-500",
      icon: "Ξ",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "1,456 Inr",
      change: "-14.23%",
      changeColor: "text-red-500",
      icon: "◎",
    },
    {
      name: "Doge",
      symbol: "DOGE",
      price: "41,645 Inr",
      change: "+17.06%",
      changeColor: "text-green-500",
      icon: "Ð",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              AI-Powered Crypto Portfolio Management
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Revolutionize your crypto investments with advanced AI insights,
              real-time analytics, and automated trading strategies powered
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Trading Interface Mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
              <div className="flex space-x-4 mb-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Buy
                </Button>
                <Button
                  variant="outline"
                  className="text-gray-300 border-gray-600 bg-transparent"
                >
                  Sell
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded p-4">
                  <div className="text-gray-400 text-sm mb-2">I Will Spend</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">₹</span>
                    <span className="text-white">Rupee</span>
                    <span className="text-gray-400">≈2</span>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <div className="text-gray-400 text-sm mb-2">
                    I Will Receive
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500">₿</span>
                    <span className="text-white">BTC</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Buy Crypto
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Trade Crypto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Smart Trading
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your crypto portfolio with
              AI-powered insights and professional tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Market Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crypto Market Trade And Metrics
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Crypto
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Change
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Chart
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cryptoData.map((crypto, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-orange-600 font-bold">
                              {crypto.icon}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {crypto.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {crypto.symbol}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Change</div>
                        <div
                          className={`text-sm font-medium ${crypto.changeColor}`}
                        >
                          {crypto.change}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Price</div>
                        <div className="text-sm font-medium text-gray-900">
                          {crypto.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-20 h-8 bg-gradient-to-r from-orange-200 to-orange-300 rounded"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">
                          Trade
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 bg-transparent"
            >
              View Other Crypto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

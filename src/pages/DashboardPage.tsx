import Sidebar from "../components/Sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Search, Plus } from "lucide-react";

export default function DashboardPage() {
  const holdings = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      amount: "$1,633.05",
      change: "+2.5%",
      changeColor: "text-green-500",
      icon: "₿",
      color: "bg-orange-500",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      amount: "$1,633.05",
      change: "+2.5%",
      changeColor: "text-green-500",
      icon: "Ξ",
      color: "bg-blue-500",
    },
    {
      name: "Ethereum Classic",
      symbol: "ETC",
      amount: "$1,633.05",
      change: "+2.5%",
      changeColor: "text-green-500",
      icon: "Ξ",
      color: "bg-green-500",
    },
    {
      name: "Solana",
      symbol: "SOL",
      amount: "$1,633.05",
      change: "+2.5%",
      changeColor: "text-green-500",
      icon: "◎",
      color: "bg-purple-500",
    },
    {
      name: "Tether",
      symbol: "USDT",
      amount: "$1,633.05",
      change: "+2.5%",
      changeColor: "text-green-500",
      icon: "₮",
      color: "bg-teal-500",
    },
  ];

  const timeframes = ["Day", "Week", "Month", "Year"];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="px-6 py-7">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">
                Manage your digital assets and traditional investments
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search assets...."
                  className="pl-10 w-64 border-gray-300"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create RWA Contract
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Left Content - 3 columns */}
            <div className="xl:col-span-3 space-y-6">
              {/* Top Holdings */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">
                      Top Holdings
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        Crypto
                      </Button>
                      <Button variant="outline" size="sm">
                        Stocks
                      </Button>
                      <Button variant="outline" size="sm">
                        Gold
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {holdings.map((holding, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardContent className="p-4 text-center">
                          <div
                            className={`w-12 h-12 ${holding.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                          >
                            <span className="text-white text-xl font-bold">
                              {holding.icon}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {holding.name}
                          </div>
                          <div className="text-xs text-gray-500 mb-2">
                            {holding.symbol}
                          </div>
                          <div className="text-lg font-bold text-gray-900 mb-1">
                            {holding.amount}
                          </div>
                          <div
                            className={`text-sm font-medium ${holding.changeColor}`}
                          >
                            {holding.change}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Market Overview Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">
                      Market Overview
                    </CardTitle>
                    <div className="flex space-x-2">
                      {timeframes.map((timeframe) => (
                        <Button
                          key={timeframe}
                          variant={
                            timeframe === "Month" ? "default" : "outline"
                          }
                          size="sm"
                          className={
                            timeframe === "Month"
                              ? "bg-orange-500 hover:bg-orange-600 text-white"
                              : ""
                          }
                        >
                          {timeframe}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Simulated Chart */}
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      <path
                        d="M 20 180 Q 100 120 150 100 T 250 80 T 350 60 T 380 40"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        d="M 20 180 Q 100 120 150 100 T 250 80 T 350 60 T 380 40 L 380 200 L 20 200 Z"
                        fill="url(#gradient)"
                        opacity="0.3"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop
                            offset="100%"
                            stopColor="#3B82F6"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-4 left-4 text-sm text-gray-600">
                      Portfolio Growth: +24.5%
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Quick Exchange */}
            <div className="xl:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      Quick Exchange
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        Buy
                      </Button>
                      <Button variant="outline" size="sm">
                        Sell
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      From
                    </label>
                    <Select defaultValue="btc">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btc">
                          <div className="flex items-center space-x-2">
                            <span className="text-orange-500">₿</span>
                            <span>BTC</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="eth">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-500">Ξ</span>
                            <span>ETH</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      Amount
                    </label>
                    <Input defaultValue="1" className="text-right" />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      To
                    </label>
                    <Select defaultValue="usdt">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usdt">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-500">$</span>
                            <span>USDT</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="usd">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-500">$</span>
                            <span>USD</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-sm text-gray-600 text-center py-2">
                    1 BTC = $ 22,741.01
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Exchange Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

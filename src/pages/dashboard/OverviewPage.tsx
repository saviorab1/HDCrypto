import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OverviewPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Month");
  const [selectedAssetType, setSelectedAssetType] = useState("Crypto");
  const [fromCurrency, setFromCurrency] = useState("btc");
  const [toCurrency, setToCurrency] = useState("usdt");
  const [amount, setAmount] = useState("1");

  // Mock chart data for different timeframes
  const chartData = {
    Day: [
      { time: "00:00", value: 45000 },
      { time: "04:00", value: 46200 },
      { time: "08:00", value: 45800 },
      { time: "12:00", value: 47500 },
      { time: "16:00", value: 48200 },
      { time: "20:00", value: 49100 },
      { time: "24:00", value: 50200 },
    ],
    Week: [
      { time: "Mon", value: 45000 },
      { time: "Tue", value: 46500 },
      { time: "Wed", value: 44800 },
      { time: "Thu", value: 47200 },
      { time: "Fri", value: 48900 },
      { time: "Sat", value: 49500 },
      { time: "Sun", value: 50200 },
    ],
    Month: [
      { time: "Week 1", value: 42000 },
      { time: "Week 2", value: 45000 },
      { time: "Week 3", value: 47500 },
      { time: "Week 4", value: 50200 },
    ],
    Year: [
      { time: "Q1", value: 35000 },
      { time: "Q2", value: 42000 },
      { time: "Q3", value: 47000 },
      { time: "Q4", value: 50200 },
    ],
  };

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
  const assetTypes = ["Crypto", "Stocks", "Gold"];

  const exchangeRates = {
    btc: { usdt: 22741.01, usd: 22741.01 },
    eth: { usdt: 1680.5, usd: 1680.5 },
  };

  const getCurrentRate = () => {
    return exchangeRates[fromCurrency]?.[toCurrency] || 0;
  };

  const calculateExchangeValue = () => {
    const rate = getCurrentRate();
    const numAmount = parseFloat(amount) || 0;
    return (rate * numAmount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="p-6">
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
                  {assetTypes.map((type) => (
                    <Button
                      key={type}
                      variant={
                        selectedAssetType === type ? "default" : "outline"
                      }
                      size="sm"
                      className={
                        selectedAssetType === type
                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                          : ""
                      }
                      onClick={() => setSelectedAssetType(type)}
                    >
                      {type}
                    </Button>
                  ))}
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
                        selectedTimeframe === timeframe ? "default" : "outline"
                      }
                      size="sm"
                      className={
                        selectedTimeframe === timeframe
                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                          : ""
                      }
                      onClick={() => setSelectedTimeframe(timeframe)}
                    >
                      {timeframe}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData[selectedTimeframe]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                    <XAxis dataKey="time" stroke="#6b7280" fontSize={12} />
                    <YAxis
                      stroke="#6b7280"
                      fontSize={12}
                      tickFormatter={(value) =>
                        `$${(value / 1000).toFixed(0)}k`
                      }
                    />
                    <Tooltip
                      formatter={(value) => [
                        `$${value.toLocaleString()}`,
                        "Portfolio Value",
                      ]}
                      labelStyle={{ color: "#374151" }}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      strokeWidth={3}
                      dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "#f97316", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-2 text-sm text-gray-600">
                  Portfolio Growth: +24.5% ({selectedTimeframe.toLowerCase()})
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
                <label className="text-sm text-gray-600 mb-2 block">From</label>
                <Select value={fromCurrency} onValueChange={setFromCurrency}>
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
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-right"
                  type="number"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">To</label>
                <Select value={toCurrency} onValueChange={setToCurrency}>
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

              <div className="text-sm text-gray-600 text-center py-2 bg-gray-50 rounded-lg">
                <div>
                  1 {fromCurrency.toUpperCase()} = $
                  {getCurrentRate().toLocaleString()}
                </div>
                <div className="font-semibold text-gray-900 mt-1">
                  You'll receive: {calculateExchangeValue()}
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Exchange Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

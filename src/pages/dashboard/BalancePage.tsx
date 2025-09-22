import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Filter, Download, TrendingUp, Wallet, PieChart } from "lucide-react";

export default function BalancePage() {
  const portfolioData = {
    totalValue: "$52,847.32",
    change: "+$2,143.67 (+4.23%) 24h",
    yesterday: "$50,703.65",
    allTimeHigh: "$68,924.18",
    availableBalance: "$49,521.78",
    inOrders: "$3,325.54",
    reserved: "$0.00",
    todaysPnL: "+$847.23",
    performance: "+1.63% performance",
    bestPerformer: "ETH (+5.2%)",
    totalTrades: "7",
  };

  const holdings = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      currentPrice: "$3,325.54",
      change: "+$434.77",
      positive: true,
      holdings: "0.403BTC",
      value: "$13,325.54",
      totalValue: "$13,325.54",
      allocation: 35.1,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      currentPrice: "$2,680.00",
      change: "+$752.11",
      positive: true,
      holdings: "5.68 ETH",
      value: "$15,222",
      totalValue: "$13,325.54",
      allocation: 28.8,
    },
    {
      name: "Tether",
      symbol: "USDT",
      currentPrice: "$412.50",
      change: "+$752.11",
      positive: true,
      holdings: "18.94 USDT",
      value: "$15,222",
      totalValue: "$13,325.54",
      allocation: 28.8,
    },
  ];

  return (
    <div className="p-6">
      {/* Portfolio Overview Cards */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Total Portfolio Value
              </h3>
              <Wallet className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900">
                {portfolioData.totalValue}
              </p>
              <p className="text-sm text-green-500">{portfolioData.change}</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Yesterday: {portfolioData.yesterday}</p>
                <p>All Time High: {portfolioData.allTimeHigh}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Available Balance
              </h3>
              <PieChart className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900">
                {portfolioData.availableBalance}
              </p>
              <p className="text-sm text-gray-500">Ready for trading</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>In Orders: {portfolioData.inOrders}</p>
                <p>Reserved: {portfolioData.reserved}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Today's P&L</h3>
              <TrendingUp className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-green-500">
                {portfolioData.todaysPnL}
              </p>
              <p className="text-sm text-green-500">
                {portfolioData.performance}
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Best Performer: {portfolioData.bestPerformer}</p>
                <p>Total Trades: {portfolioData.totalTrades}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Asset Holdings */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-gray-900">
              Asset Holdings
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                All Assets
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-500">
                    Asset
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-500">
                    Current Price
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-500">
                    Holdings
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-500">
                    Total Value
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-500">
                    24h Change
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-500">
                    Allocation
                  </th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((asset, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {asset.symbol.slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {asset.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {asset.symbol}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-gray-900">
                        {asset.currentPrice}
                      </p>
                      <p className="text-sm text-green-500">+6.3%</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-gray-900">
                        {asset.holdings}
                      </p>
                      <p className="text-sm text-gray-500">≈ {asset.value}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-gray-900">
                        {asset.totalValue}
                      </p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-green-500">
                        {asset.change}
                      </p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 bg-orange-500 rounded-full"
                            style={{ width: `${asset.allocation}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {asset.allocation}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

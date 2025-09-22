import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Search,
  Clock,
  TrendingUp,
  ExternalLink,
  Filter,
} from "lucide-react";

export default function NewsPage() {
  const newsArticles = [
    {
      title:
        "Bitcoin Reaches New All-Time High as Institutional Adoption Accelerates",
      summary:
        "Major corporations continue to add Bitcoin to their treasury reserves, driving unprecedented demand and price discovery.",
      source: "CryptoDaily",
      time: "2 hours ago",
      category: "Market Analysis",
      impact: "Bullish",
      readTime: "3 min read",
    },
    {
      title: "Ethereum 2.0 Staking Rewards Hit Record Levels",
      summary:
        "Network upgrades and increased validator participation push staking yields to new highs, attracting more institutional investors.",
      source: "DeFi Pulse",
      time: "4 hours ago",
      category: "Technology",
      impact: "Bullish",
      readTime: "5 min read",
    },
    {
      title: "Regulatory Clarity Emerges as SEC Provides New Crypto Guidelines",
      summary:
        "New regulatory framework provides clearer guidelines for crypto operations, reducing uncertainty in the market.",
      source: "Regulatory Watch",
      time: "6 hours ago",
      category: "Regulation",
      impact: "Neutral",
      readTime: "4 min read",
    },
    {
      title: "DeFi Protocol Launches Revolutionary Yield Farming Strategy",
      summary:
        "New automated market making protocol promises higher yields with reduced impermanent loss risk.",
      source: "DeFi Times",
      time: "8 hours ago",
      category: "DeFi",
      impact: "Bullish",
      readTime: "6 min read",
    },
    {
      title: "Central Bank Digital Currencies Gain Momentum Globally",
      summary:
        "Multiple countries announce CBDC pilot programs, potentially reshaping the digital currency landscape.",
      source: "Global Finance",
      time: "12 hours ago",
      category: "CBDC",
      impact: "Neutral",
      readTime: "7 min read",
    },
  ];

  const marketInsights = [
    {
      title: "Market Sentiment Analysis",
      value: "Bullish",
      change: "+15%",
      description: "Based on social media and trading volume",
    },
    {
      title: "Fear & Greed Index",
      value: "72",
      change: "+8",
      description: "Greed territory - exercise caution",
    },
    {
      title: "Active Addresses",
      value: "1.2M",
      change: "+5.2%",
      description: "24h network activity",
    },
    {
      title: "Institutional Flow",
      value: "$2.1B",
      change: "+12%",
      description: "Weekly net inflows",
    },
  ];

  const trendingTopics = [
    { topic: "Bitcoin ETF", mentions: "12.5K", trend: "up" },
    { topic: "Ethereum Merge", mentions: "8.2K", trend: "up" },
    { topic: "DeFi Yields", mentions: "6.1K", trend: "down" },
    { topic: "NFT Market", mentions: "4.8K", trend: "up" },
    { topic: "Layer 2", mentions: "3.9K", trend: "up" },
  ];

  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main News Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filters */}
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search news..." className="pl-10" />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Latest
              </Button>
            </div>
          </div>

          {/* News Articles */}
          <div className="space-y-4">
            {newsArticles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <Badge
                        variant={
                          article.impact === "Bullish" ? "default" : "secondary"
                        }
                        className={`text-xs ${
                          article.impact === "Bullish"
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : article.impact === "Bearish"
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-gray-500 text-white hover:bg-gray-600"
                        }`}
                      >
                        {article.impact}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">{article.source}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.time}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Market Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Market Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {marketInsights.map((insight, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-sm text-gray-900">
                      {insight.title}
                    </h4>
                    <span className="text-green-500 text-xs font-semibold">
                      {insight.change}
                    </span>
                  </div>
                  <p className="font-bold text-lg mb-1 text-gray-900">
                    {insight.value}
                  </p>
                  <p className="text-xs text-gray-500">{insight.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Trending Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <TrendingUp
                      className={`h-4 w-4 ${
                        topic.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}
                    />
                    <span className="font-medium text-sm text-gray-900">
                      {topic.topic}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {topic.mentions}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Market Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Total Market Cap</span>
                <span className="font-semibold text-sm text-gray-900">
                  $2.1T
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">24h Volume</span>
                <span className="font-semibold text-sm text-gray-900">
                  $89.2B
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">BTC Dominance</span>
                <span className="font-semibold text-sm text-gray-900">
                  52.4%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Active Coins</span>
                <span className="font-semibold text-sm text-gray-900">
                  2,847
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

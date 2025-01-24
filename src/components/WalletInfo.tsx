import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WalletInfo() {
  const mockAddress = "0x1234...5678"
  const mockBalance = "1.5 ETH"
  const mockNetwork = "Ethereum Mainnet"

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold animate-gradient-text">Wallet Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Address:</span>
            <span className="font-mono text-white">{mockAddress}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Balance:</span>
            <span className="text-white">{mockBalance}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Network:</span>
            <Badge variant="outline" className="bg-primary/20 text-primary">
              {mockNetwork}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


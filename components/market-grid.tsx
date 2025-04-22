"use client"
import { ExternalLink, Bookmark } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for markets
const markets = [
  {
    id: 1,
    title: "Quem será o próximo Papa?",
    icon: "🇻🇦",
    outcomes: [
      { name: "Pietro Parolin", percentage: 36, votes: { yes: true, no: true } },
      { name: "Luis Antonio Tagle", percentage: 30, votes: { yes: true, no: true } },
      { name: "Péter Erdő", percentage: 7, votes: { yes: true, no: true } },
    ],
    volume: "Vol. $3m",
  },
  {
    id: 2,
    title: "De qual continente será o próximo Papa?",
    icon: "🌍",
    outcomes: [
      { name: "Europa", percentage: 55, votes: { yes: true, no: true } },
      { name: "Ásia", percentage: 30, votes: { yes: true, no: true } },
      { name: "África", percentage: 12, votes: { yes: true, no: true } },
    ],
    volume: "Vol. $718k",
  },
  {
    id: 3,
    title: "Próximo Primeiro Ministro do Canadá após a eleição?",
    icon: "🇨🇦",
    outcomes: [
      { name: "Mark Carney", percentage: 76, votes: { yes: true, no: true } },
      { name: "Pierre Poilievre", percentage: 23, votes: { yes: true, no: true } },
    ],
    volume: "Vol. $55m",
    action: { buy: true, label: "Comprar Sim", price: "$" },
  },
  {
    id: 4,
    title: "Recessão nos EUA em 2025?",
    icon: "🇺🇸",
    chance: 57,
    volume: "Vol. $3m",
  },
  {
    id: 5,
    title: "Próximo presidente da Coreia do Sul?",
    icon: "🇰🇷",
    outcomes: [
      { name: "Lee Jae-myung", percentage: 79, votes: { yes: true, no: true } },
      { name: "Hong Joon-pyo", percentage: 6, votes: { yes: true, no: true } },
      { name: "Lee Jun-seok", percentage: 4, votes: { yes: true, no: true } },
    ],
    volume: "Vol. $28m",
  },
  {
    id: 6,
    title: "Pistons vs. Knicks",
    icon: "🏀",
    chance: 29,
    label: "Pistons",
    action: { buy: true, label: "Comprar Pistons", secondary: "Comprar Knicks" },
    volume: "Vol. $139k",
    daily: true,
  },
  {
    id: 7,
    title: "Timberwolves vs. Lakers",
    icon: "🏀",
    chance: 32,
    label: "Twolves",
    action: { buy: true, label: "Comprar Twolves", secondary: "Comprar Lakers" },
    volume: "Vol. $74k",
    daily: true,
  },
  {
    id: 8,
    title: "Decisão do Fed em Maio?",
    icon: "💵",
    outcomes: [
      { name: "Redução de 50+ bps", percentage: 1, votes: { yes: true, no: true } },
      { name: "Redução de 25 bps", percentage: 10, votes: { yes: true, no: true } },
      { name: "Sem alteração", percentage: 89, votes: { yes: true, no: true } },
    ],
    volume: "Vol. $25m",
    monthly: true,
  },
]

export function MarketGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {markets.map((market) => (
        <MarketCard key={market.id} market={market} />
      ))}
    </div>
  )
}

function MarketCard({ market }: { market: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">{market.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm line-clamp-2">{market.title}</h3>

              {market.chance && (
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-semibold">{market.chance}%</span>
                    <span className="text-xs text-muted-foreground">chance</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {market.outcomes && (
            <div className="mt-3 space-y-2">
              {market.outcomes.map((outcome: any, index: number) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex-1 truncate">{outcome.name}</div>
                  <div className="flex items-center gap-2 min-w-[100px]">
                    <span className="font-semibold w-8 text-right">{outcome.percentage}%</span>
                    {outcome.votes && (
                      <div className="flex gap-1">
                        <Badge variant={outcome.votes.yes ? "default" : "outline"} className="h-6 px-1.5">
                          Sim
                        </Badge>
                        <Badge variant={outcome.votes.no ? "destructive" : "outline"} className="h-6 px-1.5">
                          Não
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {market.action && (
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600">
                {market.action.label} {market.action.price}
              </Button>
              {market.action.secondary && (
                <Button size="sm" variant="destructive" className="flex-1">
                  {market.action.secondary}
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t px-4 py-2 text-xs text-muted-foreground">
          <div>{market.volume}</div>
          <div className="flex items-center gap-2">
            {market.daily && <span>Diário</span>}
            {market.monthly && <span>Mensal</span>}
            <div className="flex gap-1">
              <button className="p-1 hover:text-foreground">
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
              <button className="p-1 hover:text-foreground">
                <Bookmark className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

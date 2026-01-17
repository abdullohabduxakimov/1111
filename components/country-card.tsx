interface CountryCardProps {
  name: string
  flag: string
  delay: number
}

export default function CountryCard({ name, flag, delay }: CountryCardProps) {
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-400/20">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="text-3xl md:text-4xl">{flag}</div>
          <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors line-clamp-2">
            {name}
          </p>
        </div>
      </div>
    </div>
  )
}

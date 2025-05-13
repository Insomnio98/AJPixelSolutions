export function Card({ children, className = "" }) { return <div className={`rounded-2xl p-6 shadow-md bg-card text-white border border-border ${className}`}>{children}</div>; }
export function CardContent({ children, className = "" }) { return <div className={`space-y-2 ${className}`}>{children}</div>; }

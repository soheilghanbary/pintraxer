export const DashboardHeader = ({ title = "", description = "" }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold leading-loose">{title}</h1>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  )
}

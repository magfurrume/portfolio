export function getGreeting(timeZone: string): string {
  try {
    const now = new Date()
    const localTime = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      hour12: true,
    }).format(now)

    const hour = parseInt(localTime.replace(/[^0-9]/g, ""), 10)

    if (hour >= 5 && hour < 12) return "Good Morning"
    if (hour >= 12 && hour < 17) return "Good Afternoon"
    if (hour >= 17 && hour < 22) return "Good Evening"
    return "Hello Night Owl"
  } catch {
    return "Hello"
  }
}

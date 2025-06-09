export function fancyHello(user) {
  const name = user?.name ?? "Guest";
  return `👋 Hello, ${name}`;
}

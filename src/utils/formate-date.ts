export function formatDateAgo(releaseDate: string) {
  const difference =
    new Date().getTime() - new Date(releaseDate ?? "").getTime();
  return Math.floor(difference / (1000 * 60 * 60 * 24));
}

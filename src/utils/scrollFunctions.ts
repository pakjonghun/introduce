export function getCurPage(scrollTop: number, clientHeight: number) {
  switch (true) {
    case scrollTop <= 0:
      return 1;
    case 0 < scrollTop && scrollTop <= clientHeight:
      return 2;
    case clientHeight < scrollTop && scrollTop <= clientHeight * 2:
      return 3;
    case clientHeight * 2 < scrollTop && scrollTop <= clientHeight * 3:
      return 4;
    default:
      throw new Error("introduce curpagestate error");
  }
}
interface GetCurrentPageProps {
  scrollTop: number;
  clientHeight: number;
  scrollDirection: string | null;
}

export function getCurrentPage({
  scrollTop,
  clientHeight,
  scrollDirection,
}: GetCurrentPageProps) {
  const distanceRate = 1 / 3;
  const distance = clientHeight * distanceRate;
  console.log(scrollDirection);
  if (scrollDirection === "down") {
    switch (true) {
      case scrollTop <= distance:
        return 1;
      case distance < scrollTop && scrollTop <= distance + clientHeight:
        return 2;
      case distance + clientHeight < scrollTop &&
        scrollTop <= distance + 2 * clientHeight:
        return 3;
      case distance + 2 * clientHeight < scrollTop &&
        scrollTop <= distance + 3 * clientHeight:
        return 4;
      case distance + 3 * clientHeight < scrollTop:
        return 4;
      default:
        throw new Error("introduce curpagestate error");
    }
  }

  if (scrollDirection === "up") {
    switch (true) {
      case 0 <= scrollTop && scrollTop <= clientHeight - distance:
        return 1;
      case clientHeight - distance <= scrollTop &&
        scrollTop <= clientHeight - distance:
        return 1;
      case clientHeight - distance < scrollTop &&
        scrollTop <= 2 * clientHeight - distance:
        return 2;
      case 2 * clientHeight - distance < scrollTop &&
        scrollTop <= 3 * clientHeight - distance:
        return 3;
      case 4 * clientHeight - distance < scrollTop:
        return 4;
      default:
        throw new Error("introduce curpagestate error");
    }
  }
}

function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
  const toDayOfYear = (date: string): number => {
    const [month, day] = date.split("-").map(Number);
    const daysBeforeMonth = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    return daysBeforeMonth[month] + day;
  };

  const start = Math.max(toDayOfYear(arriveAlice), toDayOfYear(arriveBob));
  const end = Math.min(toDayOfYear(leaveAlice), toDayOfYear(leaveBob));

  if (start > end) {
    return 0;
  }

  return end - start + 1;
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); // 3
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31")); // 0
console.log(countDaysTogether("01-20", "04-10", "01-01", "08-30")); // 81

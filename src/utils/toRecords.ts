export const toRecords = <T extends { id: string }>(items: T[]) => {
  const records: Record<string, T> = {};
  for (const item of items) {
    records[item.id] = item;
  }
  return records;
};

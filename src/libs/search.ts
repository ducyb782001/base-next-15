export function search(searchInput: string, list = []) {
  if (!searchInput) {
    return list;
  }
  return list.filter(
    (item) =>
      item?.name?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item?.username?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item?.title?.toLowerCase().includes(searchInput.toLowerCase())
  );
}

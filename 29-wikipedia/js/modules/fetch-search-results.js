async function fetchSearchResults(value) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${value}`;
  const response = await fetch(url);
  const data = await response.json();
  const query = data.query;
  const results = query.search;

  return results;
}

export default fetchSearchResults;

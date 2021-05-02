const [data, setData] = useState([...stateProperties]);
const [fullData, setFullData] = useState([]);
const makeRemoteRequest = () => {
  const [page, seed] = useState();
  const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
  // this.setState({ loading: true });

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setData(res.results);
      setFullData(res.results);
      // this.setState({
      //   data: page === 1 ? res.results : [...state.data, ...res.results],
      //   error: res.error || null,
      //   loading: false,

      //   // ---- ADD THIS ----
      //   fullData: res.results,
      // });
    })
    .catch((error) => {
      console.warn(error);
    });
};
// const data = stateProperties;

// Search state
// const [query, setQuery] = useState("");
// const [fullData, setFullData] = useState([...stateProperties]);
console.log(data);
const handleSearch = (text) => {
  const formattedQuery = text.toLowerCase();
  const data = filter(fullData, (user) => {
    return this.contains(user, formattedQuery);
  });
  this.setState({ data, query: text });
};
const contains = ({ name, email }, query) => {
  const { first, last } = name;
  if (first.includes(query) || last.includes(query) || email.includes(query)) {
    return true;
  }
  return false;
};

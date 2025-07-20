import "./styles.css";
import useSWR from "swr";

export default function Swr() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isValidating } = useSWR(
    "https://restcountries.com/v3.1/all?fields=name,flags",
    fetcher
  );
  if (error) return <div>Error loading data</div>;
  if (isValidating || !data) return <div>Loading...</div>;
  return (
    <ul>
      {data.map((country) => (
        <li key={country.name.common}>
          <img src={country.flags.png} alt={country.name.common} width={20} />
          {country.name.common}
        </li>
      ))}
    </ul>
  );
}

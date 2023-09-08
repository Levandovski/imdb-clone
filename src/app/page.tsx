import Results from "@/components/Results";

const API_SECREAT = process.env.API_SECREAT;

interface ISearchParams {
  searchParams: any;
}

export default async function Home({ searchParams }: ISearchParams) {
  const genre = searchParams.genre || 'fetchTrending';

  console.log("API_KEY", API_SECREAT)
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?language=en-US&page=1`,
    {
      next: { revalidate: 10000 }, method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_SECREAT}`
      }
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const results = data.results;
  console.log(results);
  return (
    <div><Results results={results} /></div>
  )
}

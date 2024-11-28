'use client';
import Image from 'next/image';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import { type DataStructure, type Character } from '@/types/types';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Spinner } from '@/components/ui/spinner';
import SearchBar from '@/components/search-bar';
import { useState, Suspense, useEffect, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';



function CharacterList() {
  //
  const [characters, setCharacters] = useState<Character[]>([]);
  const [nameFilter, setNameFilter] = useState('rick'); // start with 'rick'
  const [searchFilter, setSearchFilter] = useState(''); // no search filter


  //   // Fetch user settings from an API or local storage
  //   const fetchUserSettings = async () => {
  // Replace with your API call
  // const response = await fetch('/api / user - settings');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value)
  }

  const queryResult: DataStructure = useSuspenseQuery(SEARCH_QUERY, {
    variables: { name: nameFilter },
  });


  // Set characters from fetched data
  useEffect(() => {
    setCharacters(queryResult.data.characters.results)
  }, [nameFilter]);


  // Filter logic
  useMemo(async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); // 0.5s delay waiting for typing to stop
    const filteredResults = queryResult.data.characters.results.filter(value => value.name.toLowerCase().includes(searchFilter.toLowerCase()))
    setCharacters(filteredResults)
  }, [searchFilter]);

  //
  if (!characters) {
    return <div>No data</div>;
  }

  return (
    <div className='grid' >
      {/* Pre-made search filters */}
      < Tabs defaultValue='rick' className='w-full' >
        <TabsList>
          <TabsTrigger
            value='rick'
            onClick={() => setNameFilter((name) => 'rick')}
          >
            Rick
          </TabsTrigger>
          <TabsTrigger
            value='morty'
            onClick={() => setNameFilter((name) => 'morty')}
          >
            Morty
          </TabsTrigger>
          <TabsTrigger
            value='guy'
            onClick={() => setNameFilter((name) => 'guy')}
          >
            Guy
          </TabsTrigger>
          <TabsTrigger
            value='girl'
            onClick={() => setNameFilter((name) => 'girl')}
          >
            Girl
          </TabsTrigger>
          <TabsTrigger
            value='alien'
            onClick={() => setNameFilter((name) => 'alien')}
          >
            Alien
          </TabsTrigger>
          <SearchBar nameFilter={nameFilter} searchTerm={searchFilter} onSearchChange={handleSearchChange} />
        </TabsList>
      </Tabs >
      <Suspense fallback={<Spinner />}>
        <div className='mt-5 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {
            characters.map(
              (character, i) => {
                return (
                  <CharacterCard key={character.id} {...character} />
                );
              })
          }
        </div>
      </Suspense>
    </div >
  );
}


function CharacterCard(character: Character) {
  //
  const { id, name, image, status }: Character = character;

  return ( // In NextJS we can't pass state via Link, but we can do this.
    // Pass data via query and "as" will keep path same in URL
    <Link
      key={id}
      href={`/${id}?data=${character}`
      }
      as={`/${id}`}
    >
      <Card className='overflow-hidden'>
        <img
          src={image}
          alt={`Card image`}
          className='h-48 w-full object-cover'
        />
        <CardHeader className='p-4'>
          <p className='text-sm text-gray-600'>{name}</p>
        </CardHeader>
        <CardContent className='p-4'>
          <p className='text-sm text-gray-600'>
            Living status: {status}
          </p>
        </CardContent>
      </Card>
    </Link>);
}



const SEARCH_QUERY = gql`
  query Characters($name: String!) {
    characters(page: 1, filter: { name: $name }) {
      results {
        id
        name
        image
        status
      }
    }
  }

  # query {
  #   search(
  #     input: {radius: 40, metric: KM, lat: 41.6461, lon: 41.6405 }
  #     first: 20
  #   ) {
  #totalCount
  # pageInfo {
  #   hasNextPage
  #   startCursor
  #   endCursor
  # }
  # edges{
  #   cursor
  #   node {
  #    id
  #    name
  #    description
  #    lat
  #    lon
  #    image
  #    timeCreated

  #   }
  #   }
  #   }
  # }
`;

export default function Home() {
  /// const data = await queryRSC();

  //     setData(queryResult);
  //   };

  //   fetchUserSettings();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>
  // }


  // if (error) {
  //   console.error(error)
  //   return <div>{error.toString()}</div>
  // }

  /// const {tasks} = data
  //     <main className='flex min-h-screen flex-col justify-center p-214 bg-neutral-100'>


  https: return (
    <main className='container mx-auto max-w-screen-lg flex-grow py-8'>
      <div className='grid gap-6'>

        <h1 className='text-5xl font-bold'>Characters</h1>
        <h4 className='-mt-5 mb-5 text-xl font-medium text-slate-400'>
          from{' '}
          <Link
            className='text-blue-500'
            href='https://rickandmortyapi.com/graphql'
            target='_blank'
          >
            rickandmortyapi.com
          </Link>
        </h4>
        {/* <p className='text-xl font-medium text-neutral-800 dark:text-neutral-200'>
          {data.totalCount ? data.totalCount : 0}
        </p> */}
      </div>
      <CharacterList />

      {/* {data.characters.results.map(({ id, name, image }) => (
        <div
          key={id}
          className='flex flex-col items-center justify-center space-y-4 p-4 dark:bg-neutral-900 bg-neutral-100 border border-neutral-200 dark:border-neutral-800 rounded-md shadow'>
          <Image
            className='rounded-50 w-32 h-32'
            src={image}
            alt={name}
            width={128}
            height={128}
          />
        </div>
      ))} */}
    </main>
  );
}

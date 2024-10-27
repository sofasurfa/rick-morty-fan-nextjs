'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from "next/link"
import { gql, useQuery } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { Heart, HeartIcon, Star } from "lucide-react"
import { useParams } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux'
// Local
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toggleLikedUser } from '@/lib/providers/redux-store'
import type { RootState } from '@/lib/providers/redux-store'
import { type DataStructure } from '@/types/types'
import { Character } from '@/types/types'




// function List(queryResult: DataStructure) {
//   return (
//     <div className='grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3'>
//       {/* {Array.from({ length: 12 }).map((_, index) => ( */}
//       {queryResult.data.characters.results.map(({ id, name, image, status }) => (
//         <Link href={'/' + id}>
//           <Card key={id} className='overflow-hidden'>
//             <img
//               src={image}
//               alt={`Card image`}
//               className='h-48 w-full object-cover'
//             />
//             <CardHeader className='p-4'>
//               <p className='text-sm text-gray-600'>
//                 {name}
//               </p>
//             </CardHeader>
//             <CardContent className='p-4'>
//               <p className='text-sm text-gray-600'>
//                 Living status: {status}
//               </p>
//             </CardContent>
//           </Card>
//         </Link>
//       ))}
//     </div>

//   );
// }


// Note: GetCharacter is just a query name to pass the variable, it can be anything
// character(id: $userId) { .. } is what's important
const SEARCH_QUERY = gql`
  query GetCharacter($userId: ID!){ 
        character(id: $userId) {
            id
            name
            image,
            status,
            species,
            gender
        }
      }`;



export default function CharacterPage() {

  // use the dynamic slug [userId] (look at folder name)
  const router = useParams();
  const { userId } = router;



  // Data fetch
  const { data }: DataStructure = useSuspenseQuery(SEARCH_QUERY, {
    variables: { userId }
  });

  // Like button logic

  const dispatch = useDispatch()
  const likedUsers = useSelector((state: RootState) => state.likedUsers.likedUsers)
  // const [likedCharacter, setLikedCharacter] = useState<Character | null>(null)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const character = likedUsers[userId.toString()]
    setIsLiked(!!character)
  }, [likedUsers, userId])


  const handleLikeToggle = () => {
    const newLikedUser: Character = { ...data.character };
    dispatch(toggleLikedUser(newLikedUser))
  }

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  https://rickandmortyapi.com/graphql

  // if (error) {
  //   console.error(error)
  //   return <div>{error.toString()}</div>
  // }

  if (!data) {
    return <div>No data</div>
  }

  return (
    <main className='container mx-auto max-w-screen-lg flex-grow py-8'>
      <div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-square">
            <Image
              src={data.character.image}
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{data.character.name}</h1>
              {/* <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-gray-300 fill-current" />
                <span className="ml-2 text-sm text-gray-600">(4.0) 120 reviews</span>
              </div> */}
              <p className="font-semibold mb-2 text-gray-600">👋 Status: {data.character.status}</p>
              <p className="font-semibold mb-2 text-gray-600">👽 Species: {data.character.species}</p>
              <p className="font-semibold mb-2 text-gray-600">⚤ Gender: {data.character.gender}</p>
              <p className="text-gray-600 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id hendrerit ex. Phasellus bibendum sapien lectus, tempor lobortis nunc hendrerit ac. Integer a nisi vel tortor sollicitudin cursus vel nec velit. Mauris vitae odio in tellus condimentum mattis.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* <Button size="lg" className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button> */}
              <Button size="lg" variant="outline" onClick={handleLikeToggle}>
                <Heart {...(isLiked ? { fill: 'red', color: 'red' } : {})} className="w-5 h-5" />  {isLiked ? 'Unlike' : 'Like'} "{data.character.name}"
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="w-full">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id hendrerit ex. Phasellus bibendum sapien lectus, tempor lobortis nunc hendrerit ac. Integer a nisi vel tortor sollicitudin cursus vel nec velit. Mauris vitae odio in tellus condimentum mattis. Sed vulputate erat sit amet turpis molestie volutpat. Mauris tellus ipsum, consectetur eget vehicula vel, ultricies eget velit. Aliquam varius velit in blandit sodales. Vestibulum in ligula molestie, dignissim felis at, feugiat ex. Cras sit amet turpis blandit, gravida sapien ac, dignissim augue. Nulla sagittis vehicula odio non tristique.
            </p>
          </TabsContent>
          <TabsContent value="specifications" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Fan Reviews</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center mb-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-2 text-sm font-medium">Review title</span>
                </div>
                <p className="text-sm text-gray-600">
                  Some review here...
                </p>
              </div>
              <div className="border-b pb-4">
                <div className="flex items-center mb-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-gray-300 fill-current" />
                  <span className="ml-2 text-sm font-medium">Review title</span>
                </div>
                <p className="text-sm text-gray-600">
                  Another review..
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}


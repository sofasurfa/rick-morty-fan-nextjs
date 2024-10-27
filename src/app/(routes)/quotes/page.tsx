'use client';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '@/src/components/ui/responsive-modal';

export default function Quotes() {
  /// const data = await queryRSC();

  // const { loading, error, data } = useQuery(SEARCH_QUERY, { errorPolicy: "all" });

  // if (loading) {
  //     return <div>Loading...</div>
  // }

  // if (error) {
  //     console.error(error)
  //     return <div>{error.toString()}</div>
  // }

  // if (!data) {
  //     return <div>No data</div>
  // }

  /// const { tasks } = data
  //     <main className='flex min-h-screen flex-col justify-center p-214 bg-neutral-100'>

  type SideArgs = 'bottom';

  const ModalButton = ({ side }: { side: SideArgs }) => {
    return (
      <ResponsiveModal>
        <ResponsiveModalTrigger asChild>
          <Button color='blue!' variant='default'>
            🥚 Easter egg
          </Button>
        </ResponsiveModalTrigger>

        <ResponsiveModalContent side={side}>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle>
              You have found the 🥚!
            </ResponsiveModalTitle>
            <ResponsiveModalDescription>
              This dialog will popup from {side} on mobile, but will be centered on desktop - try to resize your window.
              <img
                alt='Where are we?'
                src='https://media.giphy.com/media/jS1neGDOkaHmn36A6D/giphy.gif?cid=790b7611enmk4977cltezak7d8eufu6at0z4mdfn4c51ypq1&ep=v1_gifs_search&rid=giphy.gif&ct=g'
              />
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
        </ResponsiveModalContent>
      </ResponsiveModal>
    );
  };

  return (
    <main className='container mx-auto max-w-screen-lg flex-grow py-8'>
      <div className='grid gap-6'>
        <div className='flex'>
          <div className='w-1/2'>
            <h4 className='text-4xl font-bold'>Quotes</h4>
            <h4 className='text-1xl font-medium text-slate-400'>
              From the wise
            </h4>
          </div>
          <div className='flex w-1/2 justify-end'>
            <ModalButton side='bottom' />
          </div>
        </div>

        <blockquote className='mt-6 border-l-2 pl-6 italic'>
          To live is to risk it all, otherwise you’re just an inert chunk of
          randomly assembled molecules drifting wherever the universe blows you.
          … Oh, I’m sorry, Jerry, I didn’t see you there, how much of that did
          you hear?
        </blockquote>
        <blockquote className='mt-6 border-l-2 pl-6 italic'>
          Parents are just kids raising kids
        </blockquote>
        <blockquote className='mt-6 border-l-2 pl-6 italic'>
          You know what shy pooping is, Rick? It's a pointless bid for control
        </blockquote>
        <blockquote className='mt-6 border-l-2 pl-6 italic'>
          You're like Hitler, but even Hitler cared about Germany or something
        </blockquote>
      </div>

      {/* {data.map(({ totalCount }) => (
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
              <p className='text-xl font-medium dark:text-neutral-200 text-neutral-800'>
                {totalCount}
              </p>
            </div>
          ))} */}
    </main>
  );
}

'use client';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
// Local
import type { RootState } from '@/lib/providers/redux-store';

export default function LikedUsersList() {
    const likedUsers = useSelector(
        (state: RootState) => state.likedUsers.likedUsers
    );

    return (
        <main className='container mx-auto max-w-screen-lg flex-grow py-8'>
            <div className=''>
                {Object.keys(likedUsers).length > 0 ? (
                    <div>
                        <h3 className='text-lg font-semibold'>Liked Users:</h3>
                        <div className='mt-5 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                            {Object.values(likedUsers).map((character) => (
                                <Link key={character.id} href={'/' + character.id}>
                                    <Card className='overflow-hidden'>
                                        <img
                                            src={character.image}
                                            alt={`Card image`}
                                            className='h-48 w-full object-cover'
                                        />
                                        <CardHeader className='p-4'>
                                            <p className='text-sm text-gray-600'>{character.name}</p>
                                        </CardHeader>
                                        <CardContent className='p-4'>
                                            <p className='text-sm text-gray-600'>
                                                Living status: {character.status}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className='mt-2 text-gray-500'>No users liked yet.</p>
                )}
            </div>
        </main>
    );
}

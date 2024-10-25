import '@/src/styles/globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { CalendarDays } from 'lucide-react';
import { Provider as ReduxProvider } from 'react-redux';
// Local
import { ApolloWrapper } from '@/src/graphql/apollo-wrapper';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
import { Toaster } from '@/src/components/ui/toaster';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/src/components/ui/hover-card';
import StoreProvider from '@/src/lib/providers/store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trade Local',
  description: 'Buy and Sell locally',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ApolloWrapper>
          <StoreProvider>
            <NavBar />
            {/* 
          div with min-h-screen needed as we have a footer 
          AND  we want the footer to be at the bottom even if zero content.
          mt-16 = margin same as nav height
          */}
            <div className='mt-16 flex min-h-screen flex-col'>{children}</div>
            <Footer />
          </StoreProvider>
        </ApolloWrapper>
        <Toaster />
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <nav className='fixed left-0 right-0 top-0 z-50 border-b bg-surface'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href='/'>
                  <Button variant='ghost'>🏠 Home</Button>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className='w-80'>
                <div className='flex justify-between space-x-4'>
                  <Avatar>
                    <AvatarImage src='./next.svg' />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className='space-y-1'>
                    <h4 className='text-sm font-semibold'>About Us</h4>
                    <p className='text-sm'>Rick and Morty fan website</p>
                    <div className='flex items-center pt-2'>
                      <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                      <span className='text-xs text-muted-foreground'>
                        Established 2024 by @sofasurfa
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Link href='/quotes'>
              <Button variant='ghost'>👓 Quotes</Button>
            </Link>
          </div>
          <div className='flex-shrink-0'>
            <Link href='/'>
              <img
                alt='navigation logo'
                className='h-14 w-auto'
                src='/rick-nav-logo.png'
              />
            </Link>
            <h2 className='text-6xl'></h2>
          </div>
          <div className='flex items-center'>
            <Link href='/likes'>
              <Button variant='ghost'>❤️ Liked</Button>
            </Link>
            <Link href='/contact'>
              <Button variant='ghost'>🤙 Contact</Button>
            </Link>
            <Link href='/login'>
              <Button variant='ghost'>🙏 Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className='border-t bg-surface py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='mb-4 w-full md:mb-0 md:w-1/4'>
            <h5 className='mb-2 text-lg font-semibold'>About Us</h5>
            <p className='text-sm text-gray-600'>Rick and Morty fan website</p>
          </div>
          <div className='mb-4 w-full md:mb-0 md:w-1/4'>
            <h5 className='mb-2 text-lg font-semibold'>Quick Links</h5>
            <ul className='text-sm'>
              <li>
                <Link href='/'>
                  <span className='text-gray-600 hover:text-gray-800'>
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href='quotes'>
                  <span className='text-gray-600 hover:text-gray-800'>
                    Quotes
                  </span>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <span className='text-gray-600 hover:text-gray-800'>
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href='/login'>
                  <span className='text-gray-600 hover:text-gray-800'>
                    Login
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className='mb-4 w-full md:mb-0 md:w-1/4'>
            <h5 className='mb-2 text-lg font-semibold'>Contact Us</h5>
            <p className='text-sm text-gray-600'>
              123 Main St, City, Country
              <br />
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
          {/* ----- Social stuff ------ */}
          <div className='w-full md:w-1/4'>
            <h5 className='mb-2 text-lg font-semibold'>Follow Us</h5>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                </svg>
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

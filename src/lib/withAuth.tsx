'use client';

import { useRouter } from 'next/navigation';

export const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    // Login data added to props via redux-store (or use react context for example)
    const { isLoggedIn } = props;

    const router = useRouter();

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      router.push('/login');
      // return (
      //   <Link ></Link>
      // );
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;

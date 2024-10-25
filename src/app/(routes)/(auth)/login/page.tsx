import { LoginForm } from '@/src/app/(routes)/(auth)/login/_components/login-form';
// import { LoginForm } from '@/app/components/login-form';

export default function Page() {
  return (
    <main className='flex h-screen w-full items-center justify-center px-4'>
      <LoginForm />
    </main>
  );
}

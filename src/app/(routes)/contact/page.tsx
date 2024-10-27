'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import * as React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { AutosizeTextarea } from '@/components/ui/autosize-textarea';
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Asap_Condensed } from 'next/font/google';

const FormSchema = z.object({
  msg: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const DEFAULT_VALUE = {
  msg: '',
};

export default function AutosizeTextareaForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: DEFAULT_VALUE,
    resolver: zodResolver(FormSchema),
  });

  const [notBot, setNotBot] = useState(false);
  const [loading, setLoading] = React.useState(false);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Your submitted data',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
      if (notBot) {
        form.setValue('We are watching you...', '');
      }
    }, 500);
  }

  return (
    <main className='container mx-auto max-w-screen-lg flex-grow py-8'>
      <div className='flex items-center justify-center'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-2/3 space-y-6'
          >
            <span className='flex gap-2'>
              <input
                type='checkbox'
                id='not-bod'
                className='cursor-pointer'
                checked={notBot}
                onChange={() => setNotBot((pre) => !pre)}
              />
              <label htmlFor='not-bod' className='cursor-pointer'>
                I am not a bot, promise 😇
              </label>
            </span>

            <FormField
              control={form.control}
              name='msg'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='msg'>Contact</FormLabel>
                  <FormControl>
                    <AutosizeTextarea
                      className='bg-surface'
                      placeholder='Write us a message...'
                      id='msg'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton loading={loading} type='submit'>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
}

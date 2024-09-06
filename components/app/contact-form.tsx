'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button, Input, Textarea } from '../ui';

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z
    .string({ message: 'Required' })
    .email({ message: 'Please enter a valid email' }),
  message: z.string().min(1, { message: 'Required' }),
});

type ContactFormState = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormState>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (values: ContactFormState) => {
    // TODO: Handle send email provider
    console.log('values:', values);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Name' className='mb-2' {...register('name')} />
        <Input placeholder='Email' className='mb-2' {...register('email')} />
        <Textarea
          placeholder='Message'
          className='mb-2'
          {...register('message')}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;

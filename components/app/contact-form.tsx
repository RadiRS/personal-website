'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button, Input, Textarea } from '../ui';

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z
    .string()
    .min(1, { message: 'Required' })
    .email({ message: 'Please enter a valid email' }),
  message: z.string().min(1, { message: 'Required' }),
});

type ContactFormState = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormState>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (values: ContactFormState) => {
    // TODO: Handle send email provider
    console.log('values:', values);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <Input
          placeholder='Name'
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          placeholder='Email'
          error={errors.email?.message}
          {...register('email')}
        />
        <Textarea
          placeholder='Message'
          rows={4}
          error={errors.message?.message}
          {...register('message')}
        />
        <div className='flex justify-end'>
          <Button className='w-1/3'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

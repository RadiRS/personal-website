'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import { emailjsInit, emailjsSend } from '@/lib/email';
import { Button, Input, Textarea } from '../ui';
import { Loader2 } from 'lucide-react';

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z
    .string()
    .min(1, { message: 'Required' })
    .email({ message: 'Please enter a valid email' }),
  message: z.string().min(1, { message: 'Required' }),
});

type ContactFormState = z.infer<typeof ContactFormSchema>;

emailjsInit();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormState>({
    resolver: zodResolver(ContactFormSchema),
  });

  console.log('isSubmitted:', isSubmitting);

  const onSubmit = async (values: ContactFormState) => {
    try {
      const template = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };

      await emailjsSend(template);

      reset();
      toast.success('Thank you!');
    } catch {
      toast.error('Something wrong!');
    }
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
          <Button disabled={isSubmitting} className='w-1/3'>
            {isSubmitting ? <Loader2 className='animate-spin' /> : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

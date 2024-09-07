import { ContactForm } from '@/components/app';

import user from '@/lib/user';

const ContactPage = () => {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Contact</h1>
        <p className='mb-2 text-2xl'>Let&apos;s Talk</p>
        <p className='mb-4 text-base text-muted-foreground'>
          Please don’t hesitate to send me email ({user.socials.email}) with
          your app idea so we can get started.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;

import { ContactForm } from '@/components/app';

const ContactPage = () => {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Contact</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;

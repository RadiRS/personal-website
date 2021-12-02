import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import user from '../static/data/user';
import InfoSection from './shared/info-section';
import Input from './shared/input';

/*
  EMAILJS CONFIG
  REACT_APP_EMAILJS_SERVICE_ID
  REACT_APP_EMAILJS_TEMPLATE_ID
  REACT_APP_EMAILJS_USER_ID
*/

const Contact = ({ config }) => {
  const refForm = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { serviceId, templateId, userId } = config;

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const res = await emailjs.sendForm(
        serviceId,
        templateId,
        refForm.current,
        userId
      );

      console.log('Response : ', res.text);
      setIsSubmitting(false);
      toast.success('Thank you!');
    } catch (e) {
      console.log('Error : ', e.text);
      toast.error(`Error ${e.text}`);
      setIsSubmitting(false);
    }

    e.target.reset();
  };

  return (
    <section id="hireme" className="box">
      <div className="box-inner grid-col-2">
        <InfoSection
          section="Hire Me"
          title="Let's Talk"
          desc={`Please don’t hesitate to send me email (${user.socials.email}) with your app idea so we can get started.`}
          className="mr-lg"
        />
        <form ref={refForm} className="form-contact mt-lg" onSubmit={onSubmit}>
          <Input
            required
            name="from_name"
            placeholder="Name"
            className="mb-md"
          />
          <Input
            required
            name="from_email"
            placeholder="Email"
            type="email"
            className="mb-md"
          />
          <Input
            required
            name="message"
            type="textarea"
            placeholder="Message"
            className="mb-md"
          />
          <button
            type="submit"
            className="btn button-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;

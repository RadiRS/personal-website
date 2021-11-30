import InfoSection from './shared/info-section';
import Input from './shared/input';

const Contact = () => {
  return (
    <section id="hireme" className="box">
      <div className="box-inner grid-col-2">
        <InfoSection
          section="Hire Me"
          title="Let's Talk"
          desc="Please don’t hesitate to send me email (radi.rusadi.jobs@gmail.com) with your app idea so we can get started."
          className="mr-lg"
        />
        <div className="form-contact mt-lg">
          <Input placeholder="Name" className="mb-md" />
          <Input placeholder="Email" type="email" className="mb-md" />
          <Input type="textarea" placeholder="Message" className="mb-md" />
          <button className="btn button-primary">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

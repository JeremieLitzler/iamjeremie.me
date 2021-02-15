import Layout from '@components/Layout';

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | The Who`} description={description}>
        <h1 className='title title-about'>Hello, I am Jeremie.</h1>
        <img
          className='profile-pic'
          src='static/images/profilepic-400w.jpg'
          alt="Jeremie climbing the Kandersteg's viaferrata"
        />
        <h2>Career</h2>
        <p>In 2009, I started my career.</p>
        <p>
          From Trust5 in Ireland to Conduent Business Solutions in France, I am
          passionate about improving the daily life of businesses, individuals
          and more through web-based applications and services.
        </p>
        <p>
          I have acquired a wide range of skills in software development for the
          Web and I thrive to learn new tricks every day.
        </p>
        <p>
          For more details about my work experience and skill, come read{' '}
          <a
            href='https://docs.google.com/document/d/1ywInLK5Y-LkL-0dbkaH0B6Dx927PDEHRz9yzUPWNgBY'
            rel='noopener'
            target='_blank'
          >
            my resume here
          </a>
          .
        </p>
        <h2>Hobbies</h2>
        <p>
          Otherwise, explore my articles. I am sharing more than software
          related thoughts and experiences. It includes and is not limited to:
        </p>
        <ul>
          <li>Health and diet</li>
          <li>Living more sustainably in our environnement</li>
          <li>Gardening</li>
          <li>Product reviews that I have purchased once or more</li>
        </ul>
        <h2>What else?</h2>
        <p></p>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

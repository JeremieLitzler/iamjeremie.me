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
        <h2>What I will write about</h2>
        <ul>
          <li>Web fundamentals</li>
          <li>Course review I have taken</li>
          <li>Software product review I have used</li>
          <li>Web development tips</li>
          <li>Work organisation</li>
          <li>Team management</li>
        </ul>
        <h2>And also my hobbies</h2>
        <p>
          Outside of the software engineering world, I am learning more and more
          to have a sustainable lifestyle, for me and my family.
        </p>
        <p>Also, I will review products we purchase</p>
        <p>It includes and is not limited to:</p>
        <ul>
          <li>Awareness about health and diet</li>
          <li>Use of energy</li>
          <li>Gardening</li>
          <li>Product reviews that I have purchased once or more</li>
        </ul>
        <h2>What else?</h2>

        <p>
          With my lovely wife and real twin girls, we live in the beautiful
          Rhone valley in the south of France.
        </p>
        <img
          src='static/images/family.jpg'
          alt='From left to right: Alyssia, Aurélie, Jérémie, Léyla'
        />
        <p>We own 2 sheeps (to mow the grass)</p>
        <img
          src='static/images/sheeps.jpg'
          alt='The twin girls feed the twin sheeps'
        />
        <p>And three cats:</p>
        <img
          src='static/images/owma.jpg'
          alt='The mother comfortably sleeping'
        />
        <img src='static/images/moustache.jpg' alt='Moustache looks at you' />
        <img src='static/images/luna.jpg' alt='Luna grins' />

        <p>
          Finally, I cycle to work daily, with almost 100.000 km travelled since
          2007.
        </p>
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

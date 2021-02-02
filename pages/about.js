import Layout from '@components/Layout';

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Who`} description={description}>
        <h1 className='title'>Hello, I am Jeremie.</h1>
        <p className='description'>
          In 2009, I started my career. <br /> From Trust5 in Ireland to
          Conduent in France, I am engaged to improve the daily life of
          businesses, individuals and more through web-based applications and
          services.
          <br /> I have acquired a wide range of skills in software development
          for the Web and I thrive to learn new tricks every day.
        </p>
        <p>
          For more details about my work experience and skill, come read{' '}
          <a
            href='https://docs.google.com/document/d/1ywInLK5Y-LkL-0dbkaH0B6Dx927PDEHRz9yzUPWNgBY'
            rel='noopener'
            target='_blank'
          >
            my resumre here
          </a>
          . Otherwise, explore my articles!
        </p>
        {/*<p>
          You can check out the{' '}
          <a href='https://github.com/cassidoo/next-netlify-blog-starter'>
            repo here.
          </a>{' '}
          If you'd like to build it yourself,{' '}
          <a href='https://url.netlify.com/ByVW0bCF8'>
            here is a tutorial on how to do so
          </a>
          !
        </p>*/}
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

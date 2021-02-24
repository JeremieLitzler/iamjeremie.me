export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <section className='newsletter'>
        <h3>Want to read more or never miss an article ?</h3>
        <iframe
          title="Sign to Jeremie's newsletter"
          src='https://jeremiel.substack.com/embed'
        ></iframe>
      </section>
      ;
    </>
  );
}

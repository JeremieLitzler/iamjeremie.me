export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <section className='newsletter'>
        <h2>Want to read more or never miss an article ?</h2>
        <iframe
          title="Sign to Jeremie's newsletter"
          src='https://jeremiel.substack.com/embed'
        ></iframe>
      </section>
    </>
  );
}

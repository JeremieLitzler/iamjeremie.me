export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <section className='newsletter'>
        <h3>Want to read more or never miss an article ?</h3>
        <iframe src='https://jeremiel.substack.com/embed'></iframe>
      </section>
      ;
    </>
  );
}

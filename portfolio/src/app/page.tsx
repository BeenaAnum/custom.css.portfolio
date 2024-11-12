import Head from 'next/head';
import Profile from "../../../portfolio/components/Profile";
import ResumeButton from "../../../portfolio/components/ResumeButton";
import SocialMediaLinks from "../../../portfolio/components/SocliaMediaLinks";
import About from './(public)/about/page';
import Projects from './(public)/projects/page';
import Contact from './(public)/contact/page';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="A simple portfolio website" />
      </Head>
      <div className="container">
        <section className="home">
          <Profile />
          <ResumeButton />
          <SocialMediaLinks />
        </section>
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

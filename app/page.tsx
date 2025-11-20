import Image from "next/image";

const highlights = [
  {
    title: "Sustainable Origins",
    description:
      "Every Khadi fabric is hand-spun and hand-woven, supporting rural artisans and preserving time-honored traditions."
  },
  {
    title: "Naturally Comfortable",
    description:
      "Lightweight, breathable, and versatile for every season. Feel the difference of fibers crafted with patience."
  },
  {
    title: "Crafted For You",
    description:
      "Build a wardrobe that reflects conscious choices. From everyday staples to festive attire, Khadi brings stories to life."
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="heroContent">
          <p className="badge">Hello friends welcome to Khadi</p>
          <h1>Celebrate the Spirit of Handspun Elegance</h1>
          <p className="subtitle">
            Discover textiles with a soul. Khadi blends heritage craftsmanship
            with modern design, inviting you into a world where every thread has
            meaning.
          </p>
          <div className="ctaGroup">
            <a className="ctaPrimary" href="#highlights">
              Explore Highlights
            </a>
            <a className="ctaSecondary" href="#story">
              Our Story
            </a>
          </div>
        </div>
        <div className="heroImage">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
            alt="Handwoven khadi fabric"
            width={650}
            height={650}
            priority
          />
        </div>
      </section>

      <section className="highlights" id="highlights">
        <h2>Why Khadi Matters</h2>
        <div className="highlightGrid">
          {highlights.map((item) => (
            <article key={item.title} className="highlightCard">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="storyImage">
          <Image
            src="https://images.unsplash.com/photo-1602203563352-982dcd6ed5d0?auto=format&fit=crop&w=900&q=80"
            alt="Khadi artisan at work"
            width={600}
            height={450}
          />
        </div>
        <div className="storyContent">
          <h2>Weaving Communities Together</h2>
          <p>
            Khadi is more than fabric — it is a movement rooted in independence,
            sustainability, and dignity. By supporting Khadi, you empower
            artisans who pour their passion and skills into every yarn.
          </p>
          <p>
            We collaborate with cooperatives across rural India, ensuring fair
            wages and responsible sourcing. From the first spin of the charkha
            to the final stitch, each product is crafted with care for people
            and the planet.
          </p>
          <a className="ctaSecondary" href="#contact">
            Join The Movement
          </a>
        </div>
      </section>

      <section className="newsletter" id="contact">
        <div className="newsletterCard">
          <h2>Stay Connected</h2>
          <p>
            Receive stories from artisan communities, care tips, and invites to
            future Khadi showcases.
          </p>
          <form className="form">
            <input
              aria-label="Email address"
              className="input"
              name="email"
              placeholder="Email address"
              type="email"
              required
            />
            <button className="ctaPrimary" type="submit">
              Notify Me
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Khadi Collective. Crafted with care.</p>
      </footer>
    </main>
  );
}

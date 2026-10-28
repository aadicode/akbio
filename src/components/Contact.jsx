import { profile } from "../data.js";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <p className="index">04</p>
        <div>
          <h2>Let’s talk about a role.</h2>
          <p>
            I am looking for SDET and automation roles where test design, APIs, and CI actually shape the release.
          </p>
        </div>
      </div>
      <div className="contact-row">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.phoneHref}>{profile.phone}</a>
        <span>{profile.location}</span>
      </div>
      <footer>
        <p>Aaditya Kumar Gaurav</p>
        <p>Test automation · Payments · Automotive · Electronics</p>
      </footer>
    </section>
  );
}

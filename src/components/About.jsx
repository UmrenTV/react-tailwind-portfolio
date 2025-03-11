import aboutSvg from "../assets/about.svg";
import SectionTitle from "../components/SectionTitle";

const About = () => {
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} alt="" className="w-full h-64" />
                <article>
                    <SectionTitle text="code and coffee" />
                    <p className="text-slate-600 mt-8 leading-loose">
                        Elit aspernatur nisi qui natus odit eaque repellendus.
                        Molestias nihil enim libero non perspiciatis? Quisquam
                        consequuntur incidunt quis doloribus commodi Dolorum quo
                        quas molestias corporis praesentium, distinctio? Odio
                        libero inventore
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;

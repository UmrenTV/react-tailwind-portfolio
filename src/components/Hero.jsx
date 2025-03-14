import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Hero = () => {
    return (
        <div className="bg-emerald-100 py-24 ">
            <div className="align-element grid md:grid-cols-2 items-center gap-8">
                <article>
                    <h1 className="text-7xl font-bold tracking-wider">
                        I'm Jane
                    </h1>
                    <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide ">
                        Full-Stack Developer
                    </p>
                    <p className="mt-2 text-lg text-slate-700 tracking-wide">
                        I create Solutions out of Problems
                    </p>
                    <div className="flex gap-x-4 mt-4">
                        <a href="https://zdravevski.pro" target="_blank">
                            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                        <a href="https://github.com/umrentv" target="_blank">
                            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                        <a
                            href="https://linkedin.com/in/zdravevski"
                            target="_blank"
                        >
                            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                    </div>
                </article>
                <article className="hidden md:block">
                    <img src={heroImg} alt="" className="h-80 lg:h-96" />
                </article>
            </div>
        </div>
    );
};

export default Hero;

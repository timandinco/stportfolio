// app/about/page.tsx

import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import Job from "../components/Job"; // import job component

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I&apos;m {data.fullName}. I live in {data.location}, where I
                  work to build web applications and projects.
                </h1>

                <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src={data.profileImage.image}
                    width={369}
                    height={369}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className="flex items-center justify-center gap-x-2 bg-indigo-300 border border-transparent hover:border-indigo-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                  >
                    <BiFile className="text-base" /> Download Resumé
                  </a>
                  <ul className="flex items-center gap-x-6">
                    {Object.entries(data.socialLinks)
                      .sort()
                      .map(([key, value], id) => (
                        <li key={id}>
                          <a
                            href={value}
                            rel="noreferer noopener"
                            className="flex items-center gap-x-3 py-3 hover:text-cyan-400 duration-300"
                          >
                            {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                          </a>
                        </li>
                      ))}
                  </ul>
                  <ul>
                    <li>
                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-3 hover:text-cyan-400 duration-300"
                      >
                        <BiEnvelope className="text-lg" />
                        {data.email}
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
              <p className="text-zinc-400 max-w-lg">
                I&apos;ve gained many skills and worked with different technologies over the years. In no particular
                order, here are a few of them.
              </p>

              <ul className="flex flex-wrap items-center gap-3 mt-8">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="bg-indigo-300 border border-transparent hover:border-indigo-700 rounded-md px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <Job />
          </div>
        ))}
    </main>
  );
}
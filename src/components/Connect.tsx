import type { ComponentType } from "react";
import { artistWebsite, socialLinks } from "../data/links.ts";
import { ExternalLinkIcon, InstagramIcon } from "./icons.tsx";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
};

function Connect() {
  return (
    <section id="connect" className="section text-center">
      <h2>Connect</h2>
      <p className="mx-auto mb-6 max-w-[50ch]">
        Find more about me on my website, and follow along with new work on
        Instagram.
      </p>

      <a
        href={artistWebsite.url}
        target="_blank"
        rel="noreferrer"
        className="btn-ghost mb-6 inline-flex items-center gap-2"
      >
        {artistWebsite.label}
        <ExternalLinkIcon className="h-4 w-4" />
      </a>

      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => {
          const Icon = socialIcons[social.label];
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
            >
              {Icon && <Icon className="h-4 w-4" />}
              {social.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Connect;

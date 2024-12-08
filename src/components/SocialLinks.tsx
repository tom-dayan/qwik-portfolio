import { component$ } from '@builder.io/qwik';
import { LuGithub } from "@qwikest/icons/lucide";
import { LuLinkedin } from "@qwikest/icons/lucide";

interface SocialLinksProps {
  githubUrl: string;
  linkedinUrl: string;
  customClass?: string;
}

export const SocialLinks = component$<SocialLinksProps>(({ githubUrl, linkedinUrl, customClass }) => {
    return (
        <div class={customClass || 'social_icons'}>
          <a href={githubUrl} target="_blank" rel="noreferrer" class="social-link">
            <LuGithub font-size={"large"} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" class="social-link">
            <LuLinkedin font-size={"large"} />
          </a>
        </div>
      );
});
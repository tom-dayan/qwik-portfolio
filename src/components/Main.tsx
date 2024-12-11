import { component$ } from '@builder.io/qwik';
import { Avatar } from './ui/Avatar';
import { SocialLinks } from './SocialLinks';
import './styles/Main.scss';
import avatarImage from '/assets/images/tom_dayan.jpeg';

export const Main = component$(() => {
  return (
    <div class="container">
      <div class="about-section">
        {/* Avatar Section */}
        <div class="image-wrapper">
        <Avatar.Root>
            <Avatar.Image src={avatarImage} width="150" height="150"/>
            {/* <Avatar.Fallback>TD</Avatar.Fallback> */}
        </Avatar.Root>
        </div>

        {/* Content Section */}
        <div class="content">
          <SocialLinks
            githubUrl="https://github.com/tom-dayan"
            linkedinUrl="https://www.linkedin.com/in/tom-dayan/"
          />
          <h1>Tom Dayan</h1>
          <p>Software Engineer</p>
          <SocialLinks
            githubUrl="https://github.com/tom-dayan"
            linkedinUrl="https://www.linkedin.com/in/tom-dayan/"
            customClass="mobile_social_icons"
          />
        </div>
      </div>
    </div>
  );
});


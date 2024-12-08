import { component$ } from '@builder.io/qwik';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBrain } from '@fortawesome/free-solid-svg-icons';
import {IoLogoReact, IoLogoDocker} from "@qwikest/icons/ionicons"
import { LuBrain } from '@qwikest/icons/lucide';
// import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { QChip } from '../integrations/react/Chip'
import './styles/Expertise.scss';

// Define a reusable SkillCard component
interface SkillCardProps {
  icon: any;
  title: string;
  description: string;
  techStack: string[];
}

const SkillCard = component$<SkillCardProps>(({ icon, title, description, techStack }) => {
    return (
        <div class="skill">
            <div class="icon-wrapper">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div class="flex-chips">
            <span class="chip-title">Tech stack:</span>
            {techStack.map((label, index) => (
                <QChip key={index} label={label} />
            ))}
            </div>
        </div>
    )
});

export const Expertise = component$(() => {
  const skills = [
    {
      icon: <IoLogoReact font-size={'xxx-large'}/>,
      title: 'Full Stack Web Development',
      description:
        'I specialize in developing efficient and scalable web applications, with expertise in both frontend and backend technologies.',
      techStack: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Flask',
        'Python',
        'PostgreSQL',
        'Elasticsearch',
        'Docker',
      ],
    },
    {
      icon: <IoLogoDocker font-size={'xxx-large'}/>,
      title: 'DevOps & Automation',
      description:
        'I bring extensive experience in setting up CI/CD pipelines, automating deployments, and managing containerized environments.',
      techStack: [
        'Git',
        'GitHub Actions',
        'CI/CD',
        'AWS',
        'GCP',
        'Linux',
        'ClearML',
      ],
    },
    {
      icon: <LuBrain font-size={'xxx-large'}/>,
      title: 'AI & Machine Learning',
      description:
        'My expertise includes building and deploying AI solutions that leverage state-of-the-art models and frameworks.',
      techStack: [
        'PyTorch',
        'TensorFlow',
        'OpenAI',
        'LangChain',
        'Hugging Face',
        'Streamlit',
        'LlamaIndex',
        'MLFlow',
        'Data Pipeline Design',
      ],
    },
  ];

  return (
    <div class="container" id="expertise">
      <div class="skills-container">
        <h1>Expertise</h1>
        <div class="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              techStack={skill.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
// import React from 'react';
import { Grid2, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
// import { Grid2 } from '@mui/material'; // Correct import for Grid2
import './styles/Project.scss';
import portfolioImage from '/assets/images/portfolio_project.jpeg';
import aiProjectImage from '/assets/images/ai_project.jpeg';
import automationProjectImage from '/assets/images/automation_project.jpeg';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my work and experience.",
    image: portfolioImage,
    link: "https://github.com/tom-dayan/portfolio",
  },
  {
    title: "AI Object Tracker",
    description: "A self-training AI system for object detection and tracking.",
    image: aiProjectImage,
    link: "https://github.com/tom-dayan/ai-tracker",
  },
  {
    title: "Automation Framework",
    description: "Developed an end-to-end QA automation framework.",
    image: automationProjectImage,
    link: "https://github.com/tom-dayan/automation-framework",
  },
];


export const ProjectComponent = qwikify$(() => {
  return (
    <Box sx={{ p: 4 }} id="projects">
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid2 container spacing={4}>
        {projects.map((project, index) => (
          <Grid2
            key={index}
            sx={{
              gridColumn: { xs: '1 / -1', sm: 'span 6', md: 'span 4' },
            }}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                width="150"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}, { eagerness: 'load' });

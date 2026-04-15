import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "UMBC",
    role: "Graduate Assistant",
    period: "Feb 2025 - Present",
    location: "Baltimore, Maryland",
    website: "https://umbc.edu",
    highlights: [
      "Serving as a Graduate Teaching Assistant for Introduction to Data Science and Advanced Computer Networks, supporting graduate and undergraduate students",
      "Evaluating and grading assignments, exams, and projects covering Python, data analysis, machine learning, and advanced networking concepts",
      "Collaborating with faculty to design grading rubrics, provide structured feedback, and maintain academic rigor across multiple course sections",
    ],
    techUsed: ["Python", "Data Analysis", "Machine Learning", "Networking"],
  },
  {
    id: "exp-2",
    company: "Zof AI",
    role: "Software Engineering Intern",
    period: "Jul 2025 - Aug 2025",
    location: "San Francisco, California",
    website: "https://zof.ai",
    highlights: [
      "Established the company's AI-agent deployment infrastructure using Docker and AWS ECS Fargate",
      "Architected end-to-end CI/CD pipelines using AWS CodePipeline reducing deployment time to <4 minutes and accelerating release cycles",
      "Implemented centralized logging and monitoring with AWS CloudWatch for distributed services, reducing incident detection time by 60%",
      "Migrated production AI agents from AWS to Azure (AKS), re-architecting CI/CD workflows and configuring load balancers while leveraging $100K+ in credits to reduce infrastructure costs",
    ],
    techUsed: ["Docker", "AWS ECS Fargate", "AWS CodePipeline", "AWS CloudWatch", "Azure AKS"],
  },
  {
    id: "exp-3",
    company: "LTIMindtree",
    role: "Software Engineer",
    period: "Jul 2022 - Jul 2024",
    location: "Hyderabad, India",
    website: "https://www.ltimindtree.com",
    highlights: [
      "Developed the frontend for milka.fr using Gatsby, GraphQL, and Contentful, delivering a high-performance, SEO-optimized architecture",
      "Reduced API response latency by 35% and improved system reliability during cloud migration by designing and optimizing 10+ RESTful APIs serving internal enterprise tools",
      "Decreased database query execution time by 40% and reduced server load by 25% through schema optimization, indexing strategies, and query refactoring in MongoDB and PostgreSQL",
      "Reduced bot traffic by 60% by implementing node-captcha protections and integrating CAST Highlight for cloud readiness analysis",
      "Improved file processing efficiency by 30% and automated storage workflows by building AWS SDK-based APIs to manage uploads and lifecycle policies in AWS S3",
    ],
    techUsed: ["Gatsby", "GraphQL", "Contentful", "Node.js", "PostgreSQL", "MongoDB", "AWS S3"],
  },
  {
    id: "exp-4",
    company: "Fluentgrid Ltd.",
    role: "Product Engineering Intern",
    period: "Jun 2021 - Aug 2021",
    location: "Visakhapatnam, India",
    website: "https://www.fluentgrid.com",
    highlights: [
      "Enhanced and automated the admin module UI for a workforce management system, implementing employee profile management, access controls, and intuitive user workflows",
    ],
    techUsed: ["JavaScript", "HTML", "CSS"],
  },
];

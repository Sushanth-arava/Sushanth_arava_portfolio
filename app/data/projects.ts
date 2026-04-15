import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction & Recommendation System",
    description:
      "End-to-end heart disease prediction platform using Next.js, a Python Flask API, classical ML models, and OpenAI APIs to generate risk predictions and explainable follow-up insights. Containerized and deployed on Azure Container Apps, achieving 90% test accuracy.",
    techStack: ["Next.js", "Flask", "OpenAI API", "Azure Container Apps", "Python", "Machine Learning"],
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "Sparkles",
        label: "AI-Powered Insights",
        detail: "OpenAI APIs generate explainable risk predictions",
      },
      {
        icon: "ShieldCheck",
        label: "90% Accuracy",
        detail: "Classical ML models achieving 90% test accuracy",
      },
      {
        icon: "Zap",
        label: "Cloud Deployed",
        detail: "Containerized and deployed on Azure Container Apps",
      },
      {
        icon: "Users",
        label: "Full-Stack",
        detail: "Next.js frontend with Python Flask API backend",
      },
    ],
  },
  {
    id: "aspect-sentiment-analysis",
    title: "Aspect-Based Sentiment Analysis",
    description:
      "BERT-based sentiment analysis system enhanced with DBiLSTM and Hierarchical Attention Networks (HAN), achieving 85% accuracy on the IMDB dataset for aspect-level sentiment classification.",
    techStack: ["Python", "TensorFlow", "BERT", "DBiLSTM", "HAN"],
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "Sparkles",
        label: "BERT + DBiLSTM",
        detail: "Enhanced BERT with DBiLSTM for deeper context understanding",
      },
      {
        icon: "ShieldCheck",
        label: "85% Accuracy",
        detail: "Achieved 85% accuracy on IMDB dataset",
      },
      {
        icon: "Zap",
        label: "Hierarchical Attention",
        detail: "HAN architecture for aspect-level classification",
      },
    ],
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description:
      "An exciting new project is currently in development. Stay tuned for updates.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description:
      "Another innovative project is on the way. Check back soon.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
];

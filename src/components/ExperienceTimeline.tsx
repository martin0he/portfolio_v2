import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Theme } from "../theme";
import { Box, Typography } from "@mui/material";

export default function ExperienceTimeline() {
  const experiences = [
    {
      date: "July 2025 - Present",
      title: "Software Engineer Co-op",
      company: "DraftKings Inc.",
      description: "...",
      icon: (
        <Box
          component={"img"}
          src="dk.jpeg"
          alt="DraftKings"
          sx={{
            width: 85,
            height: 85,
            borderRadius: "50%",
            bgcolor: Theme.colors.darkMode.BLUE,
          }}
        />
      ),
    },
    {
      date: "May 2024 - Present",
      title: "Founder & Co-President",
      company: "Kappa Theta Pi Professional Tech Fraternity",
      description:
        "Founded Northeastern’s first co-ed technology fraternity, growing a 60+ member community through workshops, networking events, mentorship, hackathons, fundraisers, and projects. Promoted professional, academic, and social development while liaising with the national KTP board to strengthen inter-chapter connections.",
      icon: (
        <Box
          component={"img"}
          src="ktp.png"
          alt="KTP"
          sx={{
            width: 85,
            height: 85,
            borderRadius: "50%",
          }}
        />
      ),
    },

    {
      date: "November - December 2024",
      title: "Front End Developer",
      company: "Khoury College of Computer Sciences",
      description:
        "Contributed to the Khoury Odyssey learning platform using Figma, Next.js, and Tailwind CSS; revamped content creation forms to improve creator workflows and built reusable components to ensure consistent, maintainable UI/UX.",
      icon: (
        <Box
          component={"img"}
          src="neu.jpg"
          alt="NEU"
          sx={{
            width: 85,
            height: 85,
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      date: "January - October 2024",
      title: "Technical Lead",
      company: "Northeastern Electric Racing",
      description:
        "Led a team of 11+ developers, coordinating project plans with leadership, conducting code reviews, and ensuring milestones were met. Trained new developers in full-stack web development, focusing on React front-end components and Express.js back-end functionality.",
      icon: (
        <Box
          component={"img"}
          src="ner.jpeg"
          alt="NER"
          sx={{
            width: 85,
            height: 85,
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      date: "January - April 2024",
      title: "Product Designer",
      company: "Northeastern Electric Racing",
      description:
        "Designed new features and epics for a custom project management dashboard, led cross-team design reviews for an analytics page, and created detailed Figma wireframes to guide front-end implementation.",
      icon: (
        <Box
          component={"img"}
          src="ner.jpeg"
          alt="NER"
          sx={{
            width: 85,
            height: 85,
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      date: "September - December 2023",
      title: "Software Developer",
      company: "Northeastern Electric Racing",
      description:
        "Delivered 10+ front- and back-end features for a project management dashboard used by 200+ engineers, collaborating in an agile team through standups, sprints, and iterative feedback.",
      icon: (
        <Box
          component={"img"}
          src="ner.jpeg"
          alt="NER"
          sx={{
            width: 85,
            height: 85,
            borderRadius: "50%",
          }}
        />
      ),
    },
  ];
  return (
    <Timeline
      position="alternate"
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0", fontFamily: "Afacad, sans-serif" }}
            align="right"
            color={Theme.colors.darkMode.WHITE}
          >
            <Typography
              fontSize={{ lg: 24, md: 20, sm: 16 }}
              fontFamily={"inherit"}
              color="inherit"
            >
              {exp.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ padding: 0.3 }}>{exp.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              fontWeight={650}
              fontSize={{ lg: 30, md: 28, sm: 24 }}
              component="span"
              fontFamily={"Afacad, sans-serif"}
              color={"#55a1df"}
            >
              {exp.title}
            </Typography>
            <br />

            <Typography
              fontSize={{ lg: 24, md: 20, sm: 16 }}
              component="span"
              fontFamily={"Afacad, sans-serif"}
              fontStyle={"italic"}
              color={Theme.colors.darkMode.WHITE}
            >
              {exp.company}
            </Typography>

            <br />
            <Typography
              marginTop={"10px"}
              marginBottom={"25px"}
              color={Theme.colors.darkMode.WHITE}
              fontFamily={"Afacad, sans-serif"}
            >
              {exp.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

import { Paper } from "@mantine/core";

import AboutUs from "@/components/AboutUs/AboutUs";
import HeaderTags from "@/components/HeaderTags/HeaderTags";


export default function About() {

  return (
    <Paper radius="0">
      <HeaderTags />
      <AboutUs />
    </Paper>
  );
}

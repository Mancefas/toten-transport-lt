import { SimpleGrid, Container, Center, Text } from "@mantine/core";

import { useLanguageContext } from "@/context/LanguageContext";
import classes from "./GoogleMapsIframe.module.css";

const GoogleMapsIframe = () => {
  const { selectedLanguage } = useLanguageContext();

  return (
    <Container size="sm" pb="lg">
      <SimpleGrid
        spacing="lg"
        cols={{ base: 1, sm: 2 }}
      >
        <Center style={{ flexDirection: "column" }}>
          <Text size="lg" fw="500">
            {selectedLanguage === "ltu" ? `Kontoros adresas` : "Office address"}
          </Text>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2296.353475035389!2d23.94600481577211!3d54.861604080324454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220e526e5937%3A0xc073b77d54d88e8!2sNordcarrier%20Baltic!5e0!3m2!1slt!2slt!4v1663436199566!5m2!1slt!2slt"
            title="Toten transport Lithuania office address"
            className={classes.gIframe}
            aria-hidden="false"
            tabIndex={0}
            loading="lazy"
          />
        </Center>

        <Center style={{ flexDirection: "column" }}>
          <Text size="lg" fw="500">
            {selectedLanguage === "ltu"
              ? `Sandėlio adresas`
              : "Warehouse address"}
          </Text>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2292.804175290485!2d24.064754515774652!3d54.92390838033981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7177a6bf24acb%3A0x34339fb09aefa1df!2sNordcarrier%20Baltic%2C%20sand%C4%97lis!5e0!3m2!1slt!2slt!4v1663436314093!5m2!1slt!2slt"
            title="Toten transport Lithuania warehouse address"
            className={classes.gIframe}
            aria-hidden="false"
            tabIndex={0}
            loading="lazy"
          />
        </Center>
      </SimpleGrid>
    </Container>
  );
};

export default GoogleMapsIframe;

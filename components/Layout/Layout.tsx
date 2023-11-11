import { AppShell } from "@mantine/core";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const Layout = ({ children}: any) => {
  return (
    <AppShell
      styles={{
        main: {
          minHeight: "100vh",
          height: "fitContent",
          width: "100%",
          padding: "0",
          margin: "0",
        },
      }}
    >
        <AppShell.Header> <Header /> </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Footer> <Footer /> </AppShell.Footer>
    </AppShell>
  );
};

export default Layout;

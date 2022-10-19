import { HeaderContainer, FooterContainer } from "../containers";

// We use this format function as a wrapper to keep the header and footer on every page.
export default function Format({ children }) {
  return (
    <>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </>
  );
}

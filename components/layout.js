import Menu from "./menubar";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
}

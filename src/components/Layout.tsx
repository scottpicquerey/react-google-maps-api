import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children?: React.ReactNode }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

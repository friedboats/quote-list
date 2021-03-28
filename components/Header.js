/** @jsx jsx */ /** @jsxRuntime classic */
import { css, jsx } from "@emotion/react";
import { StylesProvider } from "@material-ui/core/styles";

export default function Header({ cssProps, title, size = "large" }) {
  return size === "large" ? (
    <h1 css={cssProps}>{title}</h1>
  ) : (
    <h2 css={cssProps}>{title}</h2>
  );
}

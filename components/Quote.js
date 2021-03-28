/** @jsx jsx */ /** @jsxRuntime classic */
import { css, jsx } from "@emotion/react";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { StylesProvider } from "@material-ui/core/styles";

export default function Quote({ copy, cssProps }) {
  return (
    <StylesProvider injectFirst>
      <div css={cssProps}>
        <Icon
          css={css`
            position: absolute;
            top: -40px;
            left: -40px;
            color: purple;
            font-size: 100px;
            z-index: 99;
            opacity: 0.15;
            transform: rotateY(180deg);
          `}>
          format_quote
        </Icon>
        <Icon
          css={css`
            position: absolute;
            bottom: -40px;
            right: -40px;
            color: purple;
            font-size: 100px;
            z-index: -99;
            opacity: 0.15;
          `}>
          format_quote
        </Icon>
        <Typography>{copy}</Typography>
      </div>
    </StylesProvider>
  );
}

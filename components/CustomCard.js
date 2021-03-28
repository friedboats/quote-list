/** @jsx jsx */ /** @jsxRuntime classic */
import React from "react";
import { jsx } from "@emotion/react";
import Header from "@components/Header";
import CustomButton from "@components/CustomButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function CustomCard({ variant = "outlined", title, copy }) {
  return (
    <>
      <Card variant={variant} style={{ width: "100%", maxWidth: "300px" }}>
        <CardContent>
          <section>
            <Header title='Welcome.' />
            <CustomButton
              color='primary'
              variant='contained'
              label='Add a quote'
            />
          </section>
          <Header title={title} />
          <Typography gutterBottom>{title}</Typography>
          <Typography color='textSecondary'>{copy}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

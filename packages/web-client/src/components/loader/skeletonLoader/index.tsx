import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { TGenericType } from "utils/types";

interface ITypeDemo {
  loading: boolean;
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
  }
}

const variants = [
  "h1",
  "h3",
  "h3",
  "h3",
  "h3",
  "h3",
  "h3",
  "h3",
  "h3",
  "h3",
  "h3",
];

function TypographyDemo(props: ITypeDemo) {
  const { loading = false } = props;

  return (
    <>
      {variants.map((ele: string, i) => (
        <Typography component="div" key={i} variant={ele as TGenericType}>
          {loading ? <Skeleton /> : ele}
        </Typography>
      ))}
    </>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonLoder() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
    </Grid>
  );
}

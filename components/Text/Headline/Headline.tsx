import React from "react";
import classnames from "classnames";
import { TextProps } from "../Text";
import Styles from "../Text.module.css";

const Headline: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const classes = classnames(Styles["text--headline"], props?.className, props?.color);

  return <p className={classes}>{props.children}</p>;
};

export default Headline;

import { Link } from "gatsby";
import React from "react";

export const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/">
    <h>{siteTitle}</h>
    <p>{siteDescription}</p>
  </Link>
);

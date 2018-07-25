import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

// Notice that unlike most children props, the children prop passed to layout
// components is a function and needs to be executed
// children()

// Inline styles
// JSX is a preprocessor step that adds XML syntax to JavaScript. Just like XML,
// JSX tags have a tag name, attributes, and children (Source: http://buildwithreact.com/tutorial/jsx).
// JSX is a syntax extension to JavaScript. JSX may remind you of a template language, // but it comes with the full power of JavaScript. You can put any valid JavaScript
// expression inside the curly braces in JSX. JSX produces React “elements”. (Source: https://reactjs.org/docs/introducing-jsx.html)
// XML style attribute
// The attribute value is a JS object. Therefore, use commas instead of semi-colons,
// and use camelCase instead of hyphens.

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>

      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    {children()}
    
  </div>
);

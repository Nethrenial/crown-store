import React, { Component } from "react";
import "./collection-preview.styles.scss";
import ColletionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherProps }) => (
          <ColletionItem key={id} {...otherProps}></ColletionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;

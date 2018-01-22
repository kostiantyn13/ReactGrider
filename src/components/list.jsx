import React from "react";
import ListItem from "./list_item";

const List = props => {
  const Item = props.videos.map(video => {
    return <ListItem key={video.etag} video={video} />;
  });

  return <ul className="col-md-4 list-group">{Item}</ul>;
};

export default List;

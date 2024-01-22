import React, { useEffect, useMemo, useState } from "react";
import { fetchSimpleIcons, Cloud } from "react-icon-cloud";
import { renderCustomIcon, cloudProps } from ".";
import { useTheme } from "./use-theme";

export const DynamicCloud = (props) => {
  const { color } = useTheme();
  const [data, setData] = useState();
  
  useEffect(() => {
    fetchSimpleIcons({ slugs: props.iconSlugs }).then(setData);
  }, [props.iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) {
      return null;
    }

    const icons = [];
    for (const k of Object.keys(data.simpleIcons)) {
      icons.push(data.simpleIcons[k]);
    }

    return icons.map((i) => renderCustomIcon(i, color));
  }, [data, color]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};

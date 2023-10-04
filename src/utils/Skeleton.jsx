import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={370}
    viewBox="0 0 250 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="214" rx="3" ry="3" width="230" height="18" />
    <rect x="6" y="242" rx="5" ry="5" width="123" height="46" />
    <rect x="7" y="308" rx="3" ry="3" width="230" height="18" />
    <rect x="50" y="17" rx="0" ry="0" width="133" height="190" />
    <rect x="67" y="358" rx="0" ry="0" width="1" height="0" />
    <rect x="7" y="348" rx="0" ry="0" width="100" height="18" />
    <rect x="58" y="356" rx="0" ry="0" width="6" height="3" />
    <circle cx="224" cy="357" r="12" />
  </ContentLoader>
);

export default Skeleton;

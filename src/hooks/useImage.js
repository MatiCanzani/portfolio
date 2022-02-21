import { graphql, useStaticQuery } from "gatsby";

const useImage = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiAbout {
        edges {
          node {
            id
            data {
              attributes {
                Skils
                Title
              }
            }
          }
        }
      }
      imageSharp {
        fluid(maxWidth: 500) {
          srcWebp
        }
      }
    }
  `);
  return(result.imageSharp.fluid.srcWebp);
};

export default useImage;

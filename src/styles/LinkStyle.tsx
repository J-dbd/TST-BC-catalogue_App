import styled from "@emotion/styled";
import Unions from "lib/unions";
import { Link } from "react-router-dom";
import { LinkProps } from "lib";
/**
 *
 * @param content
 * @param link
 * @returns
 *
 * 3d styled button
 */
const LinkStyle3D = ({ content, toUrl }: LinkProps) => {
  const LinkContainer = styled(Link)`
    position: relative;
    display: inline-block;
    font-size: ${Unions.font_size.large};
    padding: 10px 20px;
    color: white;
    margin: 20px 10px 20px;
    border-radius: 6px;
    text-align: center;

    text-decoration: none;
    color: inherit;

    transition: top 0.01s linear;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);

    background-color: ${Unions.color.rightGreen};
    box-shadow: 0 0 0 1px ${Unions.color.rightGreen} inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 8px 0 0 rgba(126, 194, 155, 0.7), 0 8px 0 1px rgba(0, 0, 0, 0.4),
      0 8px 8px 1px rgba(0, 0, 0, 0.5);

    :active {
      top: 9px;

      box-shadow: 0 0 0 1px ${Unions.color.rightGreen} inset,
        0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 0 0 1px rgba(0, 0, 0, 0.4);
    }

    :hover {
      background-color: ${Unions.color.rightGreen};
    }
  `;

  return <LinkContainer to={toUrl}>{content}</LinkContainer>;
};

export default LinkStyle3D;

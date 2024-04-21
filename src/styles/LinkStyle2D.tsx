import { Link } from "react-router-dom";
import { LinkProps } from "lib";

import styled from "@emotion/styled";
import Unions from "lib/unions";

/**
 *
 * @param content
 * @param link
 * @returns
 *
 * 3d styled button
 */
const LinkStyle2D = ({ content, toUrl, onClick, state }: LinkProps) => {
  const LinkContainer = styled(Link)`
    position: relative;
    display: inline-block;
    font-size: ${Unions.font_size.mid};
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

  const ButtonContainer = styled.button`
    //init button css
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;

    margin: 20px;
    height: 45px;
    width: 80px;

    text-align: center;
    font-size: ${Unions.font_size.mid};
    font-weight: 500;
    color: #fff;
    cursor: pointer;

    text-align: center;

    border: none;
    background-size: 300% 100%;

    border-radius: 15px;
    //moz-transition: all .4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;

    background-image: linear-gradient(
      to right,
      ${Unions.color.rightGreen},
      ${Unions.color.midGreen},
      ${Unions.color.blue},
      ${Unions.color.blue}
    );
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

    /* :active {
      top: 9px;

      box-shadow: 0 0 0 1px ${Unions.color.rightGreen} inset,
        0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 0 0 1px rgba(0, 0, 0, 0.4);
    } */

    :hover {
      background-position: 100% 0;
      //moz-transition: all .4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
    :focus {
      outline: none;
    }
  `;

  return (
    <>
      {toUrl !== null ? (
        <LinkContainer to={toUrl}>{content}</LinkContainer>
      ) : (
        <ButtonContainer onClick={onClick}>{content}</ButtonContainer>
      )}
    </>
  );
};

export default LinkStyle2D;

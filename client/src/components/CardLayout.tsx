import React, { ReactNode } from "react";
import { Interface } from "readline";
import "./CardLayout.css";

interface IPropsCardLayout {
  title?: string;
  cardHeight?: string;
  children: ReactNode;
  buttonColor?: string;
  closeButton?: () => void;
  closeButtonText?: string;
}
const CardLayout = ({
  children,
  title,
  cardHeight,
  buttonColor,
  closeButton,
  closeButtonText,
}: IPropsCardLayout) => {
  return (
    <div className="card-layout-design" style={{ height: cardHeight }}>
      <h5>{title}</h5>
      {children}
     
        {closeButton && (
          <button
            type="submit"
            name="btnSubmit"
            style={{ color: buttonColor }}
            className="btn btn-danger"
            onClick={closeButton}
          >
            {closeButtonText}
          </button>
        )}
    </div>
  );
};

export default CardLayout;

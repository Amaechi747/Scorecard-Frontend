import * as React from 'react';
import photo from "./images/photo.png";

interface IAuthenticationRightProps {
}

const AuthenticationRight: React.FunctionComponent<IAuthenticationRightProps> = (props) => {
  return (
    <>
        <div >
        <img src={photo} alt="" style={{
                    height: "800px",
                    width: '750px',
                    top: "-75px",
                    objectFit: "cover"
                }} />
        </div>
    </>
  );
};

export default AuthenticationRight;

import React, { Children, cloneElement, useEffect, useState } from "react";

import { CanarySwitchProps } from "./CanarySwitch.types";
import Cookies from "js-cookie";

const CanarySwitch: React.FC<CanarySwitchProps> = ({
  children,
  cookieName,
  activated,
  deactivated,
  ...props
}) => {
  const _activated = activated || true;
  const _deactivated = deactivated || false;
  const [status, setStatus] = useState<boolean>(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setStatus(true);
      Cookies.set(cookieName, _activated);
    } else {
      setStatus(false);
      Cookies.set(cookieName, _deactivated);
    }
  };

  useEffect(() => {
    const _status = Cookies.get(cookieName);
    if (_status === _activated) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [cookieName]);

  return (
    <div className="canary-switch" data-canray={status} {...props}>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child, {
            checked: status,
            onChange: handleChange,
          });
        }
      })}
    </div>
  );
};

export default CanarySwitch;

import React, { Children, cloneElement, useEffect, useState } from "react";

import { CookieSwitchProps } from "./CookieSwitch.types";
import Cookies from "js-cookie";

const CookieSwitch: React.FC<CookieSwitchProps> = ({
  children,
  cookieName,
  attribute,
  activated,
  deactivated,
  ...props
}) => {
  const _activated = activated || true;
  const _deactivated = deactivated || false;
  const _attribute = attribute || "checked";
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
            [_attribute]: status,
            onChange: handleChange,
          });
        }
      })}
    </div>
  );
};

export default CookieSwitch;

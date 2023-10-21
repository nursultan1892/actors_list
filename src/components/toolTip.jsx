import React, { useState } from "react";
import { Tooltip } from "reactstrap";

function ToolTip({}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  console.log(idTool);

  return (
    <div>
      {/* <p>
        Somewhere in here is a{" "}
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          id="TooltipExample"
        >
          tooltip
        </a>
        .
      </p> */}
      <Tooltip isOpen={tooltipOpen} target={idTool} toggle={toggle}>
        Hello world!
      </Tooltip>
    </div>
  );
}

export default ToolTip;

import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export default function SourceCode() {
  return (
    <div>
      <CopyBlock
        language="matlab"
        text={`m=2;
k=1.25;
b=1.5;
num=[0 0 1];
denum=[m b k];
sys=tf(num,denum)
impulse(sys,20);
ylabel('simpangan y(meter)');
grid on`}
        showLineNumbers="true"
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}

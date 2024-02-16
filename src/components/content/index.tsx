import { h } from "preact";
import { ComponentProps } from "preact";
import MutableArrayDataProvider = require("ojs/ojmutablearraydataprovider");
import 'ojs/ojselectsingle';

import { useState } from 'preact/hooks';
import 'ojs/ojbutton';


type ChartProps = ComponentProps<"oj-chart">;
type ChartType  = { 
  id: number;
  value: string;
  label: string;
}

const chartTypeData = [
  { value: "bar", label: "Barras"},
  { value: "pie", label: "Pizza"}
]

const chartTypesDP: MutableArrayDataProvider<ChartType["value"], ChartType> =
  new MutableArrayDataProvider(chartTypeData, {keyAttributes: "value"});

export function Content() {

  const val = "bar" as ChartProps["type"];

  const [value, setValue] = useState(0);
  
  
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <p>Hello World !!!</p>
      <oj-select-single
        class="oj-form-control-max-width-md"
        data={chartTypesDP}
        value={val}
        >
      </oj-select-single>

      <br />
      <br />
      <br />

      <>
        <div>Contador: {value}</div>
        <br />
        <oj-button onClick={() => setValue(value + 1)}>Incrementar</oj-button>&nbsp;&nbsp;
        <oj-button onClick={() => setValue(value - 1)}>Decrementar</oj-button>
      </>
      
    </div>
  );
};

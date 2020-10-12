import { html } from 'lit-element';
import { DemoBarLoader } from './demo-barloader.component';

import '@spectrum/sp-barloader';
import '@spectrum/sp-container';


export default function template(this: DemoBarLoader) {
  return html`
  <sp-container>
  <sp-rule medium label="Search - Standard"></sp-rule>
  <sp-demo width="250">
    <pre><sp-barloader standard value=50></sp-barloader></pre>
  </sp-demo>
  <sp-demo width="250">
    <pre><sp-barloader small standard value=50></sp-barloader></pre>
  </sp-demo>
  <sp-rule medium label="Search - Labels"></sp-rule>
  <sp-demo width="250">
    <pre><sp-barloader label="Loading" value=50></sp-barloader></pre>
  </sp-demo>
  <sp-demo width="250">
    <pre><sp-barloader small label="Loading" value=50></sp-barloader></pre>
  </sp-demo>
  <sp-rule medium label="Search - Indeterminate"></sp-rule>
  <sp-demo width="250">
    <pre><sp-barloader indeterminate></sp-barloader></pre>
  </sp-demo>
  <sp-demo width="250">
    <pre><sp-barloader indeterminate small></sp-barloader></pre>
  </sp-demo>
  <sp-demo width="250">
    <pre><sp-barloader indeterminate label="Loading"></sp-barloader></pre>
  </sp-demo>
  <sp-demo width="250">
    <pre><sp-barloader indeterminate small label="Loading"></sp-barloader></pre>
  </sp-demo>
  <sp-rule medium label="Search - Positive - Warning - Critical"></sp-rule>
  <sp-demo width="250">
    <pre><sp-barloader positive label="Loading" value=50></sp-barloader></pre>
  </sp-demo>
  <sp-demo width="250">
    <pre><sp-barloader warning label="Loading" value=50></sp-barloader></pre>
  </sp-demo>
  <sp-demo width="250">
    <pre><sp-barloader critical label="Loading" value=50></sp-barloader></pre>
  </sp-demo>
  <sp-rule medium label="Search - Overbackground"></sp-rule>
  <sp-demo width="400" height="200">
    <pre><div style="width: 400px; height: 200px; background-color: rgba(0,0,0,0.4); display: flex; flex-direction: column; align-items: center; justify-content: space-around;">
 <sp-barloader overBackground label="Loading" value=50></sp-barloader>
</div></pre>
  </sp-demo>
  <sp-demo width="400" height="200">
  <pre><div style="width: 400px; height: 200px; background-color: rgba(0,0,0,0.4); display: flex; flex-direction: column; align-items: center; justify-content: space-around;">
  <sp-barloader overBackground small label="Loading" value=50></sp-barloader>
</div></pre>
  </sp-demo>
</sp-container>  
  `;
}

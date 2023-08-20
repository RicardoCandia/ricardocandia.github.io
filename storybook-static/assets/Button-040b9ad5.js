import{j as s}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{P as e}from"./index-8d47fad6.js";const o=({primary:r,backgroundColor:t,size:a,label:l,...n})=>{const u=r?"storybook-button--primary":"storybook-button--secondary";return s.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${a}`,u].join(" "),style:t&&{backgroundColor:t},...n,children:l})};o.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func};o.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};o.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}};export{o as B};
//# sourceMappingURL=Button-040b9ad5.js.map

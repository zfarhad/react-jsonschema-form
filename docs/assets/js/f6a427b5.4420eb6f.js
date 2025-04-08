"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[5784],{3636:(e,n,t)=>{t.d(n,{Iu:()=>m,yg:()=>y});var a=t(5668);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,y=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(5307),r=(t(5668),t(3636));const l={},i="Single fields",s={unversionedId:"usage/single",id:"version-3.2.1/usage/single",title:"Single fields",description:"The simplest example of a JSON Schema contains only a single field. The field type is determined by the type parameter.",source:"@site/versioned_docs/version-3.2.1/usage/single.md",sourceDirName:"usage",slug:"/usage/single",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/single",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-3.2.1/usage/single.md",tags:[],version:"3.2.1",frontMatter:{},sidebar:"docs",previous:{title:"oneOf, anyOf, and allOf",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/oneof"},next:{title:"Themes",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/themes"}},o={},p=[{value:"Field types",id:"field-types",level:2},{value:"Titles and descriptions",id:"titles-and-descriptions",level:2},{value:"Enumerated values",id:"enumerated-values",level:2},{value:"Custom labels for <code>enum</code> fields",id:"custom-labels-for-enum-fields",level:3},{value:"Alternative JSON-Schema compliant approach",id:"alternative-json-schema-compliant-approach",level:4},{value:"Disabled attribute for <code>enum</code> fields",id:"disabled-attribute-for-enum-fields",level:3},{value:"Nullable types",id:"nullable-types",level:2}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.c)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"single-fields"},"Single fields"),(0,r.yg)("p",null,"The simplest example of a JSON Schema contains only a single field. The field type is determined by the ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," parameter."),(0,r.yg)("h2",{id:"field-types"},"Field types"),(0,r.yg)("p",null,"The base field types in JSON Schema include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"string")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"number")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"integer")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"boolean")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"null"))),(0,r.yg)("p",null,"Here is an example of a string field:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "string"\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.yg)("h2",{id:"titles-and-descriptions"},"Titles and descriptions"),(0,r.yg)("p",null,"Fields can have titles and descriptions specified by the ",(0,r.yg)("inlineCode",{parentName:"p"},"title")," keyword in the schema and ",(0,r.yg)("inlineCode",{parentName:"p"},"description")," keyword in the schema, respectively. These two can also be overriden by the ",(0,r.yg)("inlineCode",{parentName:"p"},"ui:title")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ui:description")," keywords in the uiSchema."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  title: "My form",\n  description: "My description",\n  type: "string"\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.yg)("h2",{id:"enumerated-values"},"Enumerated values"),(0,r.yg)("p",null,"All base schema types support the ",(0,r.yg)("inlineCode",{parentName:"p"},"enum")," attribute, which restricts the user to select among a list of options. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "string",\n  enum: ["one", "two", "three"]\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.yg)("h3",{id:"custom-labels-for-enum-fields"},"Custom labels for ",(0,r.yg)("inlineCode",{parentName:"h3"},"enum")," fields"),(0,r.yg)("p",null,"This library supports a custom ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/issues/57"},(0,r.yg)("inlineCode",{parentName:"a"},"enumNames"))," property for ",(0,r.yg)("inlineCode",{parentName:"p"},"enum")," fields, which, however is not JSON-Schema compliant (see below for a compliant approach). The ",(0,r.yg)("inlineCode",{parentName:"p"},"enumNames")," property allows defining custom labels for each option of an ",(0,r.yg)("inlineCode",{parentName:"p"},"enum"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "number",\n  enum: [1, 2, 3],\n  enumNames: ["one", "two", "three"]\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.yg)("h4",{id:"alternative-json-schema-compliant-approach"},"Alternative JSON-Schema compliant approach"),(0,r.yg)("p",null,"JSON Schema has an alternative approach to enumerations using ",(0,r.yg)("inlineCode",{parentName:"p"},"anyOf"),"; react-jsonschema-form supports it as well."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  "type": "number",\n  "anyOf": [\n    {\n      "type": "number",\n      "title": "one",\n      "enum": [\n        1\n      ]\n    },\n    {\n      "type": "number",\n      "title": "two",\n      "enum": [\n        2\n      ]\n    },\n    {\n      "type": "number",\n      "title": "three",\n      "enum": [\n        3\n      ]\n    }\n  ]\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.yg)("h3",{id:"disabled-attribute-for-enum-fields"},"Disabled attribute for ",(0,r.yg)("inlineCode",{parentName:"h3"},"enum")," fields"),(0,r.yg)("p",null,"To disable an option, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ui:enumDisabled")," property in the uiSchema."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "boolean",\n  enum: [true, false]\n};\n\nconst uiSchema={\n  "ui:enumDisabled": [true],\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} />\n), document.getElementById("app"));\n')),(0,r.yg)("h2",{id:"nullable-types"},"Nullable types"),(0,r.yg)("p",null,"JSON Schema supports specifying multiple types in an array; however, react-jsonschema-form only supports a restricted subset of this -- nullable types, in which an element is either a given type or equal to null."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: ["string", "null"]\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')))}u.isMDXComponent=!0}}]);
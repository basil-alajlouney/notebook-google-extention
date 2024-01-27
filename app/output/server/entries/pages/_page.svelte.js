import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: `.header.svelte-80rjwz.svelte-80rjwz.svelte-80rjwz{display:flex;justify-content:space-between;align-items:center;width:100%;height:72px;padding:16px;background-color:rgba(0,0,0,0.1);border-bottom:solid 6px #151515;color:var(--font);cursor:default}.add-note-section.svelte-80rjwz.svelte-80rjwz.svelte-80rjwz{height:100%;display:flex;justify-content:center;align-items:center;position:relative}.add-note-section.svelte-80rjwz svg.svelte-80rjwz.svelte-80rjwz{transition:all 0.3s}.add-note-section.svelte-80rjwz svg.svelte-80rjwz.svelte-80rjwz:hover{color:#9414e2;transform:rotate(90deg);transition:all 0.3s;cursor:pointer}.tooltip.svelte-80rjwz.svelte-80rjwz.svelte-80rjwz{transform:translateX(-90%);opacity:0;left:0;position:absolute;white-space:nowrap;padding:0.3em 0.6em;transition:all 0.4s cubic-bezier(0.23, 1, 0.32, 1);background:var(--font);border-radius:8px;transform-origin:0 0;text-transform:capitalize;font-weight:400;font-size:16px;box-shadow:rgba(0, 0, 0, 0.25) 0 8px 15px;color:#151515}.tooltip.svelte-80rjwz.svelte-80rjwz.svelte-80rjwz::before{position:absolute;content:"";height:0.6em;width:0.6em;bottom:-0.2em;top:50%;left:100%;transform:translate(-50%, -50%) rotate(45deg);background:var(--font)}.add-note-section.svelte-80rjwz svg.svelte-80rjwz:hover+.tooltip.svelte-80rjwz{opacity:1;transform:translate(-120%);visibility:visible;pointer-events:auto;scale:1}.svelte-80rjwz.svelte-80rjwz.svelte-80rjwz{font-family:Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;--font:#e7decc\r
    }`,
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sections } = $$props;
  if ($$props.sections === void 0 && $$bindings.sections && sections !== void 0)
    $$bindings.sections(sections);
  $$result.css.add(css$1);
  return `    <div class="header svelte-80rjwz"><h1 class="svelte-80rjwz" data-svelte-h="svelte-1ub7aw9">NOTEBOOK</h1> <div class="add-note-section svelte-80rjwz"><svg width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="svelte-80rjwz"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32" class="svelte-80rjwz"></path></svg> <span class="tooltip svelte-80rjwz" data-svelte-h="svelte-vtvbgu">Add section</span></div></div> ${``}`;
});
const css = {
  code: ".section-wrapper.svelte-ruv5ns{padding-top:16px;height:calc(100% - 72px);width:100%;display:flex;flex-direction:column;align-items:center;overflow-y:auto}.section-wrapper.svelte-ruv5ns::-webkit-scrollbar{width:8px}.section-wrapper.svelte-ruv5ns::-webkit-scrollbar-thumb{background-color:rgba(255 ,255 ,255,0.4)}.svelte-ruv5ns{font-family:Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;--font:#e7decc\r\n    }",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Header, "Header").$$render(
      $$result,
      { sections: keys },
      {
        sections: ($$value) => {
          keys = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

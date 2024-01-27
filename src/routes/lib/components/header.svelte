<script lang="ts">
  import { addSection } from "../handleStorage";
  import AddNote from "./Add.svelte";

  export let sections:any[];

  let ShowaddNote = false;
  let conform = (section:string)=>()=>{
    addSection(section);
    ShowaddNote = false;
    sections.push(section);
    sections = sections;
  };
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="header">
  <h1>NOTEBOOK</h1>
  <div class="add-note-section">
    <svg width="48" on:click={()=>ShowaddNote = true} height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/>
    </svg>
    <span class="tooltip">Add section</span>
  </div>
</div>
  {#if ShowaddNote}
    <AddNote confirm={conform} exit={()=>ShowaddNote=false}/>
  {/if}
<style>
    .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    padding: 16px;
    background-color: rgba(0,0,0,0.1);
    border-bottom: solid 6px #151515;
    color: var(--font);
    cursor: default;
  }
  .add-note-section{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .add-note-section svg{
  transition: all 0.3s;
  }
  .add-note-section svg:hover{
    color: #9414e2;
    transform: rotate(90deg);
    transition: all 0.3s;
    cursor: pointer;
  }
  .tooltip {
  transform: translateX(-90%);
  opacity: 0;
  left: 0;
  position: absolute;
  white-space: nowrap;
  /* scale: 0; */
  padding: 0.3em 0.6em;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  background: var(--font);
  border-radius: 6px;
  transform-origin: 0 0;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  color: #151515;
  }
  .tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  bottom: -0.2em;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: var(--font);
  }
  .add-note-section svg:hover + .tooltip {
  opacity: 1;
  transform: translate(-120%);
  visibility: visible;
  pointer-events: auto;
  scale: 1;
  }
  *{
      font-family:Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      --font:#e7decc
    }
</style>
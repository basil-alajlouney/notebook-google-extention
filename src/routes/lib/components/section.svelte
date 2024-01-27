<script lang="ts">
  let genertateColor = ()=>{
    let str = "123456789abcdef";
    let c = "#";
    for (let i = 0; i < 6; i++) {
      c = c+ str[Math.floor(Math.random() *str.length)];
    }
    return c;
  };
  import { addNote, deleteSection} from "../handleStorage";
  import { onMount } from "svelte";
  import Add from "./Add.svelte";
  import List from "./list.svelte";
  export let x = false;
  export let notes:string[] = [];
  export let title = "";
  let ShowaddNote = false;
  let sectionHeader:HTMLElement;
  let conform = (txt:string)=>()=>{
    addNote(title, txt);
    ShowaddNote = false;
    notes.push(txt);
    notes = notes;
  };
  let deleteSec = (e:any)=>{
    deleteSection(title);
    e.currentTarget.parentElement.parentElement.remove();
  }
  onMount(()=>{
    sectionHeader.style.backgroundColor = genertateColor();
  })
</script>
  <input type="checkbox" bind:checked={x} name="test" id={title}/>
  <div class="section">
    <div class="section-header" bind:this={sectionHeader}>
      <label for={title} class="section-label">
        <div class="div-wrap">
          <svg class="arrow" width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"/>
          </svg>
        </div>
        <p class="section-title">{title}</p>
      </label>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="div-wrap svg-align">
        <svg on:click={deleteSec} class="trash" width="36" height="36" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M199 103v50h-78v30h270v-30h-78v-50zm18 18h78v32h-78zm-79.002 80l30.106 286h175.794l30.104-286zm62.338 13.38l.64 8.98l16 224l.643 8.976l-17.956 1.283l-.64-8.98l-16-224l-.643-8.976zm111.328 0l17.955 1.284l-.643 8.977l-16 224l-.64 8.98l-17.956-1.284l.643-8.977l16-224l.64-8.98zM247 215h18v242h-18z"/>
        </svg>
        <svg class="add-note" on:click={()=>ShowaddNote = true} width="36" height="36" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/>
        </svg>
      </div>
    </div>
    {#if x}
    <List
    contexts={notes}
    section={title}
    />
      {/if}

      {#if ShowaddNote}
        <Add confirm={conform} exit={()=>ShowaddNote = false} />
      {/if}

</div>

<style>
  .section{
    width: 80%;
    border-radius: 8px;
    background-color: wheat;
    margin-bottom: 16px;
    font-size: 22px;
  }
  input[type="checkbox"]{
    display: none;
  }

  .section-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    
    background-color: red;
    font-size: 22px;
  }
  .section-label{
    display: flex;
    align-items: center;
    cursor: default;
    border-radius: 8px;
    display:flex;
    padding-right: 8px;
    justify-content: space-between;
  }
  .section .arrow{
    rotate: -90deg;
    transition: 0.2s;
  }
  input[type="checkbox"]:checked +.section .arrow{
    rotate: 0deg;
    transition: 0.2s;
  }
  .add-note{
    margin-right: 16px;
    padding-right: 4px;
    rotate:0deg;
    transition: 0.2s;
  }
  .svg-align svg:hover{
    cursor: pointer;
    color: cyan;
    /* rotate:90deg;
    transition: 0.2s; */
  }
</style>
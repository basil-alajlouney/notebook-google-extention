<script lang="ts">
  import BlackBack from "./black-back.svelte";
  let section:string;
  export let confirm:(s:string)=>()=>void;
  export let exit:()=>void;
</script>
<BlackBack>
  <div class="wrapper">
    <h2>New Section</h2>
    <div class="input-container">
      <input type="text" bind:value={section} id="input" required={true}>
      <label for="input" class="label">Enter Text</label>
      <div class="underline"></div>
    </div>
    <br>
    <button on:click={confirm(section)} style="margin-left:18px"> Confirm </button>
    <button on:click={exit} style="background-color: red;color:white"> Exit</button>
  </div>
</BlackBack>

<style>
  .wrapper{
    padding: 12px;
    width:256px;
    /* height: 320px; */
    border-radius: 12px;
    background-color: wheat;
  }
  .input-container {
  position: relative;
  margin: 50px auto;
  width: 200px;
}

.input-container input[type="text"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}
button {
 padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 cursor: pointer;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

button:hover {
 color: #e8e8e8;
}

button:hover::before {
 width: 100%;
}
</style>
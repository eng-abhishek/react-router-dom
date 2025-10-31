import React from "react";
import { useSearchParams } from "react-router-dom";
function Search(){
const [getParams,setParams] = useSearchParams();

const SubmitHaldler = (e) => {
e.preventDefault();

const name = getParams.get('name');
const age = getParams.get('age');
alert(name+'  '+age);

}

const HandelSearch = (e) => {
        setParams({name:e.target.value});
}

return<>
<div>
<form onSubmit={SubmitHaldler}>
<label>Search:</label>
<input type="text" placeholder="Search" onChange={HandelSearch}></input>
<input type="number" placeholder="Age" onChange={(e)=>setParams({age:e.target.value})}></input>
<button type="submit">Search</button>
<button type="button" onClick={()=>setParams({})}>Reset</button>
<button type="button" onClick={()=>setParams({name:"Abhishek Soni"})}>Update Param</button>
</form>
</div>
</>


}

export default Search;
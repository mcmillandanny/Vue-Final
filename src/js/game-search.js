Vue.component("user-input", {
    props: ["game"],
    data: function(){
        return {
        
        }        
    },
    template: `
        <div>
         <select>
            <option>---Pick a genre---</option>
            <option>Sports</option>
            <option>Adventure</option>
            <option>Action</option>
            <option>Roleplaying</option>
            <option>Fantasy</option>
            <option>Sci-fi</option>
            <option>Puzzle</option>

        </select>
            <button>Submit</button>
        </div>
        `
})
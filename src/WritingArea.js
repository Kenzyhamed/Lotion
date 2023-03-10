
function WritingArea( {activeNote}){


    return  <div class="writeplacepos">

                <p id="writeplace"> Select a note, or create a new one. </p>

                <div class="writingtitle">
                    <textarea id="doctitle" autoFocus > Untitled</textarea>
                    <p id="delete">Delete </p>
                    <p id="save_edit">Save</p>
                    <input id="date" type="datetime-local"   />
                </div>

                
            </div>
}

export default WritingArea;
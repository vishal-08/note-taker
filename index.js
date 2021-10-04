const noteEl = document.getElementById("note-el")
const buttonEl = document.getElementById("btn-el")
const cardEl = document.getElementById("card-el")
let noteItem = []
let output = ""


buttonEl.addEventListener("click", () => {

    let noteObj = {
        note: noteEl.value
    }

    noteItem.push(noteObj)

    localStorage.setItem("noteItem", JSON.stringify(noteItem))

    noteEl.value = ""

    renderNotes()
})


function renderNotes() {
    noteItem = JSON.parse(localStorage.getItem("noteItem"))
    output = ""
    noteItem.forEach((item, index) => {
        output += `
            <div class="col-md-4">
                <div class="card" style="margin-bottom:20px">
                    <div class="card-title">Note - ${index + 1}  <i class="fa fa-bitbucket d-flex justify-content-end" style="font-size:20px; margin-right:20px;" onclick="onDelete(${index})")></i></div>
                    <div class="card-body">
                        ${(item.note).slice(0,90)}..
                        <button class="btn btn-primary " style="margin-left:70px;" data-toggle="modal" data-target="#modelId" > View Detail</button>
                        
                        <div class="modal fade" id="modelId" tabindex="-1" role="dialog"  aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                   
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                ${item.note}
                                </div>
                               
                                </div>
                            </div>
                            </div>

                    </div>
                    </div>
                </div>
            </div>
        `
    });
    
    cardEl.innerHTML = output
}

function onDelete(index) {
    noteItem.splice(index, 1)
    localStorage.setItem("noteItem", JSON.stringify(noteItem))
    renderNotes()
}




console.log()

renderNotes()



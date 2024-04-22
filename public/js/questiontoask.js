$(document).ready(function() {
    $.get("/questiontoask/data", function(data){
        data.forEach(function(item) {
            $("questiontoask").append(`
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5>${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.price}</p>
                     </div>
                </div>
            </div>
            `);
        });
    })
});
const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => buddyDetails(data.results));
}

loadBuddy();

const buddyDetails = buddies => {
    console.log(buddies);
    const buddyWrap = document.getElementById('buddy-wrap');
    for (const buddy of buddies) {
        console.log(buddy);
        buddyWrap.innerHTML = `
        <div class="card bg-info  mb-3 w-50 mx-auto">
            <div class="card-header bg-transparent">
            <div class="col-md-12 text-center">
            <img src="${buddy.picture.large}" class="img-fluid rounded-circle  border-4" alt="...">
        </div>
            </div>
            <div class="card-body text-success text-center">
            <h6 class="text-muted">Hi, My name is</h6>
            <h5 class="card-title">${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h5>
            </div>
            <div class="card-footer bg-transparent">
                <div class="row">
                    <div class="text-center text-md-center col-md-12 col-lg-4">
                        <h6 class="card-text">Age: ${buddy.dob.age}</h6>
                    </div>
                    <div class="text-center text-md-center col-md-12 col-lg-4">
                        <h6 class="card-text">Gender: ${buddy.gender}</h6>
                    </div>
                    <div class="text-center text-md-center col-md-12 col-lg-4">
                        <h6 class="card-text">Country: ${buddy.location.country}</h6>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


/*
    <div class="card mb-3 w-50 mx-auto">
        <div class=" row g-0">
            <div class="col-md-12 text-center">
                <img src="${buddy.picture.large}" class="img-fluid rounded-circle  border-4" alt="...">
            </div>
            <div class="col-md-12 text-center">
                <div class="card-body">
                    <h6 class="text-muted">Hi, My name is</h6>
                    <h5 class="card-title">${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h5>
                    <div class="row card-footer">
                            <div class="col-4">
                                <h6 class="card-text">Age: ${buddy.dob.age}</h6>
                            </div>
                            <div class="col-4">
                                <h6 class="card-text">Gender: ${buddy.gender}</h6>
                            </div>
                            <div class="col-4">
                                <h6 class="card-text">Country: ${buddy.location.country}</h6>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
*/
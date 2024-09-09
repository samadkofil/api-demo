(() => {
    fetch('https://bdapis.com/api/v1.2/divisions')
    .then(response => response.json())
    .then(data => {
        const divisions = data.data;
        const divisionSelect = document.getElementById('division');
        let divisionOptions = '<option value="0">--Select Division--</option>';

        for(const division of divisions) {
            divisionOptions += `<option value="${division.division}">${division.division}</option>`;
        }
        divisionSelect.innerHTML = divisionOptions;
    })
})()

function getDistricts() {
    const division = document.getElementById('division').value.toLowerCase();
    const districtSelect = document.getElementById('district');

    if(division === '0') {
        districtSelect.innerHTML = '<option value="0">--Select Division First--</option>';
    }

    fetch(`https://bdapis.com/api/v1.2/division/${division}`)
    .then(response => response.json())
    .then(data => {
        const districts = data.data;
        let districtOptions = '<option value="0">--Select District--</option>';
        for(const district of districts) {
            districtOptions += `<option value="${district.district}">${district.district}</option>`;
        }
        districtSelect.innerHTML = districtOptions;
    })    
}

function getUpazillas() {
    const district = document.getElementById('district').value.toLowerCase();
    const upazilaSelect = document.getElementById('upazilla');

    if(district === '0') {
        upazilaSelect.innerHTML = '<option value="0">--Select District First--</option>';
    }

    fetch(`https://bdapis.com/api/v1.2/district/${district}`)
    .then(response => response.json())
    .then(data => {
        const upazilas = data.data.upazillas;
        console.log(upazilas);        
        let upazilaOptions = '<option value="0">--Select Upazila--</option>';

        for(const upazila of upazilas) {
            upazilaOptions += `<option>${upazila}</option>`;
        }
        upazilaSelect.innerHTML = upazilaOptions;
    })    
}
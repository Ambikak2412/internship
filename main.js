const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
// Dummy data for doctors
const doctors = [
    {id: 1, name: 'Dr. John Doe', availableDays: ['Monday', 'Wednesday'], maxPatients: 10},
    {id: 2, name: 'Dr. Jane Smith', availableDays: ['tuesday', 'Thursday'], maxPatients: 8},
    //Add more doctors as needed
];
// Dummy data for appointments
const appointments = [];
// Endpoint to get a list of doctors
app.get('/doctors', (req,res) => {
    res.json(doctors);
});

// Endpoint to get details of a specifi doctor
app.get('/doctors/:id', (req, res) => {
    const doctor = doctors.find(d => d.id === parseint(req.params.id));
    if (doctor) {
        Response.json(doctor);
    } else {
        res.status(404).json({ message: 'Doctor not found'});
    }
});

// Endpoint to book an appointment

app.post('/appointments', (req,res) => {
const { doctorid, patientName } = req.body;
const doctor = doctors.find(d => d.id === parseint(doctorid));


if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found'});
}

if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found'});

}

if (appointments.filter(appt => appt.doctor === doctor,id).length >= doctor.maxPatients) {
    return res.status(400).json({ message: 'Doctor is fully booked for the day'});
}

appointments.push({ doctor: doctor.id, patientName });
res.json({ message: 'appointment booked successfully'});

});


app.listen(PORRT,() => {
    console.log('Server is running on http://localhost:${PORT}');
});
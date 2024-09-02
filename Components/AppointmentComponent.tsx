
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const AppointmentComponent = () => {
    const [appointments, setAppointments] = useState([
        { room: 'Room 101', time: '9:00 - 10:00 AM', client: 'Mohamed - Cosmetic Surgery' },
    ]);
    const [visible, setVisible] = useState(false);

    const onConfirmBooking = () => {
        setVisible(true);
    };

    const onClosePopup = () => {
        setVisible(false);
    };

    return (
        <div>
            <div className="appointment-schedule">
               
                {appointments.map((appointment, index) => (
                    <div key={index} className="appointment">
                        {appointment.client} ({appointment.time})
                    </div>
                ))}
            </div>
            <Button label="Confirm Booking" onClick={onConfirmBooking} />
            <Dialog header="Room Assignment Summary" visible={visible} onHide={onClosePopup}>
               
                <div>
                    <p>Client Name: Mohamed Ali</p>
                    <p>Branch: Canada</p>
                    <p>Service: Hair Transplantation</p>
                   
                    {appointments.map((appointment, index) => (
                        <p key={index}>{`${appointment.room} - ${appointment.time}`}</p>
                    ))}
                </div>
            </Dialog>
        </div>
    );
};

export default AppointmentComponent;

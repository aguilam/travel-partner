import { useState, useEffect } from 'react';
import '../../app/page.css'
import  Weather  from '../../app/weather.js';
import { Button, Modal } from 'antd';
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3001');
  const dataset = await response.json();
  const tickets = Object.values(dataset.data);
  return {
    props: {
      tickets: tickets,
    },
  };
}

export default function Pages({ tickets }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalInfo, setModalInfo] = useState([]);

const showModal = (ticket) => {
  setIsModalOpen(true);
  setModalInfo(ticket)
};
const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};
  console.log(tickets);
  return (
    <div className='Feature__containers'>
      {tickets.map((ticket, index) => {
        return (
          <>
          <Button 
            type="primary" 
            onClick={() => showModal(ticket)}
            key={index} 
            className='Feature__info_containers'
          >
            <p className='Feature__descriptions'>{ticket.origin}</p>
            <p className='Feature__descriptions'>{ticket.destination}</p>
            <p className='Feature__descriptions'>{ticket.airline}</p>
            <p className='Feature__descriptions'>{ticket.departure_at}</p>
            <p className='Feature__descriptions'>{ticket.return_at}</p>
            <p className='Feature__descriptions'>{ticket.expires_at}</p>
            <p className='Feature__descriptions'>{ticket.price}</p>
            <p className='Feature__descriptions'>{ticket.flight_number}</p>
            <p className='Feature__descriptions'>{ticket.transfers}</p>
          </Button>
          <Modal
          title="Title"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          >
            <p>{ModalInfo.origin}</p>
            <p>{ModalInfo.destination}</p>
            <p>{ModalInfo.airline}</p>
            <p>{ModalInfo.departure_at}</p>
            <p>{ModalInfo.return_at}</p>
            <p>{ModalInfo.expires_at}</p>
            <p>{ModalInfo.price}</p>
            <p>{ModalInfo.flight_number}</p>
            <p>{ModalInfo.transfers}</p>
            <Weather returnDate={ticket.return_at}></Weather>
          </Modal>
        </>
        );
      })}
    </div>
  );
}
